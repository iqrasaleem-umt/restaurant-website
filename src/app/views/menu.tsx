// Menu.tsx
// Menu.tsx
import Menucard from '@/components/menucard';
import React from 'react';

export default function Menu() {
  return (
    <div>
      <div
        id="menu"
        className="flex flex-col items-center mt-10 font-cinzel transition-transform duration-300 ease-linear"
      >
        <h1 className="text-orange-400 text-xl">Menu</h1>
        <h1 className="text-black text-2xl mt-7">Checkout our tasty menu</h1>
        <div className="flex gap-4 text-black mt-7 font-serif">
          <p className="text-orange-400">All</p>
          <p className="hover:text-orange-400">Starter</p>
          <p className="hover:text-orange-400">Salads</p>
          <p className="hover:text-orange-400">Specialty</p>
        </div>
      </div>
      <div className='px-10'><Menucard /></div>
    </div>
  );
}
