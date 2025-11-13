const urls = {
  cyber: "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.lemondeinformatique.fr/flux-rss/thematique/securite/rss.xml"),
  reseaux: "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.zdnet.fr/feeds/rss/actualites.xml")
};


function afficherArticles(data, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  if (!data.items || data.items.length === 0) {
    container.innerHTML = "<p>Aucune actualité récente trouvée.</p>";
    return;
  }

  data.items.slice(0, 5).forEach(article => {
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

// Charger les flux
fetch(urls.cyber)
  .then(res => res.json())
  .then(data => afficherArticles(data, "news-cyber"))
  .catch(err => console.error("Erreur (cyber) :", err));

fetch(urls.reseaux)
  .then(res => res.json())
  .then(data => afficherArticles(data, "news-reseaux"))
  .catch(err => console.error("Erreur (réseaux) :", err));

