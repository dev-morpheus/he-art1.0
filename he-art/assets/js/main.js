async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Erro ao carregar ${file}:`, error);
  }
}

// Carregar os componentes
loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
loadComponent("cards-container", "components/card.html");
