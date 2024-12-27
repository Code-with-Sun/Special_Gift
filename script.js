document.addEventListener("DOMContentLoaded", function () {
  const flames = document.querySelectorAll(".flame, .flame2, .flame3");
  const text = document.querySelector(".text");
  const text2 = document.querySelector(".text2");
  const sms = document.querySelector(".message");
  const heart = document.querySelector(".heart");
  const wish = document.querySelector(".wish");
  flames.forEach(flame => {
      flame.addEventListener("click", () => {
          flames.forEach(flame => {
              flame.style.opacity = "0"; // Hide flames
          });
          text.style.opacity = "1"; // Show text
          text.style.top = "-580%"; // Move text up
          text2.style.opacity = "0"; // Hide text 2 
          sms.style.opacity = "1"; // To show the sms
          sms.style.top = "92%";
          heart.style.opacity ="1"; // to show the love
          heart.style.top = "-13%";
          wish.style.opacity = "0"; // To hide the wishes
      });
  });
});

 // Function to detect mobile devices and Desktop Mode
 function checkDesktopModeOnMobile() {
    // Check if the device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile && window.innerWidth > 768) {
        // Redirect to mobile version of the site
        window.location.href = "https://code-with-sun.github.io/Special_Gift/";
    } else if (window.innerWidth > 768) {
        // Force mobile layout
        document.body.style.maxWidth = "480px";
        document.body.style.margin = "0 auto";
        document.body.style.overflowX = "hidden";

        // Notify the user
        alert("Hi Swapna I am Jarvis !!\nI'm personal AI assistant of Mr. Sundar\nPlease off desktop site for best experience👍");
    }
}

// Run the function on page load
checkDesktopModeOnMobile();

// Run the function again whenever the window is resized
window.addEventListener('resize', checkDesktopModeOnMobile);
