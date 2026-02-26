import React from "react";
import vid1 from "../../assets/igvideos/vid1.mp4";
import vid2 from "../../assets/igvideos/vid2.mp4";
import vid3 from "../../assets/igvideos/vid3.mp4";
import vid4 from "../../assets/igvideos/vid4.mp4";

const videos = [
  { src: vid1, title: "LIVE shopping", desc: "Promote, sell and engage with your audience, all in real time." },
  { src: vid2, title: "Shoppable videos", desc: "Create entertaining videos with your products just a tap away." },
  { src: vid3, title: "Shop Page", desc: "Display your product catalog within your own in-app shop." },
  { src: vid4, title: "Shop Tab", desc: "Display your products on a centralized marketplace." },
];

const IgReels = () => {
  return (
    <div className="bg-black text-white py-12">
      
      {/* ===== Heading ===== */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Shopping made simple
        </h1>

        <p className="mt-6 text-white/70 max-w-3xl mx-auto">
          Powered by discovery driven commerce, Reybon helps brands and creators
          showcase and sell products through immersive in-app experiences.
        </p>
      </div>

      {/* ===== Video Cards ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mt-16 px-6">
        {videos.map((item, index) => (
          <div key={index} className="text-center">
            
            {/* Video */}
            <div className="rounded-2xl overflow-hidden shadow-lg bg-neutral-900 hover:scale-105">
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-105 object-cover"
              />
            </div>

            <div className="pt-10">
                {/* Title */}
                <h3 className="">
                {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-white/60">
                {item.desc}
                </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default IgReels;
