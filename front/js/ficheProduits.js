//récupérer l'id de l'url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

//const maficheproduit = fetch(`http://localhost:3000/api/products/${id}`);

async function fetchData() {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const maficheproduit = await response.json();
  console.log(maficheproduit);
  const imageElement = document.querySelector(".item__img");
  const image = document.createElement("img");
  image.src = maficheproduit.imageUrl;
  imageElement.appendChild(image);
  const nomProduit = document.querySelector("#title");
  nomProduit.textContent = maficheproduit.name;
  const prixElement = document.querySelector("#price");
  prixElement.innerText = maficheproduit.price;
  const descriptionEleent = document.querySelector("#description");
  descriptionEleent.innerText = maficheproduit.description;

  for (let i = 0; i < maficheproduit.colors.length; i++) {
    const color = maficheproduit.colors[i];
    const colorElement = document.querySelector("#colors");
    const nomColor = document.createElement("option");
    nomColor.innerText = color;
    nomColor.value = color;
    colorElement.appendChild(nomColor);
  }
}
fetchData();
