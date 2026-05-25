document.addEventListener("DOMContentLoaded", () => {
  const username = "esra-sen";
  const projectsContainer = document.getElementById("github-projects");
  const repoCountEl = document.getElementById("repo-count");

  // GitHub API'den repoları çek
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    .then(response => response.json())
    .then(repos => {
      if (!repos || repos.length === 0) {
        projectsContainer.innerHTML = "<p>Herhangi bir genel proje bulunamadı.</p>";
        return;
      }

      // Toplam repo sayısını güncelle
      repoCountEl.innerText = repos.length;

      // Container'ı temizle
      projectsContainer.innerHTML = "";

      // Repoları dön ve HTML kartları oluştur
      repos.forEach(repo => {
        // Profil reposunu listeleme
        if (repo.name.toLowerCase() === username.toLowerCase()) return;

        const card = document.createElement("div");
        card.className = "project-card";

        // Eğer açıklama yoksa varsayılan metin koy
        const description = repo.description ? repo.description : "Click to view this repository's source code, documentation, and history.";
        
        // Dil tag'i varsa ekle
        const languageTag = repo.language ? `<span class="ptag">${repo.language}</span>` : "";

        card.innerHTML = `
          <div class="project-meta">public · github.com/${username}</div>
          <h3>${repo.name}</h3>
          <p>${description}</p>
          <div class="project-tags">
            ${languageTag}
            <a href="${repo.html_url}" target="_blank" style="text-decoration:none">
              <span class="ptag" style="color:#34d399; border-color:rgba(52,211,153,.25)">→ view repo</span>
            </a>
          </div>
        `;
        projectsContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      projectsContainer.innerHTML = "<p>Projeler yüklenirken bir hata oluştu.</p>";
    });
});