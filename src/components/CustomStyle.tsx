import React from 'react';

interface CustomStyleProps {
  customFonts?: Array<{name: string, url: string}>;
}

const CustomStyle: React.FC<CustomStyleProps> = ({ customFonts = [] }) => {
  if (customFonts.length === 0) return null;
  
  const fontFaceRules = customFonts.map(font => `
    @font-face {
      font-family: '${font.name}';
      src: url('${font.url}') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `).join('\n');

  return (
    <style jsx global>{`
      ${fontFaceRules}
    `}</style>
  );
};

export default CustomStyle;