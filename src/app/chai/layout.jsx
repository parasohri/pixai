// app/your-folder/layout.jsx

import React from 'react';
import Link from 'next/link';

// Optional: You can define metadata for this layout
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description here',
};

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
