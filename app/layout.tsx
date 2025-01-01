import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aj.is-a.dev'),
  title: 'Alvin Joy',
  description:
    "A collection of Alvin Joy's social, professional, and coding profile links.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    'portfolio',
    'alvin joy',
    'skill',
    'javascript',
    'alvin',
    'profile',
    'developer',
    'links',
    'linktree',
    'website',
  ],
  openGraph: {
    title: 'Alvin Joy',
    description:
      "A collection of Alvin Joy's social, professional, and coding profile links.",
    url: 'https://aj.is-a.dev',
    siteName: 'Alvin Joy',
    images: ['/image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alvin Joy',
    description:
      "A collection of Alvin Joy's social, professional, and coding profile links.",
    site: '@_alvinjoy_',
    images: ['/image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="/analytics.js"
          data-website-id="a0c6688f-e4dc-483d-801d-476f26f1017f"
        ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
