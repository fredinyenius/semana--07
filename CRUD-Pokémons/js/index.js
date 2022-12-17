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
          onclick="readPokemon(${index})">
          ✍
          </button>
          <button class="btn btn-info m-1"
          onclick="deletePokemon(${index})">
          🗑
          </button>
          </td>
        </tr>
      `;
    });
  };
  const readPokemon = (index) => {

     const pokemon = pokemons.slice(index, index + 1)[0];
     console.log(pokemon);
     const { name, type, hp, attack, special, imgUrl } = pokemon;
     const documentFormPokemon = document.forms['formPokemon'];
    documentFormPokemon.index.value = index;
    documentFormPokemon.name.value = name;
    documentFormPokemon.type.value =  type;
    documentFormPokemon.hp.value = hp;
    documentFormPokemon.attack.value = attack ;
    documentFormPokemon.specian.value = special;
    documentFormPokemon.imgUrl.value = imgUrl;
  };

  const updatePokemon = (index) => {
  
    const documentFormPokemon = document.forms['formPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    pokemons.splice(index, 1, { name, type, hp, attack, special, imgUrl });
      localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
    documentFormPokemon.reset();
    readPokemons();
    document.getElementById('button').innerText = 'Crear';
    readPokemon();
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

  const submitPokemon = (e) => {
    e.preventDefault();
    const index = document.getElementById('index').value;
    if (index === '') {
     createPokemon();
   }else{
     updatePokemon(index);
   }
    };
    readPokemons();
  formPokemon.addEventListener('submit', submitPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);