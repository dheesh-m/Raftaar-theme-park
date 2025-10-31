'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { pageTransition } from './PageTransition';

interface LinkWithTransitionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  transitionColor?: string;
  scroll?: boolean;
}

const LinkWithTransition: React.FC<LinkWithTransitionProps> = ({
  href,
  children,
  transitionColor = '#DC2626',
  scroll = true,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Check if it's a hash link (section scroll)
    if (href.startsWith('#')) {
      e.preventDefault();
      await pageTransition(() => {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'instant'
          });
        }
      }, transitionColor);
      return;
    }

    // Check if it's an external link
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return; // Let browser handle external links
    }

    // Internal route change
    if (router.pathname !== href) {
      e.preventDefault();
      await pageTransition(() => {
        if (scroll) {
          router.push(href);
        } else {
          router.push(href, undefined, { scroll: false });
        }
      }, transitionColor);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithTransition;

