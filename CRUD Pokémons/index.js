'use strict';

const documentReady = () => {
  const tbodyPokemons = document.querySelector('#tbodyPokemons');
  const formPokemon = document.querySelector('#formPokemon');
   tbodyPokemons.innerHTML += `
  <tr>
    <td>1</td>
    <td>Pikachu</td>
    <td>Electrico</td>
    <td>250</td>
    <td>Trueno</td>
    <td>Voltio</td>
    <td><img src="https://i.pinimg.com/550x/dd/20/84/dd208480c6937eb68a91f73df5ca904a.jpg" alt="Pikachu" class="img-fluid" style="max-width: 128px"></td>
    <td>✍</td>
</tr>
  `;
  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms['fromPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const HP = documentFormPokemon.HP.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    console.log({ mane, type, HP, attack, special, imgUrl});
};
formPokemon.addEventListener('submit', createPokemon)
};
document.addEventListener('DOMContentLoaded', documentReady);