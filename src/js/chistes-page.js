import { getJoke } from "./http-privaider";

const body = document.body;
let contador=0;


const crearChisteHtml = () =>{

    const html = `<h1 class="mt-5">Chistes:</h1>
    <hr>  
    <button class="btn btn-primary">New jockes</button>

    <ol class="mt-2 list-group">
    </ol>`;

    const divContainer = document.createElement('div');
    divContainer.innerHTML = html;

    body.append(divContainer);
};



const createNewJocke = ( chiste )=>{
    contador++;

    let ol = document.querySelector('ol');
  const li = document.createElement('li'); 

  li.innerHTML = `<br>${contador}.-${ chiste.id }</br>${ chiste.value } <img class="img-thumbnail" src="${chiste.icon_url}">`;
  li.classList.add('list-group-item');
  ol.append(li);
};



const crearEventos = ()=>{

    let btnNew = document.querySelector('button');
    
    btnNew.addEventListener('click', async()=>{
     
        btnNew.disabled=true;
        createNewJocke(await getJoke());
        btnNew.disabled=false;
        
    });
};





export const init =()=>{
    
    crearChisteHtml();
    crearEventos();
};
