(() => {
    document.getElementById("toggle").onclick = () => {
        document.getElementById("menu").classList.toggle("open");
        document.getElementById("toggle").classList.toggle("open");
    };
})();
