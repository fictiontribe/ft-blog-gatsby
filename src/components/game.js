import * as React from "react"
import { useState, useEffect } from "react"

/**
 * Game component to launch FT game
 *
 */

const Game = props => {
  function createGameScripts() {
    let searchParams = new URLSearchParams(window.location.search)
    var desktopOnly = window.matchMedia("(min-width: 1024px)")
    if (desktopOnly.matches) {
      // document.querySelector("#ft-game__wrapper").classList.remove("hidden");
      var typewriter = document.createElement("script")
      typewriter.onload = function () {}
      typewriter.src = "https://unpkg.com/typewriter-effect@latest/dist/core.js"

      var jquery1 = document.createElement("script")
      jquery1.onload = function () {}
      jquery1.src = "https://unpkg.com/typewriter-effect@latest/dist/core.js"

      var jquery2 = document.createElement("script")
      jquery2.onload = function () {}
      jquery2.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"
      var confetti = document.createElement("script")
      confetti.onload = function () {}
      confetti.src = "../game/confetti.86845d7c.js"
      var pixelated = document.createElement("script")
      pixelated.onload = function () {}
      pixelated.src = "../game/pixelated.43a30f09.js"
      var gameMain = document.createElement("script")
      gameMain.onload = function () {}
      gameMain.src = "../game/main.c39d6dcf.js"
      var gameScripts = document.createElement("script")
      gameScripts.onload = function () {}
      gameScripts.src = "../game/scripts.cd665a19.js"



      document.head.appendChild(confetti)
      document.head.appendChild(pixelated)
      document.head.appendChild(typewriter)
      document.head.appendChild(jquery1)
      document.head.appendChild(jquery2)
      document.head.appendChild(gameMain)
      document.head.appendChild(gameScripts)
    }
  }
  useEffect(() => {
    createGameScripts();
  }, []);

  return (
    <>
        <section id="ft-game__wrapper" class="w-full h-full">
          <div class="site-overlay"></div>
          <section class="end-screen-wrapper hidden">
            <div class="overlay"></div>
            <header id="ft-game-header">
              <a href="https://www.fictiontribe.com/">
                <img
                  class="ft-logo"
                  src="../../game/endscreen/ft-logo.png"
                  alt="fiction tribe"
                />
              </a>
            </header>
            <div class="end-screen">
              <div class="text-wrap">
                <div>
                  <div id="app"></div>
                  <p class="story"></p>
                </div>
              </div>
            </div>
            <footer class="game-footer">
              <div class="footer-wrap">
                <div>
                  <button
                    id="game-close-btn"
                    class="pixelated eightbit-btn"
                    data-color="rgba(207, 255, 176, 1)"
                    data-size="6"
                    data-thickness="1"
                  >
                    Close Game
                  </button>
                </div>
                <div class="social-icons hidden">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=fictiontribe.com/game">
                    <img src="../../game/endscreen/facebook.svg" alt="" />
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=fictiontribe.com/game&text=I'm%20baby%20wayfarers%20blue%20bottle%20synth%20cloud%20bread%20banjo%20trust%20fund%20vegan,%20health%20goth%20taiyaki%20snackwave%20quinoa%20pabst%20gluten-free.%20Cardigan%20photo%20booth%20banh%20mi%20coloring%20book%20taiyaki%20vaporware%20subway%20tile.%20Pop-up%20pabst%20mumblecore%20green%20juice%20vape%20stumptown%20poke%20pitchfork%20scenester.%20Tote%20bag%20cliche%20gluten-free%20XOXO.%20Organic%20viral%20tofu%20schlitz%20pork%20belly%20knausgaard.%20Cardigan%20semiotics%20vaporware%20prism%20truffaut%20chicharrones%20poutine%20tousled%20PBR&B%20twee.">
                    <img src="../../game/endscreen/twitter.svg" alt="" />
                  </a>
                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=fictiontribe.com/game">
                    <img src="../../game/endscreen/linkedin.svg" alt="" />
                  </a>
                </div>
              </div>
            </footer>
          </section>
          <div class="game-wrapper">
            <div class="fiction-boy hidden">
              <div class="fiction-boy_controls no-drag">
                <div class="fiction-boy__sound-toggle"></div>
                <div class="fiction-boy_dpad-up"></div>
                <div class="fiction-boy_dpad-down"></div>
                <div class="fiction-boy_dpad-left"></div>
                <div class="fiction-boy_dpad-right"></div>
                <div class="fiction-boy_start-btn"></div>
                <div class="fiction-boy_a-btn"></div>
                <div class="fiction-boy_b-btn"></div>
              </div>
            </div>
            <div class="ft-game-wrapper hidden">
              <div id="ft-game">
                <img
                  class="loading-gif"
                  src="../../game/ui/LoadingScreen.gif"
                  alt="Fiction Tribe Game Loading Gif"
                />
              </div>
            </div>
          </div>
          <div class="ft-game-open-btn"></div>
        </section>
    </>
  )
}

export default Game
