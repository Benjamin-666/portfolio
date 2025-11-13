const API_KEY = "1ec4dda3893cbb36285c2c2a19cb27d1";

const urls = {
  cyber: `https://gnews.io/api/v4/search?q=cybersecurite&lang=fr&country=fr&max=5&apikey=${API_KEY}}`,
  reseaux: `https://gnews.io/api/v4/search?q=administration%20réseau&lang=fr&country=fr&max=5&apikey=${API_KEY}}`,
};

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

function chargerFlux(url, elementId) {
  const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

  fetch(proxyUrl)
    .then(res => res.json())
    .then(data => {
      const contenu = JSON.parse(data.contents);
      afficherArticles(contenu, elementId);
    })
    .catch(err => console.error("Erreur via proxy :", err));
}

chargerFlux(urls.cyber, "news-cyber");
chargerFlux(urls.reseaux, "news-reseaux");



