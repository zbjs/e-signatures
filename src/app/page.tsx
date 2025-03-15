'use client';
import { useState, useEffect } from 'react';
import NameInput from '../components/NameInput';
import FontSelector, { FontOption } from '../components/FontSelector';
import DisplayText from '../components/DisplayText';
import FontPreview from '../components/FontPreview';
import ImageGenerator from '../components/ImageGenerator';
import Head from 'next/head';

// Combine custom fonts with Google fonts
const fontOptions: FontOption[] = [
 
  // Google fonts
  { name: 'Alex Brush', value: '"Alex Brush", cursive' },
  { name: 'Allura', value: '"Allura", cursive' },
  { name: 'Architects Daughter', value: '"Architects Daughter", cursive' },
  { name: 'Bad Script', value: '"Bad Script", cursive' },
  { name: 'Berkshire Swash', value: '"Berkshire Swash", cursive' },
  { name: 'Caveat', value: '"Caveat", cursive' },
  { name: 'Dancing Script', value: '"Dancing Script", cursive' },
  { name: 'Dosis', value: '"Dosis", sans-serif' },
  { name: 'Gloria Hallelujah', value: '"Gloria Hallelujah", cursive' },
  { name: 'Homemade Apple', value: '"Homemade Apple", cursive' },
  { name: 'Indie Flower', value: '"Indie Flower", cursive' },
  { name: 'Kaushan Script', value: '"Kaushan Script", cursive' },
  { name: 'Lobster Two', value: '"Lobster Two", cursive' },
  { name: 'Macondo', value: '"Macondo", cursive' },
  { name: 'Mr Dafoe', value: '"Mr Dafoe", cursive' },
  { name: 'Pacifico', value: '"Pacifico", cursive' },
  { name: 'Parisienne', value: '"Parisienne", cursive' },
  { name: 'Permanent Marker', value: '"Permanent Marker", cursive' },
  { name: 'Reenie Beanie', value: '"Reenie Beanie", cursive' },
  { name: 'Rock Salt', value: '"Rock Salt", cursive' },
  { name: 'Sacramento', value: '"Sacramento", cursive' },
  { name: 'Shadows Into Light', value: '"Shadows Into Light", cursive' },
  { name: 'Tangerine', value: '"Tangerine", cursive' },
  { name: 'Zeyada', value: '"Zeyada", cursive' },
  
];

<Head>
{/* Basic SEO Tags */}
<title>নাম স্টাইল জেনারেটর | Bangla Name Style Generator</title>
<meta name="description" content="আপনার নামের জন্য আকর্ষণীয় ফন্ট এবং স্টাইল তৈরি করুন। সুন্দর বাংলা ফন্ট এবং অন্যান্য কাস্টম স্টাইল দিয়ে নিজের নাম সাজান।" />
<meta name="keywords" content="Bangla font, name style, font generator, নাম স্টাইল, বাংলা ফন্ট, stylish name" />
<meta name="author" content="Zobaidul Kazi" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charSet="UTF-8" />

{/* Open Graph (OG) Tags for Social Media Sharing */}
<meta property="og:title" content="নাম স্টাইল জেনারেটর - Bangla Name Style Generator" />
<meta property="og:description" content="বাংলা এবং অন্যান্য আকর্ষণীয় ফন্ট দিয়ে আপনার নাম কাস্টমাইজ করুন।" />
<meta property="og:image" content="/public/android-chrome-192x192.png" />
<meta property="og:url" content="https://yourwebsite.com/" />
<meta property="og:type" content="website" />

{/* Twitter Card for Better Sharing on Twitter */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="নাম স্টাইল জেনারেটর | Bangla Name Style Generator" />
<meta name="twitter:description" content="আপনার নামকে স্টাইলিশ ও ইউনিক করে তুলুন বাংলা ফন্ট সহ।" />
<meta name="twitter:image" content="/android-chrome-192x192.png" />

{/* Canonical URL */}
<link rel="canonical" href="https://yourwebsite.com/" />

{/* Favicon */}
<link rel="icon" href="/favicon.ico" />
</Head>

export default function Home() {
  const [name, setName] = useState<string>('');
  const [selectedFont, setSelectedFont] = useState<string>(fontOptions[0].value); // Default to Bangla font
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Check if fonts are loaded
  useEffect(() => {
    // Use the document.fonts API to check when custom fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(() => {
        setFontsLoaded(true);
      }, 1000);
    }
  }, []);
  
  // Scroll to selected font when it changes
  useEffect(() => {
    if (selectedFont) {
      const element = document.getElementById(`font-preview-${selectedFont.replace(/[^\w\s]/gi, '')}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedFont]);

  return (
    <>
    
      <main className="py-4 bg-light min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="text-center mb-4 fw-bold atma-semibold">
                নাম স্টাইল জেনারেটর
              </h1>
              
              {!fontsLoaded && (
                <div className="alert alert-info text-center atma-semibold">
                  ফন্ট লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
                </div>
              )}
              
              <div className="card mb-4">
                <div className="card-body">
                  <NameInput name={name} setName={setName} />
                  <FontSelector 
                    selectedFont={selectedFont} 
                    setSelectedFont={setSelectedFont} 
                    fontOptions={fontOptions} 
                  />
                  <DisplayText text={name} fontFamily={selectedFont} />
                </div>
              </div>
              
              <div className="card mb-4">
                <div className="card-body">
                  <ImageGenerator text={name} fontFamily={selectedFont} />
                </div>
              </div>
              
              <FontPreview 
                name={name} 
                fontOptions={fontOptions}
                selectedFont={selectedFont}
                setSelectedFont={setSelectedFont}
              />

              <footer className="mt-5 text-center text-secondary">
                <p>নাম স্টাইল জেনারেটর © {new Date().getFullYear()}</p>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}