import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-01'; // Use a recent date
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project ID or dataset. Check your environment variables.');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document === 'undefined', // server-side is fine, client-side needs careful consideration
  token: token, // Use API token for authenticated requests if available
  ignoreBrowserTokenWarning: true, // Suppress warning about using token in browser context
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}