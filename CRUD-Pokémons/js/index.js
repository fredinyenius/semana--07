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
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        pokemons.splice(index, 1);
        localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
        readPokemons();
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
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