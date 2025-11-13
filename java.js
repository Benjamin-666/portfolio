document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") handleSearch();
});

function handleSearch() {
    let query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (query === "") return;

    if (query.includes("accueil")) {
        window.location.href = "#top";
    } 
    else if (query.includes("expérience") || query.includes("experience")) {
        window.location.href = "experience.html";
    }
    else if (query.includes("compétence") || query.includes("competence")) {
        window.location.href = "competences.html";
    }
    else if (query.includes("diplome") || query.includes("diplôme")) {
        window.location.href = "diplomes.html";
    }
    else if (query.includes("contact")) {
        window.location.href = "contact.html";
    }
    else {
        alert("Aucun résultat correspondant 😕");
    }
}
