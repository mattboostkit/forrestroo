import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage Settings',
  type: 'document',
  // Uncomment this to make it a singleton document
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for this settings document (e.g., "Homepage")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'The main background image for the homepage hero section.',
      options: {
        hotspot: true, // Enables hotspot cropping
      },
    }),
    defineField({
      name: 'clientLogos',
      title: 'Client Logos',
      type: 'array',
      description: 'Logos of clients or partners to display on the homepage.',
      of: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Important for SEO and accessibility.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'mainLogo',
      title: 'Main Site Logo (e.g., for Header)',
      type: 'image',
      description: 'The primary logo for the Forrest Group website.',
      options: {
        hotspot: true,
      },
      fields: [ // Optional: Add alt text field for the main logo
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'serviceLogos',
      title: 'Our Services Section Logos',
      type: 'array',
      description: 'Upload the logos for the four main service areas displayed on the homepage.',
      of: [
        defineField({
          name: 'serviceLogoItem',
          title: 'Service Logo Item',
          type: 'object',
          fields: [
            defineField({
              name: 'serviceId',
              title: 'Service ID',
              type: 'string',
              description: 'Match this ID to the service in the code (hr, training, legal, health).',
              options: {
                list: [ // Provide dropdown for easier selection
                  { title: 'Forrest HR Services', value: 'hr' },
                  { title: 'Forrest Training Academy', value: 'training' },
                  { title: 'Forrest Legal', value: 'legal' },
                  { title: 'Forrest Health and Safety', value: 'health' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { // Customize preview in the array
            select: {
              title: 'serviceId',
              media: 'logo'
            },
            prepare(selection) {
              const {title, media} = selection
              // Map ID to a more readable title for preview
              const serviceTitles: {[key: string]: string} = {
                hr: 'HR Services Logo',
                training: 'Training Academy Logo',
                legal: 'Legal Logo',
                health: 'Health & Safety Logo'
              };
              return {
                title: serviceTitles[title] || title,
                media: media
              }
            }
          }
        }),
      ],
      validation: (Rule) => Rule.max(4).error('You can only add up to 4 service logos.'), // Limit to 4 logos
    }),
    // Add other homepage-specific fields here as needed
    // e.g., hero title, subtitle, call-to-action button text/link
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {title: `Homepage Settings`}
    },
  },
})