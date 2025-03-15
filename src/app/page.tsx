'use client';
import { useState, useEffect } from 'react';
import NameInput from '../components/NameInput';
import FontSelector, { FontOption } from '../components/FontSelector';
import DisplayText from '../components/DisplayText';
import FontPreview from '../components/FontPreview';
import ImageGenerator from '../components/ImageGenerator';
import CustomStyle from '../components/CustomStyle';

// Custom Bangla font
const customFonts = [
  { name: 'HasanPro', url: '/fonts/Li Hasan Protilipi ANSI V1.ttf' }
];

// Combine custom fonts with Google fonts
const fontOptions: FontOption[] = [
  // Add custom Bangla font at the top of the list
  { name: 'হাসান প্রো', value: '"HasanPro", sans-serif' },
  
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
      <CustomStyle customFonts={customFonts} />
      <main className="py-4 bg-light min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="text-center mb-4 fw-bold">
                নাম স্টাইল জেনারেটর
              </h1>
              
              {!fontsLoaded && (
                <div className="alert alert-info text-center">
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