document.addEventListener("wheel", (event) => {
    const paperRoll = document.getElementById("paper-roll");
    let currentScroll = window.scrollY;
  
    // Actualiza la posición para simular desenrollar
    if (event.deltaY > 0) {
      window.scrollTo(0, currentScroll + 20);
    } else {
      window.scrollTo(0, currentScroll - 20);
    }
  });
  