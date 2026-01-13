# Progress Spark - World Wide Progress

## Project Overview

Landing page for World Wide Progress, a recruitment consultancy in Morocco. Built with modern web technologies for optimal performance and user experience.

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd progress-spark

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

```sh
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```env
# n8n Webhook Configuration
VITE_WEBHOOK_URL=http://localhost:5678/webhook/wwpformdetails

# Meta (Facebook) Pixel Configuration
VITE_META_PIXEL_ID=123456789012345
```

**Variable Descriptions:**
- `VITE_WEBHOOK_URL` - n8n webhook endpoint for form submissions
- `VITE_META_PIXEL_ID` - Meta (Facebook) Pixel ID for tracking PageView and Lead events

> **Note:** When deploying to Vercel or other hosting platforms, make sure to set these environment variables in the platform's settings and redeploy to apply them.

## Project Structure

```
src/
├── components/
│   ├── landing/     # Landing page sections
│   └── ui/          # shadcn/ui components
├── contexts/        # React contexts
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
└── assets/          # Static assets
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check for issues
4. Commit and push your changes
5. Create a pull request
