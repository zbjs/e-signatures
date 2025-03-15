// src/components/DisplayText.tsx
import React from 'react';

interface DisplayTextProps {
  text: string;
  fontFamily: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({ text, fontFamily }) => {
  return (
    <div className="mt-4 p-4 border rounded shadow bg-light">
      <h2 className="fw-bold mb-3">আপনার নামের প্রিভিউ:</h2>
      <div 
        className="fs-1 text-center p-4" 
        style={{ 
          fontFamily: fontFamily,
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {text || 'আপনার নাম এখানে দেখা যাবে'}
      </div>
    </div>
  );
};

export default DisplayText;