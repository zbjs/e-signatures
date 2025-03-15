import React, { useState } from 'react';

export interface FontOption {
  name: string;
  value: string;
  category?: string;
}

interface FontSelectorProps {
  selectedFont: string;
  setSelectedFont: (font: string) => void;
  fontOptions: FontOption[];
}

const FontSelector: React.FC<FontSelectorProps> = ({ 
  selectedFont, 
  setSelectedFont, 
  fontOptions 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Find the current selected font name
  const selectedFontName = fontOptions.find(font => font.value === selectedFont)?.name || 'Select Font';
  
  return (
    <div className="mb-4">
      <label className="form-label fw-bold atma-semibold">
        ফন্ট নির্বাচন করুন
      </label>
      
      {/* Bootstrap dropdown */}
      <div className="dropdown">
        <button 
          className="btn btn-outline-secondary dropdown-toggle w-100 d-flex justify-content-between align-items-center"
          type="button"
          onClick={() => setIsDropdownOpen(prev => !prev)}
          aria-expanded={isDropdownOpen}
          style={{ fontFamily: selectedFont }}
        >
          <span>{selectedFontName}</span>
          <i className="bi bi-chevron-down"></i>
        </button>
        
        <ul 
          className={`dropdown-menu w-100 ${isDropdownOpen ? 'show' : ''}`}
          style={{ maxHeight: '300px', overflowY: 'auto' }}
        >
          {fontOptions.map((font) => (
            <li key={font.value}>
              <button
                className="dropdown-item"
                onClick={() => {
                  setSelectedFont(font.value);
                  setIsDropdownOpen(false);
                }}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FontSelector;