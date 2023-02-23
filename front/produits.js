//récupérer les pièces depuis le jscon
const reponse = await fetch(" http://localhost:3000/api/products");
const produits = await reponse.json();

for (let i = 0; i < produits.length; i++) {
  const article = produits[i];
  //On pointe la section dans laquelle on va injecter les article via la class item
  const sectionItems = document.querySelector(".items");

  //création d'une section article qu'on va injecter dans la section item
  const sectionArticle = document.createElement("article");

  //création d'une balise img dans laquelle on injecte l'image de l'api
  const imageElement = document.createElement("img");
  imageElement.src = article.imageUrl;
  const nomElement = document.createElement("h3");
  nomElement.classList.add("productName");
  nomElement.innerText = article.name;
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("productDescription");
  descriptionElement.innerText = article.description;

  //On place la section article dans la section Item puis on place une image dans la section article
  sectionItems.appendChild(sectionArticle);
  sectionArticle.appendChild(imageElement);
  sectionArticle.appendChild(nomElement);
  sectionArticle.appendChild(descriptionElement);
}
