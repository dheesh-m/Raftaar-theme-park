import React from 'react';
import Head from 'next/head';
import Header from './Header';
import ScrollProgress from './ScrollProgress';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Raftaar Theme Park — Go Karting Website</title>
        <meta name="description" content="RACE • REST • REVIVE - Experience the ultimate go-karting adventure at Raftaar Theme Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
