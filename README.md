# Boldo Landing Page

![Boldo Landing Page]

A modern, responsive landing page built with Next.js and Tailwind CSS. This project implements the Boldo template design with clean, maintainable code and smooth animations.

## Features

- 📱 Fully responsive design that works on all devices
- 🎨 Modern UI with smooth animations and transitions
- 🧩 Modular component architecture
- 🔍 SEO-friendly with proper metadata
- 🌙 Dark mode support
- 📊 Interactive charts and data visualization
- 🍔 Mobile-friendly navigation with slide-out menu

## Components

- **Navbar**: Responsive navigation with mobile slide-out menu
- **Hero Section**: Animated hero section with call-to-action buttons
- **Services Section**: Showcase of main services/features
- **Feature Sections**: Detailed feature highlights with visual elements
- **Testimonials Section**: Customer testimonials with navigation
- **Accordion Section**: FAQ or information in collapsible format
- **Blog Section**: Latest blog posts or news
- **CTA Section**: Call-to-action with email signup
- **Footer**: Site navigation and information

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate) - Animation utilities for Tailwind

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/eobikoru/boldo
   cd boldo-landing
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
boldo-landing/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── navbar.tsx        # Navigation component
│   ├── hero-section.tsx  # Hero section component
│   └── ...               # Other components
├── public/               # Static assets
│   ├── images/           # Images
│   └── assets/           # Other assets
├── lib/                  # Utility functions
└── ...                   # Configuration files
\`\`\`

## Customization

### Colors

The primary colors used in this template are:

- Primary blue: `#0A1930`
- Accent green: `#65E4A3`
- Chart blue: `#3DBEFF`

You can modify these colors in the `tailwind.config.ts` file.

### Typography

The template uses the Inter font family by default. You can change this in the `app/layout.tsx` file.

### Images

Replace the images in the `public/images/` and `public/assets/images/` directories with your own images. Make sure to maintain the same filenames or update the references in the components.

## Animations

The template includes custom CSS animations defined in the `tailwind.config.ts` file and used throughout the components:

- `fade-in-down`: Fades in elements while moving up from a slightly lower position
- `fade-in-right`: Fades in elements while moving left from a slightly right position

Animation delays are available in `globals.css`:
- `.animation-delay-200`
- `.animation-delay-400`
- `.animation-delay-600`

## Browser Support

The template is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from the Boldo template
- Icons from [Lucide Icons](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
