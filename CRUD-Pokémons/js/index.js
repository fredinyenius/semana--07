'use strict';


  const POKEMONS_CRUD_DATA = 'pokemons-crud';

  const pokemons= JSON.parse(localStorage.getItem(POKEMONS_CRUD_DATA)) ?? [];
  

  const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms['formPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    pokemons.push({ name, type, hp, attack, special, imgUrl });
    localStorage.setItem('pokemons-crud', JSON.stringify(pokemons));
    readPokemons();
  };

  const readPokemons = () => {
    const tBodyPokemons = document.getElementById('tBodyPokemons');
    tBodyPokemons.innerHTML = '';
    pokemons.forEach((element, index) => {
      const { name, type, hp, attack, special, imgUrl } = element;
      tBodyPokemons.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${name}</td>
          <td>${type}</td>
          <td>${hp}</td>
          <td>${attack}</td>
          <td>${special}</td>
          <td>
            <img
              src="${imgUrl}"
              alt="${name}" class="img-fluid" style="max-width: 128px;" />
          </td>
          <td>
          <button class="btn btn-danger"
          onclick="deletePokemon(${index})">
          🗑
          </button>
          </td>
        </tr>
      `;
    });
  };

  const deletePokemon = (index) => {
const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro?',
      text: "¡No podras revertir  esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, ya fue!',
      cancelButtonText: 'No, perate!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        pokemons.splice(index, 1);
        localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
        readPokemons();
        swalWithBootstrapButtons.fire(
          '¡Borrrado!',
          '¡De todas maneras!',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu registro esta seguro :)',
          'error'
        )
      }
    })  
  };

  const documentReady = () => {
  const formPokemon = document.getElementById('formPokemon');

  readPokemons();
  formPokemon.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);