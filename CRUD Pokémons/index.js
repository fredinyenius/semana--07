'use strict';

const documentReady = () => {
  const pokemons = [];
  const formPokemon = document.getElementById('formPokemon');
  
  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms['fromPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const HP = documentFormPokemon.HP.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    pokemons.push({ name, type, HP, attack, special, imgUrl});
    readPokemons();
  };
   const readPokemons = () => {
   
    const tbodyPokemons = document.getElementById('tbodyPokemons');  
    tbodyPokemons.innerHTML ='' ;
    pokemons.forEach((element, index) => {
    const{ name, type, HP, attack, special, imgUrl } = element;
    tbodyPokemons.innerHTML +=`
  <tr>
    <td>${index}</td>
    <td>${name}</td>
    <td>${type}</td>
    <td>${HP}</td>
    <td>${attack}</td>
    <td>${special}</td>
    <td>
    <img 
       src="${imgUrl}"
        alt="${name}" class="img-fluid" style="max-width: 128px">
        </td>
  </tr>
 ` ;
    });
  
};
formPokemon.addEventListener('submit', createPokemon)
};
document.addEventListener('DOMContentLoaded', documentReady);