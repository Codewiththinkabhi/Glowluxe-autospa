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

document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (elementId, filePath) => {
    const targetEl = document.getElementById(elementId);
    if (targetEl) {
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error("HTTP error " + response.status);
          return response.text();
        })
        .then(html => { targetEl.innerHTML = html; })
        .catch(err => console.error("Failed to load " + filePath, err));
    }
  };
  loadPartial("site-header", "header.html");
  loadPartial("site-footer", "footer.html");
});

