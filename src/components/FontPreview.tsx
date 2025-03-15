import React from 'react';
import { FontOption } from './FontSelector';

interface FontPreviewProps {
  name: string;
  fontOptions: FontOption[];
  selectedFont: string;
  setSelectedFont: (font: string) => void;
}

const FontPreview: React.FC<FontPreviewProps> = ({ 
  name, 
  fontOptions,
  selectedFont,
  setSelectedFont
}) => {
  return (
    <div className="mt-5">
      <h2 className="fw-bold mb-3">সমস্ত ফন্টে প্রিভিউ:</h2>
      <p className="text-muted mb-3">স্টাইলের উপর ক্লিক করুন সিলেক্ট করার জন্য</p>
      
      <div className="row row-cols-1 g-3">
        {fontOptions.map((font) => (
          <div 
            key={font.value} 
            className="col"
            id={`font-preview-${font.value.replace(/[^\w\s]/gi, '')}`}
          >
            <div 
              className={`p-3 border rounded bg-white ${
                selectedFont === font.value ? 'border-primary border-2' : ''
              }`}
              onClick={() => setSelectedFont(font.value)}
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="text-muted fs-6 mb-0">{font.name}</h3>
                {selectedFont === font.value && (
                  <span className="badge bg-primary">Selected</span>
                )}
              </div>
              <p 
                className="fs-3 mb-0" 
                style={{ fontFamily: font.value }}
              >
                {name || 'আপনার নাম এখানে দেখা যাবে'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontPreview;