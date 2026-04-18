import "./globals.css";

export const metadata = {
  title: "Yeni — Daily Gut + Hydration Reset",
  description:
    "India's first probiotic + hydration drink in convenient sachets. Feel lighter, hydrated & gut-happy — anytime, anywhere.",
  keywords:
    "probiotic drink, hydration sachet, gut health India, Yeni, probiotic sachet, gut reset, lemon ginger tulsi, kokum jeera, berry lemonade",
  openGraph: {
    title: "Yeni — Daily Gut + Hydration Reset",
    description:
      "India's first probiotic + hydration drink in convenient sachets.",
    type: "website",
    url: "https://drinkYeni.in",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yeni Probiotic + Hydration Sachets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeni — Daily Gut + Hydration Reset",
    description:
      "India's first probiotic + hydration drink in convenient sachets.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://drinkYeni.in"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
