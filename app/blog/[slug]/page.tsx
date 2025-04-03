// app/blog/[slug]/page.tsx
import React from 'react';
import { client, urlFor } from '@/lib/sanity'; // Import Sanity client and urlFor
import { PortableText } from '@portabletext/react'; // Component to render block content
import Image from 'next/image';
import type { Metadata } from 'next';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define the structure for a single post, including body
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource;
  publishedAt: string;
  // Assuming body is Portable Text (block content)
  body: any[]; // Use 'any[]' or a more specific type if you have one
  author: { name: string } | null; // Fetch author name
  categories: Array<{ title: string }> | null;
}

// Function to fetch a single post by its slug
async function getPost(slug: string): Promise<Post | null> {
  // Corrected GROQ query syntax for references
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    body,
    "author": author->{name}, // Correct reference fetching
    "categories": categories[]->{title} // Correct reference fetching
  }`;
  const post = await client.fetch(query, { slug });
  return post;
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Forrest HR Blog`,
    // Add description from excerpt or body if available and desired
  };
}

// Define the page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="container mx-auto px-4 py-12 text-center">Post not found.</div>;
  }

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
          <span>📅 Published on {formatDate(post.publishedAt)}</span>
          {/* Check if author exists before rendering */}
          {post.author && <span>👤 By {post.author.name}</span>}
        </div>
        {/* Check if categories exist and have items before rendering */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map(cat => (
              <span key={cat.title} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Main Image */}
      {/* Check if mainImage exists before rendering */}
      {post.mainImage && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title || 'Blog post image'}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}

      {/* Post Body */}
      {/* Check if body exists before rendering */}
      {post.body && (
         <div className="prose lg:prose-xl max-w-none">
           <PortableText value={post.body} />
         </div>
      )}
    </article>
  );
}

export const revalidate = 60; // Revalidate every 60 seconds