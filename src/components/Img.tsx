import React from '@astrojs/react';
interface Props {
  src: string;
  alt: string;
}

export default function Img({ src, alt }: Props) {
  return (
    <div className='flex' style={{justifyContent: 'center'}}>
      <img src={src} alt={alt} />
    </div>
  )
}