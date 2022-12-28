//lista con los nombres de los mentores

//tenemos que hacer ul con li, tener en dónde lo vamos a mostrar

let section = document.getElementById("sectionList")

function crearLista (array, donde) {
    let lista = document.createElement("ul")
    for (let elemento of array){
        lista.innerHTML += `<li>
                                <h3 class="text-danger">Nombre: ${elemento.nombre}</h3>
                                <p>Rol: ${elemento.rol}</p>
                            </li>`
    }
    donde.appendChild(lista)
}

crearLista(mentores, section)

