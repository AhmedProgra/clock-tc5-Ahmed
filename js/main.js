function activeFullMode() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    } else {
        console.log("Full mode is not supported in your browser !!!");
    }
}

window.addEventListener("click", activeFullMode, { once: true });
