import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowLeft, ArrowRight, ExternalLink, Mail, Linkedin,
  Phone, Play, X, Maximize2, Palette, Box, Map, Gamepad2, Newspaper
} from "lucide-react";

import CHKS from "../pics/CHKS.jpg";
import CA1 from "../pics/CA1.jpg";
import CA2 from "../pics/CA2.jpg";
import manga1 from "../pics/manga1.jpg";
import manga2 from "../pics/manga2.jpg";
import interf from "../pics/interface.jpg";
import bgcardgame from "../pics/bgcardgame.jpg";
import cardss from "../pics/cardingamess.png";
import dz from "../pics/dz.png";
import KMHBC from "../pics/KMHBC.jpg";


import stoneHavenHero from "../pics/StoneHaven.jpg";
import StoneHavenenv from "../pics/SHenv.png";
import StoneHavenchr from "../pics/SHchr.png";
import StoneHavengamep from "../pics/SHgame.png";

import corecellani from "../pics/corecellani.gif";
import corecellsprite from "../pics/corecellsprite.png";
import corecellvfx from "../pics/corecellvfx.gif";
import corecellart from "../pics/corecellart.gif";

import fyback from "../pics/fyback.png";
import fychr from "../pics/fychr.jpg";
import fyenv from "../pics/fyasset.jpg";

import lumia1 from "../pics/lumia1.jpg";
import lumiagif from "../pics/lumiagif.gif";
import lumaew from "../pics/lumaew.gif";

import jlevel from "../pics/jlevel.png";
import jenv from "../pics/jenv.png";
import jgame from "../pics/jgame.png";

import mag77chr from "../pics/mag77chr.jpg";
import mag77scene from "../pics/mag77scene.png";
import mag77back from "../pics/mag77back.png";

import Epuzzle from "../pics/Epuzzle.png";
import Egame from "../pics/Egame.png";
import Elevel from "../pics/Elevel.png";

import lumiagroup from "../pics/lumiagroup.png";
import lumiabed from "../pics/lumiabed.png";
import lumiaface from "../pics/lumiaface.png";

import artwork from "../pics/artwork.jpg";
import artwork2 from "../pics/artwork2.jpg";
import artwork3 from "../pics/artwork3.jpg";
import artwork4 from "../pics/artwork4.jpg";
import artwork5 from "../pics/artwork5.jpg";

import "./styles.css";


const PLACEHOLDER = (label) =>
  `https://placehold.co/1600x1000/171717/e8e3d7?text=${encodeURIComponent(label)}`;


/* =========================================================
   DRUIDZ.SE (current role)
   ========================================================= */

const druidz = {
  site: "https://druidz.se",
  articles: "https://druidz.se/author/hein/",
  videos: "https://druidz.se/tag/kyaw-myoe-hein/",
  // Replace with a screenshot of your Druidz author page, e.g.
  // import druidzShot from "../pics/druidz.jpg";  ->  shot: druidzShot
  shot: dz
};


function getYouTubeEmbedUrl(url) {
  if (!url || url === "YOUR_YOUTUBE_URL_HERE") return null;

  try {
    const parsed = new URL(url);

    let videoId = "";

    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1).split("/")[0];
    } else if (
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v") || "";
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1].split("/")[0];
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1].split("/")[0];
      }
    }

    if (!videoId) return null;

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}


/* =========================================================
   PROJECT DATA
   ========================================================= */

/*
  To use your real card game art, import the files at the top, e.g.
    import cardKey from "../pics/cardgame-key.jpg";
  then replace each PLACEHOLDER(...) below with the imported variable.
  Every image here opens in the lightbox, so you can add as many as you like.
*/

const cardGame = {
  id: "burmese-card-game",
  highlight: true,
  title: "Card Htet Kya Soh!",          // <- rename to your game's real title
  subtitle: "Card Game · WebGL · Burmese Traditional Style",
  role: "Main Artist",

  description:
    "A WebGL card game built around traditional Burmese art. I was the main artist and created the full visual identity of the game: the card illustrations, character art, user interface, and backgrounds.",

  responsibilities: [
    "Card illustrations",
    "Character art",
    "Interface and UI design",
    "Backgrounds and environment art",
    "Overall visual direction in traditional Burmese style"
  ],

  images: [
    { src: CHKS,        alt: "Card game key art" },
    { src: CA1,                alt: "Card illustration 01" },
    { src: CA2,                alt: "Card illustration 02" },
    { src: manga1,           alt: "Character artwork 01" },
    { src: manga2,           alt: "Character artwork 02" },
    { src: interf,             alt: "Game interface design" },
    { src: bgcardgame,             alt: "Background artwork" },
    { src: cardss,         alt: "In-game screenshot" }
  ],

  // Add a playable link or trailer when ready:
  // links: [{ label: "PLAY THE GAME", url: "https://cardhtetkyasoh.vercel.app/" }],
  youtube: "https://youtu.be/YHSmi0mlkIo",
  links: [{ label: "PLAY THE GAME", url: "https://cardhtetkyasoh.vercel.app/" }]
};


const projects = [
  cardGame,

  {
    id: "stone-haven",
    title: "For Stone Haven",
    subtitle: "Open-World RPG · Fortnite UEFN",
    role: "Art & Design Lead",
    featured: true,

    description:
      "An open-world RPG built in Fortnite UEFN. I led the visual direction and world design while building the playable systems that connect the world, characters, exploration, and combat.",

    responsibilities: [
      "Open-world map layout and terrain design",
      "3D environment assets and world building",
      "NPC conversation and event systems",
      "Currency, loot-drop mechanics, and minigames"
    ],

    images: [
      {
        src: stoneHavenHero,
        alt: "Stone Haven hero artwork"
      },
      {
        src: StoneHavenenv,
        alt: "Stone Haven environment artwork"
      },
      {
        src: StoneHavenchr,
        alt: "Stone Haven characters artwork"
      },
      {
        src: StoneHavengamep,
        alt: "Stone Haven gameplay artwork"
      }
    ],

    youtube: "https://youtu.be/KnK1miM9fzY?si=59jccZqUdUApN7rF"
  },


  {
    id: "corecell",
    title: "Banchou Tactics: Lionheart 2",
    subtitle: "Professional Production · Corecell Games",
    role: "2D Pixel Artist / Animator",

    description:
      "Outsource freelance work for Corecell Games on a tactical turn-based title, focused on pixel character art, animation, combat effects, and adapting existing 2D character art into pixel-art form. Mainly used Aseprite.",

    responsibilities: [
      "Pixel art character sprites and animations",
      "Combat effects VFX",
      "Redrawing existing 2D character art into pixel-art style"
    ],

    images: [
      {
        src: corecellart,
        alt: "Corecell character art"
      },
      {
        src: corecellsprite,
        alt: "Corecell sprite artwork"
      },
      {
        src: corecellani,
        alt: "Corecell animation"
      },
      {
        src: corecellvfx,
        alt: "Corecell VFX"
      }
    ],

    youtube: "https://youtu.be/TNre_1QOyOE?si=zoMdvbH-sxmpIfpb"
  },


  {
    id: "find-yourself",
    title: "Find Yourself",
    subtitle: "Puzzle · Pixel Art · Game Jam",
    role: "2D Pixel Artist",
    award: "1st Place in 2 categories",

    description:
      "A game-jam project where I created the main character sprites and animation, background art, and environment assets. Got 1st place in the game jam competition in 2 categories. Used Aseprite and Ibis Paint for pixel art and animation.",

    responsibilities: [
      "Main character sprites and animation",
      "Background art",
      "Environment assets"
    ],

    images: [
      {
        src: fychr,
        alt: "Find Yourself character artwork"
      },
      {
        src: fyback,
        alt: "Find Yourself background artwork"
      },
      {
        src: fyenv,
        alt: "Find Yourself environment artwork"
      }
    ],

    youtube: "YOUR_YOUTUBE_URL_HERE"
  },


  {
    id: "magnitude",
    title: "Magnitude 7.7",
    subtitle: "Story-Driven · 2D · Game Jam",
    role: "2D Artist",

    /*
      Magnitude 7.7 intentionally has no gameplay trailer.
      showTrailer:false prevents the entire trailer section
      from appearing in its project modal.
    */
    showTrailer: false,

    description:
      "A story-driven 2D game-jam project. I created all character sprites, background art, and cinematic picture frames. Created story, character design, and visual direction. Used Ibis Paint for pixel art.",

    responsibilities: [
      "Character sprites",
      "Background art",
      "Cinematic picture frames"
    ],

    images: [
      {
        src: mag77scene,
        alt: "Magnitude 7.7 scene artwork"
      },
      {
        src: mag77chr,
        alt: "Magnitude 7.7 character artwork"
      },
      {
        src: mag77back,
        alt: "Magnitude 7.7 background artwork"
      }
    ]
  },


  {
    id: "lumia",
    title: "Lumia",
    subtitle: "Horror · Pixel Art · Game Jam",
    role: "2D Pixel Artist & Game Designer",
    award: "4th Place",

    description:
      "A short horror game-jam project combining pixel character art, animation, and story design. Used aseprite for pixel art and animation. Got fourth place in the game jam competition.",

    responsibilities: [
      "Character sprites and animation",
      "Game story"
    ],

    images: [
      {
        src: lumiaface,
        alt: "Lumia character artwork"
      },
      {
        src: lumiagif,
        alt: "Lumia animation"
      },
      {
        src: lumaew,
        alt: "Lumia world artwork"
      },
      {
        src: lumiagroup,
        alt: "Lumia group artwork"
      }
    ],

    youtube: "https://youtu.be/ivks2FwmQvI"
  },


  {
    id: "e2escape",
    title: "E2Escape",
    subtitle: "Puzzle · Student Project",
    role: "Level Designer",

    description:
      "A student puzzle project featuring a full puzzle floor built around trap-based mechanisms.",

    responsibilities: [
      "Full puzzle-floor design",
      "Trap-based mechanisms"
    ],

    images: [
      {
        src: Egame,
        alt: "E2Escape level artwork"
      },
      {
        src: Epuzzle,
        alt: "E2Escape puzzle artwork"
      },
      {
        src: Elevel,
        alt: "E2Escape gameplay artwork"
      }
    ],

    youtube: "https://youtu.be/pUcQqyTbC00?si=I9WKmK34MwAOLpGD"
  },


  {
    id: "journey",
    title: "Journey to Rangsit ICT",
    subtitle: "Horror · Student Project",
    role: "Game Designer & Level Designer",

    description:
      "A 3D indoor school-environment level designed for a horror student project.",

    responsibilities: [
      "3D indoor school-environment level design"
    ],

    images: [
      {
        src: jlevel,
        alt: "Journey to Rangsit ICT level artwork"
      },
      {
        src: jenv,
        alt: "Journey to Rangsit ICT environment artwork"
      },
      {
        src: jgame,
        alt: "Journey to Rangsit ICT gameplay artwork"
      }
    ],

    youtube: "https://youtu.be/hdE0phrt-v0"
  }
];


/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    icon: Palette,
    title: "Art",
    items: [
      "Pixel Art",
      "Character Art",
      "Environment Art",
      "Animation",
      "VFX"
    ]
  },

  {
    icon: Box,
    title: "3D",
    items: [
      "Blender",
      "3D Modeling",
      "Environment Assets"
    ]
  },

  {
    icon: Map,
    title: "Game Design",
    items: [
      "Level Design",
      "Mechanics Design",
      "Narrative Design"
    ]
  },

  {
    icon: Gamepad2,
    title: "Development",
    items: [
      "UEFN",
      "Unreal Engine",
      "Unity"
    ]
  }
];



const aboutArtworks = [
  {
    src: artwork,
    alt: "Kyaw Myoe Hein artwork 01",
    title: "ARTWORK 01"
  },

  {
    src: artwork2,
    alt: "Placeholder for artwork 02",
    title: "ARTWORK 02"
  },

  {
    src: artwork3,
    alt: "Placeholder for artwork 03",
    title: "ARTWORK 03"
  },

  {
    src: artwork4,
    alt: "Placeholder for artwork 04",
    title: "ARTWORK 04"
  },

  {
    src: artwork5,
    alt: "Placeholder for artwork 05",
    title: "ARTWORK 05"
  }
];


/* =========================================================
   APP
   ========================================================= */

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setNavOpen(false);
  };


  /* Lock body scrolling while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);


  /* Keyboard controls for lightbox */
  useEffect(() => {
    const onKey = (e) => {

      if (e.key === "Escape") {
        setLightbox(null);
        setSelectedProject(null);
      }


      if (
        lightbox &&
        selectedProject &&
        (e.key === "ArrowRight" || e.key === "ArrowLeft")
      ) {

        const imgs = lightbox.project.images;

        const next =
          (
            lightbox.index +
            (e.key === "ArrowRight" ? 1 : -1) +
            imgs.length
          ) %
          imgs.length;

        setLightbox({
          project: lightbox.project,
          index: next
        });
      }
    };


    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };

  }, [lightbox, selectedProject]);


  /*
    Beacon has been completely removed.

    Core projects now consist only of:
    - Corecell
    - Find Yourself

    Magnitude 7.7 remains in the archive.
  */

  const highlights = projects.filter(
    (project) => project.highlight
  );


  const featured = projects.filter(
    (project) => project.featured && !project.highlight
  );


  const core = projects.filter(
    (project) =>
      !project.featured &&
      !project.highlight &&
      [
        "corecell",
        "find-yourself"
      ].includes(project.id)
  );


  const archive = projects.filter(
    (project) =>
      !project.featured &&
      !project.highlight &&
      ![
        "corecell",
        "find-yourself"
      ].includes(project.id)
  );


  const openProject = (project) => {
    setSelectedProject(project);
  };


  return (
    <div className="site-shell">

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="nav">

        <button
          className="brand"
          onClick={() => scrollTo("home")}
        >
          KMH<span>.</span>
        </button>


        <button
          className="menu-toggle"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation"
        >
          {navOpen ? (
            <X size={22} />
          ) : (
            <span>MENU</span>
          )}
        </button>


        <nav
          className={
            navOpen
              ? "nav-links open"
              : "nav-links"
          }
        >

          <button
            onClick={() => scrollTo("latest")}
          >
            LATEST
          </button>

          <button
            onClick={() => scrollTo("work")}
          >
            WORK
          </button>

          <button
            onClick={() => scrollTo("about")}
          >
            ABOUT
          </button>

          <button
            onClick={() => scrollTo("experience")}
          >
            EXPERIENCE
          </button>

          <button
            onClick={() => scrollTo("contact")}
          >
            CONTACT
          </button>

        </nav>

      </header>


      <main>

        {/* ===================================================
            HERO
            =================================================== */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-image">

            <img
              src={lumiabed}
              alt="Main portfolio artwork"
            />

          </div>


          <div className="hero-overlay" />


          <div className="hero-content">

            <p className="eyebrow">
              2D / 3D ARTIST · GAME & LEVEL DESIGNER
            </p>


            <h1>
              KYAW MYOE
              <br />
              <em>HEIN</em>
            </h1>


            <p className="hero-copy">
              2D/3D artist with strong experience
              in game design and level design.
            </p>


            <div className="hero-actions">

              <button
                className="primary-btn"
                onClick={() => scrollTo("work")}
              >
                EXPLORE MY WORK
                <ArrowDown size={17} />
              </button>


              <button
                className="ghost-btn"
                onClick={() => scrollTo("about")}
              >
                ABOUT ME
              </button>

            </div>

          </div>


          <div className="scroll-mark">
            <span>SCROLL</span>
            <div />
          </div>

        </section>


        {/* ===================================================
            LATEST HIGHLIGHTS
            =================================================== */}

        <section
          id="latest"
          className="section highlights-section"
        >

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                LATEST HIGHLIGHTS
              </p>

              <h2>
                WHAT I'M <em>DOING NOW</em>
              </h2>

            </div>

            <p className="section-note">
              My current role as a game reviewer and writer,
              and the card game I'm building as lead artist.
            </p>

          </div>


          <div className="highlight-grid">

            {/* CARD GAME */}

            {highlights.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
                highlight
                onOpen={openProject}
              />

            ))}


            {/* DRUIDZ.SE */}

            <article className="druidz-panel">

              <div className="druidz-shot">

                <img
                  src={druidz.shot}
                  alt="Druidz.se author page"
                />

              </div>


              <div className="druidz-body">

                <p className="eyebrow">
                  CURRENT ROLE
                </p>

                <h3>
                  DRUIDZ<em>.SE</em>
                </h3>

                <h4>
                  Game Reviewer · Writer · Editor
                </h4>

                <p>
                  I review games commissioned by Druidz,
                  write and edit articles, and represent
                  the company in Thailand.
                </p>

                <ul>
                  <li>Reviewing commissioned games</li>
                  <li>Writing and editing articles</li>
                  <li>YouTube video content</li>
                  <li>Representing Druidz in Thailand</li>
                </ul>

                <div className="druidz-links">

                  <a
                    className="primary-btn"
                    href={druidz.articles}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Newspaper size={15} />
                    MY ARTICLES
                    <ExternalLink size={14} />
                  </a>

                  <a
                    className="ghost-btn"
                    href={druidz.videos}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Play size={15} />
                    MY VIDEOS
                    <ExternalLink size={14} />
                  </a>

                </div>

                <a
                  className="druidz-site"
                  href={druidz.site}
                  target="_blank"
                  rel="noreferrer"
                >
                  VISIT DRUIDZ.SE
                  <ExternalLink size={12} />
                </a>

              </div>

            </article>

          </div>

        </section>


        {/* ===================================================
            WORK
            =================================================== */}

        <section
          id="work"
          className="section work-section"
        >

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                SELECTED WORK
              </p>

              <h2>
                WORLDS I'VE <em>BUILT</em>
              </h2>

            </div>

          </div>


          {/* FEATURED */}

          <div className="featured-projects">

            {featured.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
                large
                onOpen={openProject}
              />

            ))}

          </div>


          {/* CORE PROJECTS */}

          <div className="project-grid">

            {core.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
                onOpen={openProject}
              />

            ))}

          </div>


          {/* ARCHIVE */}

          <div className="archive-heading">

            <p className="eyebrow">
              MORE WORK
            </p>

            <h3>
              PROJECT <em>ARCHIVE</em>
            </h3>

          </div>


          <div className="archive-grid">

            {archive.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
                compact
                onOpen={openProject}
              />

            ))}

          </div>

        </section>


        {/* ===================================================
            ABOUT
            =================================================== */}

        <section
          id="about"
          className="section about-section"
        >

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                ABOUT
              </p>

              <h2>
                ARTIST. <em>DESIGNER.</em>
                <br />
                BUILDER.
              </h2>

            </div>

          </div>


          <div className="about-layout">

            <div className="about-copy">

              <p className="lead">
                I'm a 2D/3D artist and game &
                level designer interested in creating
                worlds, characters, and experiences
                that feel intentional and playable.
              </p>


              <p>
                My work moves between pixel art,
                3D environments, animation, VFX,
                level design, narrative, and
                hands-on game development.
                I enjoy taking an idea from visual
                concept through to a playable experience.
              </p>


              <p>
                My portfolio combines independent
                projects, game jams, student work,
                and professional production experience.
              </p>

            </div>


            {/* =================================================
                THREE SIDE-SCROLLABLE ARTWORKS
                ================================================= */}

            <div className="about-artworks">

              <div className="about-artworks-track">

                {aboutArtworks.map((item, index) => (

                  <button
                    key={item.title}
                    className="about-artwork-card"
                    onClick={() =>
                      setLightbox({
                        project: {
                          title: "ABOUT · ARTWORK",
                          images: aboutArtworks
                        },
                        index
                      })
                    }
                  >

                    <div className="about-artwork-image">

                      <img
                        src={item.src}
                        alt={item.alt}
                      />

                      <div className="about-artwork-overlay">

                        <span>
                          {item.title}
                        </span>

                        <Maximize2 size={17} />

                      </div>

                    </div>

                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* =================================================
              SKILLS
              ================================================= */}

          <div className="skills-grid">

            {skills.map(
              ({
                icon: Icon,
                title,
                items
              }) => (

                <div
                  className="skill-card"
                  key={title}
                >

                  <Icon
                    size={25}
                    strokeWidth={1.5}
                  />

                  <h3>
                    {title}
                  </h3>

                  <ul>

                    {items.map((item) => (

                      <li key={item}>
                        {item}
                      </li>

                    ))}

                  </ul>

                </div>

              )
            )}

          </div>


          {/* =================================================
              TOOLS
              ================================================= */}

          <div className="tools-row">

            <span>
              TOOLS
            </span>

            <div>Aseprite</div>
            <div>Procreate</div>
            <div>Krita</div>
            <div>Ibis Paint</div>
            <div>Blender</div>
            <div>Unity</div>
            <div>Unreal</div>
            <div>UEFN</div>

          </div>

        </section>


        {/* ===================================================
            EXPERIENCE
            =================================================== */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-heading">

            <div>

              <p className="eyebrow">
                PROFESSIONAL EXPERIENCE
              </p>

              <h2>
                FROM <em>CONCEPT</em>
                <br />
                TO PRODUCTION.
              </h2>

            </div>

          </div>


          <article className="experience-card">

            <div className="experience-year">
              NOW
            </div>


            <div>

              <p className="eyebrow">
                CURRENT ROLE
              </p>

              <h3>
                DRUIDZ.SE
              </h3>

              <h4>
                Game Reviewer, Writer & Editor
              </h4>

              <p>
                Reviewing commissioned games and
                representing the company in Thailand.
              </p>


              <ul>

                <li>
                  Write and edit game articles for the site.
                </li>

                <li>
                  Review commissioned games and appear in
                  YouTube video content.
                </li>

                <li>
                  Represent Druidz in Thailand.
                </li>

              </ul>


              <div className="exp-links">

                <a
                  href={druidz.articles}
                  target="_blank"
                  rel="noreferrer"
                >
                  ARTICLES <ExternalLink size={12} />
                </a>

                <a
                  href={druidz.videos}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIDEOS <ExternalLink size={12} />
                </a>

              </div>

            </div>

          </article>


          <article className="experience-card">

            <div className="experience-year">
              2025
            </div>


            <div>

              <p className="eyebrow">
                OUTSOURCE FREELANCE
              </p>

              <h3>
                CORECELL GAMES
              </h3>

              <h4>
                2D Pixel Artist / Animator
              </h4>

              <p>
                Banchou Tactics: Lionheart 2 —
                a tactical turn-based game.
              </p>


              <ul>

                <li>
                  Created pixel art character
                  sprites and animations.
                </li>

                <li>
                  Designed combat effects VFX.
                </li>

                <li>
                  Redrew existing 2D character
                  art into pixel-art style.
                </li>

              </ul>

            </div>

          </article>


          {/* EDUCATION */}

          <div className="education">

            <p className="eyebrow">
              EDUCATION
            </p>

            <div>

              <h3>
                RANGSIT INTERNATIONAL UNIVERSITY
              </h3>

              <p>
                B.Sc. Information and Communication
                Technology · GPA 3.7 · First Class Honors
              </p>

              <span>
                Expected 2026
              </span>

            </div>

          </div>


          {/* AWARDS */}

          <div className="awards">

            <p className="eyebrow">
              AWARDS
            </p>

            <div> </div>

            <div>

              <strong>
                1st Place in 2 Categories
              </strong>

              <span>
                Find Yourself · Game Jam
              </span>

            </div>

            <div></div>


            <div>

              <strong>
                4th Place
              </strong>

              <span>
                Lumia · Game Jam
              </span>

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
            =================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-art">

            <img
              src={KMHBC}
              alt="Contact background artwork"
            />

          </div>


          <div className="contact-overlay" />


          <div className="contact-content">

            <p className="eyebrow">
              HAVE A PROJECT IN MIND?
            </p>


            <h2>
              LET'S CREATE
              <br />
              <em>SOMETHING WITH HEIN.</em>
            </h2>


            <div className="contact-links">

              <a href="mailto:kadoyadcd@gmail.com">

                <Mail size={18} />

                kadoyadcd@gmail.com

              </a>


              <a
                href="https://www.linkedin.com/in/kyaw-myoe-hein-57688219b/"
                target="_blank"
                rel="noreferrer"
              >

                <Linkedin size={18} />

                LinkedIn

                <ExternalLink size={14} />

              </a>


              <a href="tel:+66642074010">

                <Phone size={18} />

                +66 64 207 4010

              </a>

            </div>


            <a
              className="resume-btn"
              href="../pdfs/Kyaw_Myoe_Hein_Game2026.pdf"
              rel="noreferrer"
            >

              DOWNLOAD RESUME

              <ExternalLink size={16} />

            </a>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer>

        <span>
          © {new Date().getFullYear()} KYAW MYOE HEIN
        </span>

        <span>
          GAME ART · DESIGN · DEVELOPMENT
        </span>

      </footer>


      {/* =====================================================
          PROJECT MODAL
          ===================================================== */}

      {selectedProject && (

        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
          onOpenImage={(index) =>
            setLightbox({
              project: selectedProject,
              index
            })
          }
        />

      )}


      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      {lightbox && (

        <Lightbox
          project={lightbox.project}
          index={lightbox.index}
          onClose={() =>
            setLightbox(null)
          }
          onChange={(index) =>
            setLightbox({
              project: lightbox.project,
              index
            })
          }
        />

      )}

    </div>
  );
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({
  project,
  large,
  compact,
  highlight,
  onOpen
}) {

  return (

    <article
      className={`project-card ${
        large ? "large" : ""
      } ${
        compact ? "compact" : ""
      } ${
        highlight ? "highlight" : ""
      }`}
      onClick={() => onOpen(project)}
    >

      <div className="project-image">

        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
        />


        <div className="project-image-shade" />


        {highlight && (
          <span className="highlight-tag">
            NEW · WEBGL
          </span>
        )}


        <div className="project-open">

          <Maximize2 size={17} />

        </div>


        <div className="project-meta">

          <p>
            {project.subtitle}
          </p>

          <h3>
            {project.title}
          </h3>

          <span>
            {project.role}

            {project.award
              ? ` · ${project.award}`
              : ""}
          </span>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   PROJECT MODAL
   ========================================================= */

function ProjectModal({
  project,
  onClose,
  onOpenImage
}) {

  const youtubeEmbedUrl =
    getYouTubeEmbedUrl(project.youtube);


  /*
    The trailer is displayed only when:

    1. The project has a valid YouTube URL
    2. showTrailer is not explicitly false

    Magnitude 7.7 has:
        showTrailer: false

    so its entire gameplay trailer section
    disappears.
  */

  const shouldShowTrailer =
    project.showTrailer !== false &&
    youtubeEmbedUrl;


  return (

    <div
      className="project-modal"
      role="dialog"
      aria-modal="true"
    >

      <div className="modal-top">

        <span>
          {project.subtitle}
        </span>


        <button
          onClick={onClose}
          aria-label="Close project"
        >

          <X />

        </button>

      </div>


      <div className="modal-content">

        <div className="modal-title">

          <p className="eyebrow">
            {project.role}
          </p>


          <h2>
            {project.title}
          </h2>


          {project.award && (

            <span className="award-pill">
              {project.award}
            </span>

          )}


          <p>
            {project.description}
          </p>


          {project.links && project.links.length > 0 && (

            <div className="modal-links">

              {project.links.map((link) => (

                <a
                  key={link.url}
                  className="primary-btn"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>

              ))}

            </div>

          )}

        </div>


        {/* PROJECT IMAGE GALLERY */}

        <div className="modal-gallery">

          {project.images.map(
            (image, index) => (

              <button
                key={image.src}
                onClick={() =>
                  onOpenImage(index)
                }
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />

              </button>

            )
          )}

        </div>


        {/* PROJECT DETAILS */}

        <div className="modal-details">

          <div>

            <p className="eyebrow">
              MY CONTRIBUTION
            </p>


            <ul>

              {project.responsibilities.map(
                (item) => (

                  <li key={item}>
                    {item}
                  </li>

                )
              )}

            </ul>

          </div>


          {/* ===============================================
              GAMEPLAY TRAILER

              This whole block disappears for Magnitude 7.7.
              =============================================== */}

          {shouldShowTrailer && (

            <div className="trailer">

              <p className="eyebrow">
                GAMEPLAY TRAILER
              </p>


              <div className="video-wrap">

                <iframe
                  src={youtubeEmbedUrl}
                  title={`${project.title} gameplay trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   LIGHTBOX
   ========================================================= */

function Lightbox({
  project,
  index,
  onClose,
  onChange
}) {

  const image =
    project.images[index];


  return (

    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
    >

      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image"
      >

        <X />

      </button>


      <button
        className="lightbox-arrow left"
        onClick={() =>
          onChange(
            (
              index -
              1 +
              project.images.length
            ) %
            project.images.length
          )
        }
        aria-label="Previous image"
      >

        <ArrowLeft />

      </button>


      <div className="lightbox-image">

        <img
          src={image.src}
          alt={image.alt}
        />


        <div>

          <span>
            {project.title}
          </span>


          <strong>

            {String(index + 1).padStart(2, "0")}

            {" / "}

            {String(project.images.length).padStart(2, "0")}

          </strong>

        </div>

      </div>


      <button
        className="lightbox-arrow right"
        onClick={() =>
          onChange(
            (
              index +
              1
            ) %
            project.images.length
          )
        }
        aria-label="Next image"
      >

        <ArrowRight />

      </button>

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(
  <App />
);