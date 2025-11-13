// ===============================
//  script.js — Veille automatisée
// ===============================

// Remplace par ta clé API NewsAPI
const API_KEY = "1ec4dda3893cbb36285c2c2a19cb27d1";

// Requêtes pour les deux thèmes
const urls = {
  cyber: `https://gnews.io/api/v1/search?q=cybersecurite&lang=fr&country=fr&max=5&token=${API_KEY}`,
  reseaux: `https://gnews.io/api/v1/search?q=administration%20réseau&lang=fr&country=fr&max=5&token=${API_KEY}`
};

// Fonction d’affichage d’actualités
function afficherArticles(data, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  if (!data.articles || data.articles.length === 0) {
    container.innerHTML = "<p>Aucune actualité récente trouvée.</p>";
    return;
  }

  data.articles.forEach(article => {
    const div = document.createElement("div");
    div.classList.add("news-item");
    div.innerHTML = `
      <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
      <p>${article.description || ""}</p>
      <small>Source : ${article.source.name} – ${new Date(article.publishedAt).toLocaleDateString("fr-FR")}</small>
    `;
    container.appendChild(div);
  });
}

// Appels API
fetch(urls.cyber)
  .then(res => res.json())
  .then(data => afficherArticles(data, "news-cyber"))
  .catch(err => console.error("Erreur (cyber) :", err));

fetch(urls.reseaux)
  .then(res => res.json())
  .then(data => afficherArticles(data, "news-reseaux"))
  .catch(err => console.error("Erreur (réseaux) :", err));