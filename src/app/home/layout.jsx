import React from 'react'
import Link from 'next/link'

function ResponsiveNav() {
    return (
        <nav style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            justifyContent: 'center',
            background: '#f8f9fa'
        }}>
            <Link href="/addtexttoimage">Add Text to Image</Link>
            <Link href="/backgroundremoval">Background Removal</Link>
            <Link href="/socialshare">Social Share</Link>
            <Link href="/improveblurimage">Improve Blur</Link>
            
            <Link href="/videoupload">Video Upload</Link>
        </nav>
    );
}

export default ResponsiveNav;