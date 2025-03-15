import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'নাম স্টাইল জেনারেটর',
  description: 'বিভিন্ন ফন্টে আপনার নাম দেখুন',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <head>
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
        />
        {/* Bootstrap Icons */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" 
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Architects+Daughter&family=Bad+Script&family=Berkshire+Swash&family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Dosis:wght@200..800&family=Gloria+Hallelujah&family=Homemade+Apple&family=Indie+Flower&family=Kaushan+Script&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Macondo&family=Mr+Dafoe&family=Pacifico&family=Parisienne&family=Permanent+Marker&family=Playwrite+CZ+Guides&family=Playwrite+HR+Guides&family=Playwrite+HR+Lijeva+Guides&family=Playwrite+HU:wght@100..400&family=Playwrite+ID+Guides&family=Playwrite+RO+Guides&family=Reenie+Beanie&family=Rock+Salt&family=Sacramento&family=Shadows+Into+Light&family=Tangerine:wght@400;700&family=Zeyada&display=swap" 
          rel="stylesheet"
        />
        {/* Bootstrap JavaScript (optional, for any interactive components) */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}