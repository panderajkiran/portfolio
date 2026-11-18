# Pande Raj Kiran Portfolio

## Goal
Build the complete responsive portfolio shell now, following the supplied premium editorial direction. Use the provided factual project details, leave intentional placeholders for the portrait and unspecified personal content, and make every section easy to refine one at a time later.

## What will be built
- A compact floating navigation with desktop links, an animated mobile menu, and a scroll-aware surface.
- A large asymmetric hero with editorial serif type, concise positioning copy, portrait placeholder, project/contact actions, and a floating availability card.
- A monochrome technology strip using names rather than fake client logos.
- Structured About, Skills, Projects, Experience, Certifications, Articles, Contact, and Footer sections.
- Three large, asymmetric project presentations using the supplied project names, descriptions, technologies, features, and live URLs.
- Dedicated project case-study pages for Habit Tracker, Smart Energy Consumption, and Weather Application.
- Restrained entrance, reveal, marquee, menu, and hover animations with reduced-motion support.
- Accessible keyboard behavior, visible focus states, semantic headings, responsive layouts, and a desktop-only custom cursor.
- Unique metadata for the home page and every project page, plus the existing favicon and robots file.

## Content handling
- The hero portrait area will be a polished placeholder designed for a future cutout photo, not a stock image.
- Unknown facts such as statistics, GitHub URLs, certification counts, dates, and detailed biography will not be invented.
- Unconfirmed sections will use restrained “details coming next” states or only the information supplied in the brief.
- Email and social actions will not point to fabricated addresses or profiles.

## Visual system
- Off-white background, white cards, charcoal typography, quiet borders, and one warm amber accent.
- Instrument Serif for display text and Manrope for body text.
- Large rounded hero and contact bands, strong whitespace, asymmetrical grids, and minimal shadows.
- All colors, typography, shadows, and motion values will live in the shared design system.

## Technical approach
- Keep the project’s TanStack Start architecture rather than replacing it with Next.js; the requested experience remains the same.
- Use TypeScript, Tailwind CSS v4, Lucide icons, reusable React components, and static typed data.
- Use lightweight CSS and browser-native interactions for motion to avoid unnecessary dependencies.
- Build project routes at `/projects/habit-tracker`, `/projects/smart-energy`, and `/projects/weather`.

## Verification
- Check the home page and project navigation in the running preview.
- Verify desktop and mobile layouts, menu behavior, focus states, links, reduced-motion handling, and absence of visual overlap.
- Confirm each content page has complete, unique social and search metadata.
