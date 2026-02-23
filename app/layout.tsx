import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://danedwards.us"),
  title: "Dan Edwards | Senior Software Engineer | React Native & TypeScript",
  description:
    "Portfolio of Dan Edwards, Senior Software Engineer at Infinite Red. 9+ years building web & mobile apps with React Native, TypeScript, Next.js, and AI. Explore projects, skills, and experience through an interactive terminal interface.",
  openGraph: {
    title: "Dan Edwards | Senior Software Engineer",
    description:
      "Interactive terminal portfolio of Dan Edwards. 9+ years building web & mobile apps with React Native, TypeScript, and AI at Infinite Red.",
    url: "https://danedwards.us",
    siteName: "Dan Edwards",
    images: [
      {
        url: "/terminal-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Dan Edwards Terminal Portfolio Website",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Edwards | Senior Software Engineer",
    description:
      "Interactive terminal portfolio. 9+ years building web & mobile apps with React Native, TypeScript, and AI.",
    images: ["/terminal-screenshot.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Edwards",
  url: "https://danedwards.us",
  image: "https://danedwards.us/headshot.jpg",
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Infinite Red",
    url: "https://infinite.red",
  },
  description:
    "Web & Mobile Developer with 9+ years of experience specializing in React Native, TypeScript, and AI.",
  knowsAbout: [
    "React Native",
    "TypeScript",
    "React.js",
    "Next.js",
    "Expo",
    "GraphQL",
    "Node.js",
    "AI",
    "Mobile Development",
    "Web Development",
  ],
  sameAs: [
    "https://github.com/cdanwards",
    "https://www.linkedin.com/in/cdanwards/",
    "https://bsky.app/profile/cdanwards.bsky.social",
  ],
  email: "cdaniel.edwards@gmail.com",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Anderson University",
    },
    {
      "@type": "EducationalOrganization",
      name: "The Iron Yard",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
