import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity'; // Adjust path if necessary
// Re-import or share the Post interface if needed, assuming it's defined in blog/page.tsx or a shared types file
// For now, let's redefine it here for clarity, but ideally, it should be shared.
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  categories: Array<{ title: string }> | null;
}

// Helper function to format date (e.g., 15 Mar 2024)
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const authorName = "Sophie Forrest"; // As requested

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {post.mainImage && (
        <div className="relative w-full h-48"> {/* Adjust height as needed */}
          <Image
            src={urlFor(post.mainImage).width(500).height(300).url()} // Adjust dimensions as needed
            alt={post.title || 'Blog post image'}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
          {/* Calendar Icon Placeholder */}
          <span>📅 {formatDate(post.publishedAt)}</span>
          {/* User Icon Placeholder */}
          <span>👤 {authorName}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{post.excerpt}</p>
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
           {/* Tag Icon Placeholder */}
          <span className="text-xs text-gray-500">
            🏷️ {post.categories?.[0]?.title || 'Uncategorized'} {/* Display first category */}
          </span>
          <Link href={`/blog/${post.slug}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            Read more &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;