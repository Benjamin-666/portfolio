document.getElementById("searchInput").addEventListener("keyup", function () {
    const searchValue = this.value.toLowerCase();
    const sections = document.querySelectorAll("h2, p");

    sections.forEach(el => {
        if (el.textContent.toLowerCase().includes(searchValue)) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    });
});
