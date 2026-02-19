import { useEffect, useRef, useState } from "react";

export default function Slider() {
  const imgRef = useRef(null);
  const [bg, setBg] = useState("#ffffff");

  useEffect(() => {
    const img = imgRef.current;

    const getColor = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      let r = 0, g = 0, b = 0, count = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      setBg(`rgb(${r},${g},${b})`);
    };

    if (img.complete) getColor();
    else img.onload = getColor;
  }, []);

  return (
    <div style={{ background: bg }} className="transition-all duration-700 w-140 p-20">
      <img ref={imgRef} src="./src/assets/pic1.jpg" />
    </div>
  );
}
