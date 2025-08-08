import React from 'react';

const TopNav = ({ onHomeClick, onInfoClick }) => (
    <nav className="flex justify-between items-center p-6 fixed top-0 left-0 w-full z-50">
        <button
            onClick={onHomeClick}
            className="text-white font-semibold text-lg hover:text-pink-300 transition-colors duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
        >
            Home
        </button>
        <button
            onClick={onInfoClick}
            className="text-white font-semibold text-lg hover:text-pink-300 transition-colors duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
        >
            Info
        </button>
    </nav>
);

export default TopNav;
