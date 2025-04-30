'use client';

import { useEffect, useState } from 'react';
import HeaderServer from './HeaderSectionServer';

const HeaderClient = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <HeaderServer isScrolled={isScrolled} />;
};

export default HeaderClient;
