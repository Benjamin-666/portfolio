const urls = {
    cyber: [
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Fsecurite%2Frss.xml&api_key=56ebzcqcrlqnh3dok7efnx7wxb3ikipndjfx4yhv",
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.it-connect.fr%2Ffeed%2F&api_key=56ebzcqcrlqnh3dok7efnx7wxb3ikipndjfx4yhv"
    ],
    reseaux: [
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Freseaux%2Frss.xml&api_key=56ebzcqcrlqnh3dok7efnx7wxb3ikipndjfx4yhv",
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.it-connect.fr%2Ffeed%2F&api_key=56ebzcqcrlqnh3dok7efnx7wxb3ikipndjfx4yhv"
    ]
};

// === Fonction pour afficher les articles ===
function afficherArticles(data, elementId) {
    const container = document.getElementById(elementId);
    if (!data.items || data.items.length === 0) return;

    data.items.forEach(article => {
        const div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = `
            <h4><a href="${article.link}" target="_blank">${article.title}</a></h4>
            <p>${article.description || ""}</p>
            <small>Source : ${article.author || "RSS"} – ${new Date(article.pubDate).toLocaleDateString("fr-FR")}</small>
        `;
        container.appendChild(div);
    });
}

// === Fonction pour charger plusieurs flux ===
function chargerFluxMultiple(urlArray, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ""; // Vide le conteneur au départ

    urlArray.forEach(url => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            afficherArticles(data, elementId);
        })
        .catch(err => console.error(`Erreur flux ${url}:`, err));
    });
}

// === Charger tous les flux ===
chargerFluxMultiple(urls.cyber, "news-cyber");
chargerFluxMultiple(urls.reseaux, "news-reseaux");
