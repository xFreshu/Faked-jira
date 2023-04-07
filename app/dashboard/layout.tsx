import React from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation/Navigation';
export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
