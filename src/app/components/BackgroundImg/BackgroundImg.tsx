/*import { Button } from "../ui/button";*/

import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
        <Image
          className="rounded-(--radius) grayscale"
          src="/app/images/LIFEBOTICA_logo.png" // Replace with your image path
          alt="team image"
          height={500} // Replace with actual height
          width={800} // Replace with actual width
          priority={false} // Set to true if this is a critical image
        />
      
    </section>
  );
}
