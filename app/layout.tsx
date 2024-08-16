import './globals.css';
import { krub } from '@/app/fonts';
import Navbar from '@/components/nav/navbar';
import React from 'react';
import { Footer } from '@/components/footer/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${krub.className} antialiased`}>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
