const works = document.querySelector(".works");

const workCards = [
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  }
];

const generateCards = () => {
  workCards.forEach((card) => {
    const card = document.createElement("artcile");
    card.className = "works__card";
  });
};
