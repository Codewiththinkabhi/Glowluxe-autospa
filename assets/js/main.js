document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".c-hero__video");
  var toggle = document.querySelector(".c-hero__video-toggle");

  if (!video || !toggle) {
    return;
  }

  toggle.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      toggle.classList.remove("c-hero__video-toggle--paused");
      toggle.setAttribute("aria-label", "Pause background video");
    } else {
      video.pause();
      toggle.classList.add("c-hero__video-toggle--paused");
      toggle.setAttribute("aria-label", "Play background video");
    }
  });
});
