// Menucard.tsx
import React from 'react';
import Image from 'next/image';
import { menuItems } from '@/app/utils/mock';
// Import the mock data

export default function Menucard() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-8 px-4">
      {menuItems.map(item => (
        <div key={item.id} className="flex items-center">
          <div
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              width: '100px',
              height: '100px',
            }}
          >
            <Image
              src={item.imageUrl}
              height={100}
              width={100}
              alt={item.name}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="font-serif mt-5 mx-3">
            <p>{item.name}--------------------------{item.price}</p>
            <p className="text-orange-400 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
