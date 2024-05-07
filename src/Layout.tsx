import React from 'react';
import { Outlet } from 'react-router-dom';
import LinkButton, { LinkButtonPops } from './lib/ui/LinkButton';

export default function RootLayout() {
  const routeLinks: LinkButtonPops[] = [
    {
      to: 'home',
      label: 'Home',
      variant: 'primary',
      size: 'medium',
    },
    {
      to: 'dashboard',
      label: 'Dashboard',
      variant: 'primary',
      size: 'medium',
    },
  ];

  return (
    <section className='grid grid-rows-[auto,1fr] bg-background min-h-dvh'>
      <header className='px-4 py-2 bg-white flex items-center justify-center gap-4 border-b border-border'>
        {routeLinks.map((routeLink, index) => (
          <LinkButton key={index} {...routeLink} />
        ))}
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
