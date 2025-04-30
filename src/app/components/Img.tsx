// components/Img.tsx
import Image from "next/image";
import React from "react";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Img: React.FC<ImgProps> = ({ src, alt, className, width = 200, height = 200 }) => (
  <Image
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
    unoptimized // Important for loading external/static gifs
  />
);

export default Img;
