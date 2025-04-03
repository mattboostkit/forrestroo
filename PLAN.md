# Forrest Group Website Development Plan (Next.js + Shadcn/ui + Sanity)

This document outlines the plan for building the Forrest Group HR website using Next.js, Tailwind CSS, Shadcn/ui, and integrating Sanity CMS for blog content and images.

**Phase 1: Project Setup & Core Structure**

1.  **Initialize Shadcn/ui:**
    *   Run `npx shadcn-ui@latest init` to set up the component library.
    *   Configure `tailwind.config.ts`, `postcss.config.mjs`, and `app/globals.css` according to Shadcn/ui requirements (using Geist font, default style/colors).
2.  **Define Page Structure (Next.js App Router):**
    *   Create page files within `app/`:
        *   `app/page.tsx` (Homepage)
        *   `app/services/page.tsx`
        *   `app/about/page.tsx`
        *   `app/testimonials/page.tsx`
        *   `app/blog/page.tsx` (Initial placeholder)
        *   `app/contact/page.tsx`
3.  **Create Core Layout (`app/layout.tsx`):**
    *   Ensure root layout includes Geist font setup.
    *   Develop reusable `Header` and `Footer` components in `components/shared/`.
    *   `Header`: Placeholder logo, navigation links (Home, Services, About, Testimonials, Blog, Contact).
    *   `Footer`: Copyright info, basic links.
4.  **Establish Component Directories:**
    *   `components/ui/`: Populated by Shadcn/ui.
    *   `components/shared/`: Custom reusable components (`Header`, `Footer`, etc.).
    *   `components/sections/`: Page-specific section components (`HeroSection`, etc.).
    *   `components/forms/`: Form components (`ContactForm`).

**Phase 2: Build Static Pages & Components**

*   Use provided content and Shadcn/ui components:
    1.  **Homepage (`app/page.tsx`):** Build `HeroSection`, `KeyFeaturesSection`.
    2.  **Services Page (`app/services/page.tsx`):** Build introduction, `ServiceBreakdownSection` (using `Card` or `Accordion`).
    3.  **About Page (`app/about/page.tsx`):** Build Introduction, `OurValues`, `WhyChooseUs` sections.
    4.  **Testimonials Page (`app/testimonials/page.tsx`):** Build `TestimonialsDisplay` section (using `Card`, placeholder content).
    5.  **Contact Page (`app/contact/page.tsx`):** Build introduction, `ContactForm` (using Shadcn form components), display contact details (placeholders).
    6.  **Blog Page (`app/blog/page.tsx`):** Create placeholder page ("Coming Soon").

**Phase 3: Styling & Basic SEO**

1.  **Styling:** Apply consistent Tailwind CSS styling, leverage Shadcn/ui theme, ensure responsiveness.
2.  **Basic SEO:**
    *   Use Next.js Metadata API for `title` and `description` tags in layouts/pages (incorporate keywords).
    *   Use semantic HTML.
    *   Utilize App Router for clean URLs.

**Phase 4: Future Sanity Integration (Plan)**

*   To be implemented later:
    1.  **Sanity Project Setup:** Set up Sanity.io project, define schemas (`blogPost`, etc.).
    2.  **Next.js Integration:** Install/configure `next-sanity` client.
    3.  **Dynamic Blog:** Refactor `app/blog/page.tsx` and create `app/blog/[slug]/page.tsx` to fetch/display Sanity data.
    4.  **Image Management:** Replace placeholders with Sanity-managed images.

**High-Level Plan Visualization:**

```mermaid
graph TD
    subgraph Phase 1: Setup & Structure
        A[Init Shadcn/ui] --> B[Define Page Routes];
        B --> C[Create Core Layout];
        C --> D[Establish Component Dirs];
    end

    subgraph Phase 2: Build Pages
        D --> E[Homepage Components];
        D --> F[Services Page Components];
        D --> G[About Page Components];
        D --> H[Testimonials Page Components];
        D --> I[Contact Page Components];
        D --> J[Blog Placeholder Page];
    end

    subgraph Phase 3: Polish & SEO
        K[Pages Built] --> L[Apply Tailwind Styling];
        L --> M[Implement Basic SEO Metadata];
    end

    subgraph Phase 4: Future Sanity CMS
        N[Static Site Complete] --> O{Plan: Sanity Setup};
        O --> P{Plan: Next.js Integration};
        P --> Q{Plan: Dynamic Blog & Images};
    end

    Phase 1 --> Phase 2;
    Phase 2 --> K;
    Phase 3 --> N;
    Phase 4 -- Follows --> N;