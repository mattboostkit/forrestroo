// components/sections/LatestBlogPostsSection.tsx
import React from 'react';
import Link from 'next/link';
import { client } from '@/lib/sanity'; // Import Sanity client
import BlogCard from '@/components/blog/BlogCard'; // Reuse the BlogCard
import { Button } from '@/components/ui/button'; // Import Button
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Define Post interface (ideally import from shared types)
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  categories: Array<{ title: string }> | null;
}

// Function to fetch the latest 3 posts
async function getLatestPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    excerpt,
    "categories": categories[]->{title}
  }`;
  const posts = await client.fetch(query);
  return posts;
}

// This component needs to be async to fetch data
const LatestBlogPostsSection = async () => {
  const posts = await getLatestPosts();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Latest Insights from Our Blog
        </h2>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mb-12">No blog posts found yet.</p>
        )}

        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPostsSection;