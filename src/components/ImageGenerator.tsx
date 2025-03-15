import React, { useState, useRef, useEffect } from 'react';

interface ImageGeneratorProps {
  text: string;
  fontFamily: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ text, fontFamily }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(48);
  const [padding, setPadding] = useState(40);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Update canvas when any parameters change
  useEffect(() => {
    renderToCanvas();
  }, [text, fontFamily, backgroundColor, textColor, fontSize, padding]);

  // Function to render text to canvas
  const renderToCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const displayText = text || 'আপনার নাম এখানে দেখা যাবে';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get dimensions from the preview div
    const previewDiv = previewRef.current;
    if (!previewDiv) return;

    // Set canvas dimensions
    const width = 800;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Set font and text properties
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text in the center of canvas
    ctx.fillText(displayText, width / 2, height / 2);
  };

  // Function to save canvas as PNG
  const saveImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set filename with the text or a default name
    const filename = text ? 
      `${text.replace(/\s+/g, '-').substring(0, 15)}.png` : 
      'styled-name.png';
    
    link.download = filename;
    
    // Convert canvas to data URL
    link.href = canvas.toDataURL('image/png');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-4 p-3 border rounded">
      <h3 className="fw-bold mb-3 atma-semibold">ইমেজ জেনারেটর</h3>
      
      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <label className="form-label atma-semibold">ব্যাকগ্রাউন্ড কালার</label>
          <input 
            type="color" 
            className="form-control form-control-color w-100" 
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        
        <div className="col-md-6">
          <label className="form-label atma-semibold">টেক্সট কালার</label>
          <input 
            type="color" 
            className="form-control form-control-color w-100" 
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
        
        <div className="col-md-6">
          <label className="form-label atma-medium">ফন্ট সাইজ</label>
          <input
            type="range"
            className="form-range"
            min="20"
            max="100"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />
          <div className="text-center">{fontSize}px</div>
        </div>
        
        <div className="col-md-6">
          <label className="form-label atma-medium">প্যাডিং</label>
          <input
            type="range"
            className="form-range"
            min="10"
            max="100"
            value={padding}
            onChange={(e) => setPadding(parseInt(e.target.value))}
          />
          <div className="text-center">{padding}px</div>
        </div>
      </div>
      
      <div 
        ref={previewRef}
        className="p-4 mb-3 rounded"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          padding: `${padding}px`,
          textAlign: 'center',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {text || 'আপনার নাম এখানে দেখা যাবে'}
      </div>
      
      {/* Hidden canvas for generating image */}
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none' }}
      />
      
      <button 
        className="btn btn-primary w-100"
        onClick={saveImage}
        disabled={!text}
      >
        <i className="bi bi-download me-2 atma-semibold"></i>
        পিএনজি ইমেজ সেভ করুন
      </button>
    </div>
  );
};

export default ImageGenerator;