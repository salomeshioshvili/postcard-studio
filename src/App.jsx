import React, { useState, useRef } from 'react';
import HomePage from './HomePage.jsx';
import InfoPage from './InfoPage.jsx';
import html2canvas from 'html2canvas';
import TopNav from './TopNav.jsx';

const App = () => {
  // Starts with 'home'
  const [currentPage, setCurrentPage] = useState('home');

  const [currentBg, setCurrentBg] = useState('aurora');
  const [currentFrameBg, setCurrentFrameBg] = useState('holographic');
  const [currentEffect, setCurrentEffect] = useState('none');
  const [customBgImage, setCustomBgImage] = useState('');
  const [customFrameImage, setCustomFrameImage] = useState('');
  const [message, setMessage] = useState('any love i made you feel, is yours to keep.');
  const [fontSize, setFontSize] = useState(18);
  const [textColor, setTextColor] = useState('#ffffff');
  const [textAlign, setTextAlign] = useState('center');
  const [fontFamily, setFontFamily] = useState('Georgia');
  const [frameColor, setFrameColor] = useState('#ffffff');
  const [frameWidth, setFrameWidth] = useState(5);
  const [frameStyle, setFrameStyle] = useState('solid');
  const [frameShape, setFrameShape] = useState('rounded');

  const bgFileRef = useRef(null);
  const frameFileRef = useRef(null);
  const previewRef = useRef(null);

  // Show HomePage if currentPage is 'home'
  if (currentPage === 'home') {
    return (
      <HomePage
        onHomeClick={() => setCurrentPage('home')}
        onInfoClick={() => setCurrentPage('info')}
        onMakePostcard={() => setCurrentPage('maker')}
      />
    );
  }

  if (currentPage === 'info') {
    return (
      <InfoPage
        onHomeClick={() => setCurrentPage('home')}
        onInfoClick={() => setCurrentPage('info')}
      />
    );
  }

  // Enhanced backgrounds with modern gradients
  const backgrounds = {
    aurora: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    cosmic: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    sunset: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    ocean: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    forest: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
    galaxy: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    dreamy: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    mystical: "linear-gradient(135deg, #c471ed 0%, #f64f59 100%)"
  };

  // Cool frame backgrounds
  const frameBackgrounds = {
    holographic: "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b)",
    neon: "linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)",
    crystal: "linear-gradient(45deg, #e0c3fc 0%, #9bb5ff 100%)",
    golden: "linear-gradient(45deg, #ffd700, #ffed4e, #fff200)",
    rainbow: "linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff80, #0080ff, #8000ff)",
    marble: "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
    metallic: "linear-gradient(45deg, #2c3e50, #3498db, #9b59b6)",
    vintage: "linear-gradient(45deg, #8b4513, #daa520, #cd853f)"
  };

  const quickMessages = [
    { text: "any love i made you feel, is yours to keep.", emoji: "💖", label: "Love Message" },
    { text: "thinking of you today and always 💕", emoji: "💕", label: "Thinking of You" },
    { text: "sending you sunshine and smiles ☀️", emoji: "☀️", label: "Sunshine" },
    { text: "you make my heart happy 🌈", emoji: "🌈", label: "Happy Heart" },
    { text: "distance means nothing when you mean everything 🌟", emoji: "🌟", label: "Distance" },
    { text: "grateful for your friendship every day 🙏", emoji: "🙏", label: "Gratitude" }
  ];

  const getCurrentBackground = () => {
    if (customBgImage) return `url('${customBgImage}')`;
    return backgrounds[currentBg] || backgrounds.aurora;
  };

  const getCurrentFrameBackground = () => {
    if (customFrameImage) return `url('${customFrameImage}')`;
    return frameBackgrounds[currentFrameBg] || frameBackgrounds.holographic;
  };

  const getEffectFilter = () => {
    switch (currentEffect) {
      case 'vintage': return 'contrast(1.2) brightness(1.1) sepia(0.3)';
      case 'sepia': return 'sepia(1)';
      case 'blur': return 'blur(1px)';
      case 'grayscale': return 'grayscale(1)';
      case 'brightness': return 'brightness(1.3) contrast(1.1)';
      case 'dreamy': return 'contrast(0.9) brightness(1.2) saturate(1.3)';
      case 'dramatic': return 'contrast(1.4) brightness(0.9) saturate(1.2)';
      default: return 'none';
    }
  };

  const handleBgUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomBgImage(e.target.result);
        setCurrentBg('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFrameUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCustomFrameImage(e.target.result);
        setCurrentFrameBg('');
      };
      reader.readAsDataURL(file);
    }
  };

  // Use html2canvas to download an image
  const downloadPostcard = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: null,
        useCORS: true,
        scale: 2,
        allowTaint: true,
        height: previewRef.current.scrollHeight,
        width: previewRef.current.scrollWidth,
        logging: false,
        ignoreElements: (element) => {
          // Don't ignore any elements, capture everything
          return false;
        }
      });

      // Apply effects to the canvas if needed
      if (currentEffect !== 'none') {
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Apply effects manually to the canvas
        for (let i = 0; i < data.length; i += 4) {
          let r = data[i];
          let g = data[i + 1];
          let b = data[i + 2];

          switch (currentEffect) {
            case 'sepia':
              data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
              data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
              data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
              break;
            case 'grayscale':
              const gray = r * 0.299 + g * 0.587 + b * 0.114;
              data[i] = gray;
              data[i + 1] = gray;
              data[i + 2] = gray;
              break;
            case 'vintage':
              data[i] = Math.min(255, r * 1.2);
              data[i + 1] = Math.min(255, g * 1.1);
              data[i + 2] = Math.min(255, b * 0.9);
              break;
            case 'brightness':
              data[i] = Math.min(255, r * 1.3);
              data[i + 1] = Math.min(255, g * 1.3);
              data[i + 2] = Math.min(255, b * 1.3);
              break;
            case 'dramatic':
              data[i] = Math.min(255, r * 1.4 * 0.9);
              data[i + 1] = Math.min(255, g * 1.4 * 0.9);
              data[i + 2] = Math.min(255, b * 1.4 * 0.9);
              break;
            case 'dreamy':
              data[i] = Math.min(255, r * 1.2 * 0.9);
              data[i + 1] = Math.min(255, g * 1.2 * 0.9);
              data[i + 2] = Math.min(255, b * 1.2 * 0.9 * 1.3);
              break;
          }
        }

        // For blur effect, create a new canvas with blur
        if (currentEffect === 'blur') {
          const blurCanvas = document.createElement('canvas');
          const blurCtx = blurCanvas.getContext('2d');
          blurCanvas.width = canvas.width;
          blurCanvas.height = canvas.height;

          blurCtx.filter = 'blur(2px)';
          blurCtx.drawImage(canvas, 0, 0);

          const blurUrl = blurCanvas.toDataURL('image/png', 1.0);
          const a = document.createElement('a');
          a.href = blurUrl;
          a.download = 'my-postcard.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          return;
        }

        if (currentEffect !== 'blur') {
          ctx.putImageData(imageData, 0, 0);
        }
      }

      const url = canvas.toDataURL('image/png', 1.0);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-postcard.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating postcard:', error);
      alert('There was an error generating your postcard. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-5">
      {/* Top Navigation */}
      <TopNav
        onHomeClick={() => setCurrentPage('home')}
        onInfoClick={() => setCurrentPage('info')}
      />
      <div className="pt-24"/>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Preview Section */}
          <div className="lg:col-span-3 bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 flex items-center justify-center">
            <div
              ref={previewRef}
              className="relative w-full max-w-lg h-80 bg-cover bg-center rounded-2xl shadow-2xl"
              style={{
                backgroundImage: getCurrentBackground(),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: getEffectFilter(),
                transition: 'all 0.3s ease'
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-48 shadow-2xl transition-all duration-300"
                style={{
                  backgroundImage: getCurrentFrameBackground(),
                  backgroundSize: 'cover',
                  borderColor: frameColor,
                  borderWidth: `${frameWidth}px`,
                  borderStyle: frameStyle,
                  borderRadius: frameShape === 'square' ? '0px' : '15px'
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center p-4 z-10 bg-black/20"
                  style={{
                    color: textColor,
                    fontSize: `${fontSize}px`,
                    textAlign: textAlign,
                    fontFamily: fontFamily,
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    fontWeight: 'bold',
                    lineHeight: '1.3',
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  {message}
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/10 overflow-y-auto max-h-[calc(100vh-12rem)]">

            {/* Background Image */}
            <div className="mb-6 pb-6 border-b border-white/20">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                🌌 Background
              </h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {Object.entries(backgrounds).map(([key, bg]) => (
                  <div
                    key={key}
                    className={`aspect-square rounded-lg cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${currentBg === key && !customBgImage ? 'border-pink-400 shadow-pink-400/50' : 'border-white/20'
                      }`}
                    style={{ background: bg }}
                    onClick={() => {
                      setCurrentBg(key);
                      setCustomBgImage('');
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs opacity-0 hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => bgFileRef.current?.click()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                📁 Upload Background
              </button>
              <input
                ref={bgFileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleBgUpload}
              />
            </div>

            {/* Frame Background */}
            <div className="mb-6 pb-6 border-b border-white/20">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                ✨ Frame Style
              </h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {Object.entries(frameBackgrounds).map(([key, bg]) => (
                  <div
                    key={key}
                    className={`aspect-square rounded-lg cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center text-white text-xs font-bold ${currentFrameBg === key && !customFrameImage ? 'border-pink-400 shadow-pink-400/50' : 'border-white/20'
                      }`}
                    style={{ background: bg }}
                    onClick={() => {
                      setCurrentFrameBg(key);
                      setCustomFrameImage('');
                    }}
                  >
                    <div className="bg-black/50 px-1 py-0.5 rounded opacity-0 hover:opacity-100 transition-opacity">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => frameFileRef.current?.click()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                📁 Upload Frame
              </button>
              <input
                ref={frameFileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFrameUpload}
              />
            </div>

            {/* Frame Customization */}
            <div className="mb-6 pb-6 border-b border-white/20">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                🖼️ Frame Settings
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Shape</label>
                    <select
                      value={frameShape}
                      onChange={(e) => setFrameShape(e.target.value)}
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-pink-400 outline-none"
                    >
                      <option value="rounded" className="text-black">Rounded</option>
                      <option value="square" className="text-black">Square</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Color</label>
                    <input
                      type="color"
                      value={frameColor}
                      onChange={(e) => setFrameColor(e.target.value)}
                      className="w-full h-10 border border-white/20 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Width: {frameWidth}px</label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={frameWidth}
                    onChange={(e) => setFrameWidth(e.target.value)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Style</label>
                  <select
                    value={frameStyle}
                    onChange={(e) => setFrameStyle(e.target.value)}
                    className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-pink-400 outline-none"
                  >
                    <option value="solid" className="text-black">Solid</option>
                    <option value="dashed" className="text-black">Dashed</option>
                    <option value="dotted" className="text-black">Dotted</option>
                    <option value="double" className="text-black">Double</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="mb-6 pb-6 border-b border-white/20">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                💌 Message
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg.text)}
                    className="p-2 bg-white/10 border border-white/20 rounded-lg hover:bg-pink-500/20 hover:border-pink-400 transition-all text-xs text-white text-center"
                  >
                    {msg.emoji} {msg.label}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">Custom Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-pink-400 outline-none resize-none placeholder-white/50"
                    placeholder="Type your message here..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Size: {fontSize}px</label>
                    <input
                      type="range"
                      min="12"
                      max="32"
                      value={fontSize}
                      onChange={(e) => setFontSize(e.target.value)}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Color</label>
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-full h-10 border border-white/20 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Alignment</label>
                    <select
                      value={textAlign}
                      onChange={(e) => setTextAlign(e.target.value)}
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-pink-400 outline-none"
                    >
                      <option value="center" className="text-black">Center</option>
                      <option value="left" className="text-black">Left</option>
                      <option value="right" className="text-black">Right</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">Font</label>
                    <select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white focus:border-pink-400 outline-none"
                    >
                      <option value="Georgia" className="text-black">Georgia</option>
                      <option value="Arial" className="text-black">Arial</option>
                      <option value="Times New Roman" className="text-black">Times</option>
                      <option value="Courier New" className="text-black">Courier</option>
                      <option value="Comic Sans MS" className="text-black">Comic Sans</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Effects */}
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                🎨 Effects
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'none', label: '🔄 None' },
                  { key: 'vintage', label: '📷 Vintage' },
                  { key: 'sepia', label: '🟤 Sepia' },
                  { key: 'blur', label: '🌫️ Blur' },
                  { key: 'grayscale', label: '⚫ Grayscale' },
                  { key: 'brightness', label: '☀️ Bright' },
                  { key: 'dreamy', label: '💫 Dreamy' },
                  { key: 'dramatic', label: '🎭 Dramatic' }
                ].map((effect) => (
                  <button
                    key={effect.key}
                    onClick={() => setCurrentEffect(effect.key)}
                    className={`p-2 rounded-lg border transition-all text-sm ${currentEffect === effect.key
                      ? 'bg-pink-500 text-white border-pink-400'
                      : 'bg-white/10 border-white/20 text-white hover:bg-pink-500/20 hover:border-pink-400'
                      }`}
                  >
                    {effect.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadPostcard}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              💾 Download Postcard
            </button>
          </div>
        </div>
      </div>
      
  );
};

export default App;