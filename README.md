# Personal Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring smooth scroll animations and dynamic project showcases.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 💫 Smooth scroll animations using Framer Motion
- 📱 Fully responsive design
- 🎨 Modern UI with blur effects and gradient overlays
- 🖼️ Dynamic project showcase with parallax scrolling
- ⚡️ Fast page loads with optimized image loading
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide Icons
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** [Your deployment platform]

## Getting Started

First, clone the repository:

```bash
git clone [your-repo-link]
cd portfolio
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── [id]/
│           └── page.tsx
├── components/
│   └── Project.tsx
├── lib/
│   └── projects.ts
└── public/
    └── [project images]
```

## Key Components

### Project Showcase

The project showcase features a unique scrolling experience with:
- Parallax scrolling effects
- Blur transitions
- Dynamic content opacity
- Responsive image loading
- Interactive project cards

### Project Details

Individual project pages include:
- Full-width project images
- Technical details
- Technology tags
- Project descriptions
- Back navigation

## Customization

To add your own projects, modify the `projects.ts` file in the `lib` directory:

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
  technologies: string[];
  details?: string;
}
```

## Performance Optimization

- Images are optimized using Next.js Image component
- Font optimization with next/font
- Client-side animations with proper suspense
- Responsive image sizing

## Contributing

Feel free to submit issues and enhancement requests!

## License

[Your chosen license]

## Contact

[Your contact information]

---

Built with ❤️ by [Your Name]
