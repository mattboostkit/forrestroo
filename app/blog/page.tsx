import React from 'react';
import { client } from '@/lib/sanity'; // Adjust path if necessary
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'; // Import type for image source
import BlogList from '@/components/blog/BlogList'; // Import the BlogList client component

// Define the structure of a blog post based on the image
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource; // For the main post image
  publishedAt: string; // For the date
  excerpt: string; // For the short description
  // Assuming categories is an array of references in Sanity
  categories: Array<{ title: string }> | null;
}

// Define the structure for a category
interface Category {
  title: string;
}

// Function to fetch posts from Sanity with required fields
async function getPosts(): Promise<Post[]> {
  // Fetch posts ordered by published date, newest first
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    excerpt,
    "categories": categories[]->{title} // Fetch titles of referenced categories
  }`;
  const posts = await client.fetch(query);
  return posts;
}

// Function to fetch all category titles
async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category"]{title} | order(title asc)`;
  const categories = await client.fetch(query);
  return categories;
}

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  // Fetch posts and categories concurrently
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ]);

  // We will move the rendering logic to a client component below
  // For now, just return a placeholder or pass data to the client component
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      {/* Render the BlogList client component, passing fetched data */}
      <BlogList posts={posts} categories={categories} />
    </div>
  );
}