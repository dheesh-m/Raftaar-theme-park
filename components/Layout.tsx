import React from 'react';
import Head from 'next/head';
import Header from './Header';
import ScrollProgress from './ScrollProgress';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Raftaar Theme Park — Go Karting Website</title>
        <meta name="description" content="RACE • REST • REVIVE - Experience the ultimate go-karting adventure at Raftaar Theme Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-red-900 text-white">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <style jsx global>{`
        /* Load local Lovelo font */
        @font-face {
          font-family: 'Lovelo';
          src: url('/Lovelo Black.otf') format('opentype');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }
        /* Load local Blanka font */
        @font-face {
          font-family: 'Blanka';
          src: url('/Blanka-Regular.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        /* Global mobile polish */
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        img, video { max-width: 100%; height: auto; display: block; }
        html { -webkit-tap-highlight-color: transparent; }
        /* Center content site-wide */
        .container { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
        @media (min-width: 640px) { .container { padding-left: 1rem; padding-right: 1rem; } }
        @media (min-width: 768px) { .container { padding-left: 1.5rem; padding-right: 1.5rem; } }
        @media (min-width: 1024px) { .container { padding-left: 2rem; padding-right: 2rem; } }
        /* Lovelo font for all headings - uppercase */
        h1, h2, h3, h4, h5, h6, .heading-primary, .heading-secondary, .heading-tertiary {
          font-family: 'Lovelo', sans-serif !important;
          text-transform: uppercase;
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
        }
      `}</style>
    </>
  );
};

export default Layout;
