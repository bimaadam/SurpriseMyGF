import React, { useState } from 'react';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-center mt-6">
      <button
        onClick={handleClick}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
      >
        Buka Surat
      </button>
      {isOpen && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Untuk Ririn</h2>
          <p className="mt-2 text-gray-600">
            Selamat Anniversary, sayang! Makasi Ya telah menjadi bagian dari hidupku selama 2 tahun 7 bulan ini. Abang sangat bersyukur memiliki kamu di sisiku sayang. Semoga kita selalu bahagia bersama dan mencapai semua impian kita. Abang cinta kamu sayang!
          </p>
          <p className="mt-4 text-gray-600">- Made with Bima Adam Nugraha</p>
        </div>
      )}
    </div>
  );
};

export default Letter;
