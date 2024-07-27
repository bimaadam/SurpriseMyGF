import React from 'react';
import Letter from './Letter';

const Anniversary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800">Selamat Anniversary!</h1>
        <p className="text-lg text-gray-600 mt-4">Bima dan Ririn</p>
        <p className="text-lg text-gray-600">2 Tahun 7 Bulan</p>
        <p className="text-lg text-gray-600">27 Juli 2024</p>
        <div className="mt-6">
          <img 
            src="https://via.placeholder.com/150"
            alt="Happy Couple"
            className="rounded-full mx-auto"
          />
        </div>
        <p className="text-gray-800 mt-4">Terima kasih telah bersama denganku.</p>
        <Letter />
      </div>
    </div>
  );
};

export default Anniversary;
