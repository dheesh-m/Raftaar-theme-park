# Raftaar Theme Park - Go Karting Website

A modern, responsive website for Raftaar Theme Park built with Next.js, React, and Tailwind CSS.

## Features

- 🏎️ **Modern Design**: Sleek, racing-inspired aesthetic with red, black, and white color scheme
- 📱 **Fully Responsive**: Mobile-first design that works perfectly on all devices
- 🎬 **Video Background**: Immersive hero section with looping go-kart track video
- 🖼️ **Interactive Gallery**: Masonry layout with lightbox functionality
- 📅 **Events Section**: Showcase upcoming racing events and competitions
- 📞 **Contact Form**: Functional contact form with validation
- ⚡ **Smooth Animations**: Framer Motion powered transitions and effects
- 🎨 **Custom Typography**: Blanca font for headings and Inter for body text

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Custom Blanca font + Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dheesh-m/Raftaar-theme-park.git
cd Raftaar-theme-park
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quick Start

```bash
# Clone and setup in one go
git clone https://github.com/dheesh-m/Raftaar-theme-park.git
cd Raftaar-theme-park
npm install
npm run dev
```

The website will be available at `http://localhost:3000`

## Project Structure

```
raftaar-theme-park/
├── components/          # React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with video
│   ├── Track.tsx       # Track showcase
│   ├── Events.tsx      # Events section
│   ├── Gallery.tsx     # Image gallery with lightbox
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer component
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document wrapper (for fonts)
│   └── index.tsx       # Home page
├── public/             # Static assets
│   ├── *.jpg          # Images
│   ├── *.mp4          # Videos
│   └── *.otf          # Fonts
├── styles/             # Global styles
│   └── globals.css     # Tailwind + custom CSS
└── ...config files
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary Red: `#ff0000`
- Black: `#000000` 
- White: `#ffffff`

### Fonts
- **Blanca**: Used for headings (loaded from `/public/Blanka-Regular.otf`)
- **Inter**: Used for body text (loaded from Google Fonts)

### Images
Replace images in the `/public` directory:
- `logo.jpg` - Main logo
- `trialvid.mp4` - Hero background video
- `kart*.jpg` - Gallery images
- `1.jpg`, `2.jpg`, `3.jpg` - Track images

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images with Next.js Image component
- Lazy loading for gallery images
- Smooth scroll behavior
- Efficient animations with Framer Motion

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# If port 3000 is busy, Next.js will automatically use 3001
# Or specify a different port:
npm run dev -- -p 3001
```

**Dependencies issues:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build files in git:**
The repository is configured to ignore build files (`.next/`, `node_modules/`). If you see build files in git status, they will be automatically ignored.

### Development Tips

- The project uses Next.js 14.2.3 with React 18.2.0 for optimal compatibility
- All images are optimized using Next.js Image component
- Fonts are loaded through `_document.tsx` for better performance
- The project is configured for Vercel deployment

## License

© 2025 Raftaar Theme Park. All rights reserved.
