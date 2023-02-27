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
  console.log(imageElement);
  const nomProduit = document.querySelector("#title");
  nomProduit.textContent = maficheproduit.name;
  imageElement.appendChild(image);
}
fetchData();
