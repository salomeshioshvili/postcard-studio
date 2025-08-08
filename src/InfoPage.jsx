import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Coffee, Heart, Sparkles } from 'lucide-react';
import TopNav from './TopNav.jsx';
import pinterestImage from './assets/pinterest_inspiratio.jpeg';

const InfoPage = ({ onHomeClick, onInfoClick }) => {
  const handleHomeClick = () => {
    if (onHomeClick) onHomeClick();
  };

  const handleInfoClick = () => {
    if (onInfoClick) onInfoClick();
  };

  const FlashCard = ({ children, color = "bg-white/10", className = "" }) => (
    <div className={`${color} backdrop-blur-md rounded-xl border border-white/20 p-6 transform hover:scale-105 transition-all duration-300 shadow-lg ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900" />

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <TopNav onHomeClick={handleHomeClick} onInfoClick={handleInfoClick} />

        {/* Main Content */}
        <div className="flex-1 px-6 py-16">
          <div className="max-w-6xl mx-auto">

            {/* Inspiration Section */}
            <div className="text-center mb-12 pt-8">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-pink-400">Inspiration</span> Story
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                How a simple Pinterest image sparked the creation of this postcard maker
              </p>
            </div>

            {/* Inspiration Story Card */}
            <div className="mb-12">
              <FlashCard color="bg-gradient-to-r from-pink-500/20 to-purple-500/20" className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-6 h-6 text-pink-400" />
                      <h3 className="text-2xl font-bold">The Pinterest Moment</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-4">
                      I was scrolling through Pinterest when I stumbled upon this beautiful postcard image with strawberries and flowers.
                      The combination of the romantic quote and the vintage postcard aesthetic instantly captivated me.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      That moment sparked an idea: "What if people could create their own personalized postcards like this?"
                      And that's how my postcard maker was born. It's not perfect yet, but one day it will be exactly what I envisioned.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg p-4 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                      <img
                        src={pinterestImage}
                        alt="Pinterest inspiration - vintage postcard with strawberries"
                        className="rounded w-full h-auto"
                      />
                      <p className="text-gray-600 text-sm mt-2 text-center italic">The Pinterest image that started it all</p>
                    </div>
                  </div>
                </div>
              </FlashCard>
            </div>

            {/* About Me Flashcards Grid */}
            <div className="mb-12">
              <h2 className="text-white text-3xl font-bold text-center mb-8">
                Get to Know <span className="text-purple-400">Me</span>
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Location Card */}
                <FlashCard color="bg-blue-500/20">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-sm opacity-90">Madrid, Spain</p>
                  </div>
                </FlashCard>

                {/* Experience Card */}
                <FlashCard color="bg-green-500/20">
                  <div className="text-center text-white">
                    <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p className="text-sm opacity-90">2+ Years Design</p>
                  </div>
                </FlashCard>

                {/* Passion Card */}
                <FlashCard color="bg-orange-500/20">
                  <div className="text-center text-white">
                    <Coffee className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Passion</h4>
                    <p className="text-sm opacity-90">Beautiful Interfaces</p>
                  </div>
                </FlashCard>

                {/* Status Card */}
                <FlashCard color="bg-pink-500/20">
                  <div className="text-center text-white">
                    <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Status</h4>
                    <p className="text-sm opacity-90">Open for Work</p>
                  </div>
                </FlashCard>

                {/* Skills Card - spans 2 columns */}
                <FlashCard color="bg-purple-500/20" className="md:col-span-2">
                  <div className="text-white">
                    <h4 className="font-semibold mb-3 text-center">Favorite Tools</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Figma</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    </div>
                  </div>
                </FlashCard>

                {/* About Card - spans 2 columns */}
                <FlashCard color="bg-indigo-500/20" className="md:col-span-2">
                  <div className="text-white">
                    <h4 className="font-semibold mb-3 text-center">About Me</h4>
                    <p className="text-sm opacity-90 text-center leading-relaxed">
                      I'm a passionate website designer who loves creating beautiful, user-friendly interfaces.
                      I believe in the power of good design to make digital experiences more meaningful and enjoyable.
                    </p>
                  </div>
                </FlashCard>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://linkedin.com/in/salome-shioshvili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-blue-500/30"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:salomeshioshvili0312@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/90 hover:bg-gray-900 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-gray-700/50"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://github.com/salomeshioshvili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700/90 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-gray-600/50"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-4">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © 2025 <span className="text-pink-400 font-medium">Salome Shioshvili</span>. Made with ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InfoPage;