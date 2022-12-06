---
title: "Creating Interactive Stories: Game Development for the Web"
date: "2022-12-06T22:40:32.169Z"
featuredimage:
  src: "./blog1.png"
  alt: "Creating Interactive Stories: Game Development for the Web"
author:
  name: "Connor Burgess"
  email: "connor@fictiontribe.com"
  role: "Web Developer"
  image:
    src: "./kozik-avatar.jpg"
    alt: "Connor Burgess"
ogimage: 
  src: "./og.jpg"
  alt: "og"
description: With every new project, the Fiction Tribe development team’s focus is to always create great user experiences. On a project-by-project basis, we determine the right technologies that will allow us to create performant, scalable web experiences. We love to develop unique products and approach challenging projects in different ways.
---

With every new project, the Fiction Tribe development team’s focus is to always create great user experiences. On a project-by-project basis, we determine the right technologies that will allow us to create performant, scalable web experiences. We love to develop unique products and approach challenging projects in different ways. There are no limits: A new project may come to us as a mobile app, landing page, an interactive web component, or even a full-fledged gaming experience. 

We recently had the opportunity to create a web-based browser game. In this game,the user can point and click to explore a virtual, retro version of our office in Portland, Oregon. Along the way, users can chat with virtual versions of Fiction Tribe staff, and play lighthearted minigames.

In this article, we will dive deeper into the concept, technology, and development process for our web game.

### Conceptualizing the Fiction Tribe Office

The core mechanic for the Fiction Tribe Office is a “mad libs” style game. Mad libs is a game where players are presented a story with missing, “fill in the blank” words, and they must substitute the missing words. Upon beginning our web game, the system randomly selects one of several stories to be completed. The player obtains words to fill in the story’s blanks by completing minigames and speaking with in-game characters. Upon completing the three main minigames, the story is revealed to the player.

The game world is a retro, interactive version of our studio office. The NPCs (non-playable characters) are simply pixelated versions of the staff at Fiction Tribe. Each character has three words, a noun, a verb, and an adjective. As part of this fun exercise, each coworker in our office provided their own virtual character’s words.

### Choosing Technology

Early on, we made the decision to use a game framework or engine to help develop our game. We knew we needed flexibility for development, and also wanted to save development time so we didn’t have to code every basic game system from scratch. We knew we would be developing a HTML5 game set in a 2D world as a desktop experience. This ruled out any 3D-specific frameworks such as the excellent Three.js or Unreal Engine.

In the landscape of libraries, engines, and frameworks used for HTML5 game development, three potential options stood out for us above the rest: 

* PixiJS
* Unity
* Phaser 3

As a brief overview, PixiJS is a performant WebGL (or canvas optional) rendering library for creating interactive graphics and animations. It is a streamlined library focused more on visual aspects, and it misses much of the systems one would find useful in developing a 2D game such as a game camera, tilemap support, asset loading, etc. These are systems that a developer would otherwise have to code from scratch or find additional libraries to support.

Unity is the C#-based heavy-hitting engine used for much of modern game development. Unity games are often in the 3D space—but not always. The engine also has robust support for 2D and tilemaps, as well as a very large community. For our team, downsides would include dealing with a somewhat cumbersome environment, as well as a longer ramp up period. For the scale of the game we were aiming to build, the features Unity offers didn’t seem necessary. We were also trying to stay within the JavaScript ecosystem, as it is almost universally known by web developers, and thus easier to find development support as we maintain and grow our game.

We ended up choosing Phaser 3, which is a JavaScript-based open source game framework that offers many of the aforementioned systems one would desire in 2D game development including tilemaps, asset loading, sound support, advanced input support, and scale managers. It is built on a version of PixiJS, supports WebGL, and canvas-based rendering.

The project has excellent documentation, open source examples and code, and active forums for troubleshooting support. We kick-started our project with open source code to build a prototype interactive game world in an elementary structure that we could expand upon and develop as we saw fit.

We supplemented our 2D world tooling with Tiled Map Editor, a free, open source, and flexible level editor. Tiled has robust functionality and is compatible with our web game framework. A game developer can lay out a gameworld by determining a pixel size per tile and simply selecting and placing each tile, not unlike putting together small, reusable puzzle pieces.

Working from inside the browser has other benefits: We can overlay regular HTML elements. We utilized this for our final screen, in addition to building a virtual version of a portable game console with interactive buttons for moving the game character and interacting with the game world.


### Try it Now
<link rel="stylesheet" href="endscreen.3f59a6b9.css?v=1.0">
<link rel="shortcut icon" href="favicon.c2251a16.ico" type="image/x-icon">
<link rel="shortcut icon" href="favicon.c2251a16.ico" type="image/x-icon">
<link rel="preload" href="Thirtytwobit.b2e97384.ttf" as="font" type="font/ttf" crossorigin=""> 
<link rel="preload" href="FTGameBorder_BluePress.759bcd1c.png" as="image">
<link rel="preload" href="FTGameBorder_RedPress.5acfed54.png" as="image">
<link rel="preload" href="FTGameBorder_Neutral.72bf45b7.png" as="image">
<link rel="preload" href="FTGameBorder_DpadDown.0b694a00.png" as="image">
<link rel="preload" href="FTGameBorder_DpadLeft.c42045d7.png" as="image">
<link rel="preload" href="FTGameBorder_DpadRight.994e03ba.png" as="image">
<link rel="preload" href="FTGameBorder_DpadUp.e5747074.png" as="image">
<link rel="preload" href="FTGameBorder_StartPress.b271df7d.png" as="image">
<link rel="preload" href="SoundToggle_OFF.68f9f5a7.png" as="image">
<style media="screen">
  @font-face {
    font-family: Thirtytwobit;
    src: url("/assets/Thirtytwobit.b2e97384.ttf");
    font-weight: 400;
    font-weight: normal;
  }
</style>
<div class="ft-game-wrapper hidden">
  <div id="ft-game"></div>
</div>

<section class="end-screen-wrapper hidden">
  <div class="end-screen">
    <div class="text-wrap">
      <div>
        <div id="app"></div>
        <p class="story">
          I'm baby wayfarers blue bottle synth cloud bread banjo trust fund
          vegan, health goth taiyaki snackwave quinoa pabst gluten-free.
          Cardigan photo booth banh mi coloring book taiyaki vaporware
          subway tile. Pop-up pabst mumblecore green juice vape stumptown
          poke pitchfork scenester. Tote bag cliche gluten-free XOXO.
          Organic viral tofu schlitz pork belly knausgaard. Cardigan
          semiotics vaporware prism truffaut chicharrones poutine tousled
          PBR&B twee.
        </p>
      </div>
    </div>
  </div>
  <footer>
    <div class="footer-wrap">
      <div>
        <button class="pixelated eightbit-btn" data-color="rgba(207, 255, 176, 1)" id="spreading" data-size="6" data-thickness="1">
          Start over
        </button>
      </div>
      <div class="social-icons hidden">
        <a href="https://www.facebook.com/sharer/sharer.php?u=fictiontribe.com/game"><img src="/facebook.1dd02cf6.svg" alt=""></a>
        <a href="https://twitter.com/intent/tweet?url=fictiontribe.com/game&text=I'm%20baby%20wayfarers%20blue%20bottle%20synth%20cloud%20bread%20banjo%20trust%20fund%20vegan,%20health%20goth%20taiyaki%20snackwave%20quinoa%20pabst%20gluten-free.%20Cardigan%20photo%20booth%20banh%20mi%20coloring%20book%20taiyaki%20vaporware%20subway%20tile.%20Pop-up%20pabst%20mumblecore%20green%20juice%20vape%20stumptown%20poke%20pitchfork%20scenester.%20Tote%20bag%20cliche%20gluten-free%20XOXO.%20Organic%20viral%20tofu%20schlitz%20pork%20belly%20knausgaard.%20Cardigan%20semiotics%20vaporware%20prism%20truffaut%20chicharrones%20poutine%20tousled%20PBR&B%20twee."><img src="/twitter.0601dea6.svg" alt=""></a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=fictiontribe.com/game"><img src="/linkedin.4f5db933.svg" alt=""></a>
      </div>
    </div>
  </footer>
</section>

<script src="main.c39d6dcf.js"></script>
<script src="confetti.86845d7c.js"></script>
<script src="pixelated.43a30f09.js"></script>
<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
<script src="scripts.cd665a19.js"></script>

We have an early version of the game’s build currently live on our studio site. The game features three minigames and a virtual office full of quirky NPCs to chat with. 

[<img style="max-width: 100%;" src="https://demo.fictiontribe.com/Interactive/Interactive_Quizes/Host_Analytics-Personality_Quiz/ha-quiz.jpg">](https://demo.fictiontribe.com/Interactive/Interactive_Quizes/Host_Analytics-Personality_Quiz/#/intro)


`vimeo: https://vimeo.com/701010819`
