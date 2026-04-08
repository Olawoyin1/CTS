import React from "react";

interface Voice {
  id: string;
  name: string;
  logoSrc: string;
  website: string;
}

const voices: Voice[] = [
  {
    id: "xara",
    name: "Xara",
    logoSrc: "../../Images/xara.png",
    website: "https://usexara.ai/",
  },
  {
    id: "yolat",
    name: "Yolat",
    logoSrc: "../../Images/yolat.png",
    website: "/",
  },
  {
    id: "pt1",
    name: "Partner",
    logoSrc: "../../Images/pt1.jpeg",
    website: "https://techcabal.com/",
  },
  {
    id: "pt2",
    name: "Partner",
    logoSrc: "../../Images/pt2.jpeg",
    website: "/",
  },
  {
    id: "mytherapist",
    name: "MyTherapist",
    logoSrc: "../../Images/mytherapist.png",
    website: "/",
  },
  {
    id: "mtn",
    name: "MTN",
    logoSrc: "../../Images/mtn.png",
    website: "/",
  },
  {
    id: "bizflex",
    name: "BizFlex",
    logoSrc: "../../Images/new1.jpeg",
    website: "https://www.bizflex.africa/",
  },
  {
    id: "gs",
    name: "Partner",
    logoSrc: "../../Images/gs.jpeg",
    website: "/",
  },
  {
    id: "pre",
    name: "Partner",
    logoSrc: "../../Images/pre.png",
    website: "/",
  },
];

// Triple for seamless loop
const looped = [...voices, ...voices, ...voices];

const SponsorsA: React.FC = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee-sponsors">
          {looped.map((acc, i) => (
            <a
              key={acc.id + i}
              href={acc.website}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={acc.logoSrc}
                alt={acc.name}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                title={acc.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsA;
