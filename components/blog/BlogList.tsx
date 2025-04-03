"use client"; // Mark this as a Client Component

import React, { useState, useMemo } from 'react';
import BlogCard from './BlogCard'; // Import the BlogCard component
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Reuse or import the Post and Category interfaces
// (Ideally import from a shared types file)
interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: SanityImageSource;
  publishedAt: string;
  excerpt: string;
  categories: Array<{ title: string }> | null;
}

interface Category {
  title: string;
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

const BlogList: React.FC<BlogListProps> = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category filter

  // Memoize the filtered posts based on the selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return posts; // Show all posts if no category is selected
    }
    return posts.filter(post =>
      post.categories?.some(cat => cat.title === selectedCategory)
    );
  }, [posts, selectedCategory]);

  // Function to handle category button clicks
  const handleCategoryClick = (categoryTitle: string | null) => {
    setSelectedCategory(categoryTitle);
  };

  // Base styles for buttons
  const buttonBaseStyle = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none";
  // Style for inactive buttons
  const buttonInactiveStyle = "bg-gray-100 text-gray-700 hover:bg-gray-200";
  // Style for the active button
  const buttonActiveStyle = "bg-blue-600 text-white";

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`${buttonBaseStyle} ${!selectedCategory ? buttonActiveStyle : buttonInactiveStyle}`}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => handleCategoryClick(category.title)}
            className={`${buttonBaseStyle} ${selectedCategory === category.title ? buttonActiveStyle : buttonInactiveStyle}`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Filtered Post Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blog posts found{selectedCategory ? ` in the "${selectedCategory}" category` : ''}.</p>
      )}
    </div>
  );
};

export default BlogList;