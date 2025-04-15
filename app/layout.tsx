
// app/layout.tsx
import Navbar from '@/components/Navbar';
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dhanusha Nandakumar | Software Engineer',
  description: 'Portfolio of Dhanusha Nandakumar, a software engineer with expertise in React.js, Next.js, and Node.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


