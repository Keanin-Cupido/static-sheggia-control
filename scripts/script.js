'use strict';

// Global
let fullScreen = false;

// Elements
const fullScreenBtn = document.querySelector(".icon-fullscreen");

// Functions
function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      fullScreenBtn.classList.add("icon-resize-small");
      fullScreenBtn.classList.remove("icon-fullscreen");
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      fullScreenBtn.classList.remove("icon-resize-small");
      fullScreenBtn.classList.add("icon-fullscreen");
    }
  }

function changeIcon(fullScreen) {
    // if fullscreen is true, then use make smaller icon
    // else use make full screen icon
}

// Event handlers
fullScreenBtn.addEventListener("click", toggleFullScreen);
