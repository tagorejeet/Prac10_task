document.getElementById("bulb").addEventListener("click", function() {
    this.src = this.src.includes("bulb_off.png") ? "bulb_on.png" : "bulb_off.png";
});
