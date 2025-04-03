import {defineField, defineType} from 'sanity'
// Removed icon import for now to fix error
// import { CogIcon } from '@sanity/icons' // Example of a potentially valid icon

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  // icon: CogIcon, // Removed icon usage
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', // Use text for potentially longer descriptions
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Small logo displayed above the service title.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color (Hex)',
      type: 'string',
      description: 'Hex color code (e.g., #66235E). Used for the card background.',
      // Corrected validation syntax
      validation: (Rule) => Rule.regex(/^#[0-9a-fA-F]{6}$/, { name: 'hex color', invert: false }).error('Must be a valid hex color code (e.g., #RRGGBB)')
    }),
     defineField({
      name: 'textColor',
      title: 'Text Color (Hex)',
      type: 'string',
      description: 'Hex color code for text (e.g., #FFFFFF or #333333). Ensure good contrast with background.',
      // Corrected validation syntax
       validation: (Rule) => Rule.regex(/^#[0-9a-fA-F]{6}$/, { name: 'hex color', invert: false }).error('Must be a valid hex color code (e.g., #RRGGBB)')
    }),
    defineField({
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Optional: Set a number to control the display order (lower numbers appear first).',
        validation: (Rule) => Rule.integer().positive(),
    }),
    // Add other fields if needed, e.g., link to a service page
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
      }
    },
  },
})