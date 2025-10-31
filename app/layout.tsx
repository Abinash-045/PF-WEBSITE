import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { profile } from '@/lib/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: profile.openGraph.title,
  description: profile.openGraph.description,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: profile.openGraph.title,
    description: profile.openGraph.description,
    url: profile.openGraph.url,
    siteName: profile.openGraph.siteName,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}