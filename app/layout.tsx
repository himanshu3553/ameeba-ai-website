import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ameeba AI - Prompt Management & Versioning Platform',
  description: 'Optimize your AI prompts with precision. Create, test, and optimize prompts to find the best performing versions for your AI application. Ameeba AI helps AI app developers manage prompt versions and perform A/B testing.',
  keywords: 'AI prompts, prompt management, prompt versioning, A/B testing, AI optimization, prompt engineering, AI development',
  authors: [{ name: 'Ameeba AI' }],
  creator: 'Ameeba AI',
  publisher: 'Ameeba AI',
  metadataBase: new URL('https://ameeba.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ameeba AI - Prompt Management & Versioning Platform',
    description: 'Optimize your AI prompts with precision. Create, test, and optimize prompts to find the best performing versions for your AI application.',
    url: 'https://ameeba.io',
    siteName: 'Ameeba AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameeba AI - Prompt Management & Versioning Platform',
    description: 'Optimize your AI prompts with precision. Create, test, and optimize prompts to find the best performing versions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Ameeba AI',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              description: 'Prompt management and versioning platform for AI app developers',
              url: 'https://ameeba.io',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'Prompt Creation',
                'Version Control',
                'A/B Testing',
                'AI Enhancement',
                'Auto-Versioning',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

