let elList = document.querySelector(".list");


for (let pokemon of pokemons) {
  let elItem = document.createElement("li");
  let elImg = document.createElement("img");
  let elBody = document.createElement("div");
  let elTitle = document.createElement("h3");
  let elText = document.createElement("p");
  let elTextNum = document.createElement("p");
  let elTwoBody = document.createElement("div");
  let elText2 = document.createElement("p");
  let elText3 = document.createElement("p");

  elImg.setAttribute("src", pokemon.img);
  elTitle.textContent = pokemon.name;
  elText2.textContent = `Height: ${pokemon.height}`;
  elText3.textContent = `Weight: ${pokemon.weight}`;
  elTextNum.textContent = `№: ${pokemon.num}`
  elText.textContent = `Weaknesses: ${pokemon.weaknesses}`

  elItem.setAttribute("class", "text-danger card col-3 bg-info p-0");
  elTwoBody.setAttribute("class", " border-top d-flex card-body justify-content-center");
  elText2.setAttribute("class", "m-o card-link");
  elText3.setAttribute("class", "m-o card-link");
  elImg.setAttribute("class", " bg-white card-img-top ");
  elTitle.setAttribute("class", "card-title");
  elBody.setAttribute("class","card-body text-center ");

  elTwoBody.appendChild(elText2);
  elTwoBody.appendChild(elText3);
  elBody.appendChild(elTitle);
  elBody.appendChild(elTextNum)
  elBody.appendChild(elText)

  elItem.appendChild(elImg);
  elItem.appendChild(elBody);
  elItem.appendChild(elTwoBody);

  elList.appendChild(elItem);
}
