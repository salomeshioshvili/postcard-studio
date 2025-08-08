import React from 'react';
import TopNav from './TopNav.jsx';


const HomePage = ({ onMakePostcard, onHomeClick, onInfoClick }) => {
  const handleMakePostcard = () => {
    if (onMakePostcard) {
      onMakePostcard();
    }
  };

  const handleHomeClick = () => {
    if (onHomeClick) onHomeClick();
  };

  const handleInfoClick = () => {
    if (onInfoClick) onInfoClick();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
        style={{
          backgroundImage: `url('/src/assets/scenary.jpeg')`,
          filter: 'blur(4px)',
          transform: 'scale(1.1)',
          animationDuration: '8s'
        }}
      />

      {/* Animated Cloud Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cloud Layer 1 - Slow moving */}
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse 800px 200px at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(ellipse 600px 150px at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            animation: 'cloudMove1 25s linear infinite'
          }}
        />

        {/* Cloud Layer 2 - Medium speed */}
        <div
          className="absolute w-full h-full opacity-25"
          style={{
            background: 'radial-gradient(ellipse 500px 120px at 60% 40%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(ellipse 400px 100px at 30% 60%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            animation: 'cloudMove2 18s linear infinite'
          }}
        />

        {/* Cloud Layer 3 - Fast moving */}
        <div
          className="absolute w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse 300px 80px at 70% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(ellipse 250px 60px at 40% 45%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            animation: 'cloudMove3 12s linear infinite'
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/20" />
      <div className="pt-10" />
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <TopNav onHomeClick={handleHomeClick} onInfoClick={handleInfoClick} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
          {/* Main Heading with Different Fonts */}
          <h1 className="text-white mb-7 max-w-4xl drop-shadow-2xl">
            <span className="block text-5xl md:text-7xl font-bold mb-4 animate-fadeInUp" style={{ fontFamily: 'serif', animationDelay: '0.1s' }}>
              Create
            </span>
            <span className="block text-4xl md:text-6xl font-light italic mb-4 animate-fadeInUp" style={{ fontFamily: 'cursive', animationDelay: '0.2s' }}>
              beautiful
            </span>
            <span className="block text-5xl md:text-7xl font-extrabold mb-4 animate-fadeInUp" style={{ fontFamily: 'sans-serif', animationDelay: '0.3s' }}>
              personalized
            </span>
            <span className="block text-4xl md:text-6xl font-medium mb-4 animate-fadeInUp" style={{ fontFamily: 'fantasy', animationDelay: '0.4s' }}>
              postcards
            </span>
            <span className="block text-3xl md:text-5xl font-bold text-pink-500 animate-fadeInUp" style={{ fontFamily: 'monospace', animationDelay: '0.5s' }}>
              with love
            </span>
          </h1>

          <button
            onClick={handleMakePostcard}
            className="relative group bg-white/10 backdrop-blur-md text-white font-medium py-4 px-12 rounded-2xl text-xl shadow-2xl border border-white/20 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/20 hover:scale-105 active:scale-95 hover:bg-white/15 hover:border-white/30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,192,203,0.1) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              letterSpacing: '0.03em',
              cursor: 'pointer'
            }}
          >
            <span className="relative z-10 drop-shadow-sm">Make Postcard</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 via-pink-500/15 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            <div className="absolute inset-0 rounded-2xl bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          </button>
        </div>
      </div>
    </div>

  );
};

export default HomePage;