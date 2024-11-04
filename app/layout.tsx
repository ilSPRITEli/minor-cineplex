import './globals.css';
import { krub } from '@/app/fonts';
import Navbar from '@/components/nav/navbar';
import React from 'react';
import { Footer } from '@/components/footer/footer';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
      <html lang="en">
        <body className={`${krub.className} antialiased`}>
          <SessionProvider session={session}>
            <main className="flex min-h-screen flex-col">
              <Navbar />
              {children}
              <Footer />
          </main>
          </SessionProvider>
        </body>
      </html>

  );
}
