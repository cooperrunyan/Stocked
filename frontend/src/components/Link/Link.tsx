import type React from 'react';
import NextLink from 'next/link';

export function Link({ children, href, newTab, style, className }: { href: string; newTab?: boolean } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink passHref scroll={false} href={href}>
      <a target={newTab ? '_blank' : ''} style={style} className={className}>
        {children}
      </a>
    </NextLink>
  );
}
