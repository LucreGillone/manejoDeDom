console.log([document])

//getElementBy
let section = document.getElementById("sectionContainer")
// console.log([section])
// console.log(document.getElementsByTagName("h2"))
document.getElementsByClassName("class")

//querySelector
// let article = document.querySelectorAll(".article")
// console.log(article)

let anchors = document.querySelectorAll("nav a")
// console.log(anchors)

for (let anchor of anchors) {
    anchor.classList.add("text-dark")
    // console.log(anchor)
}

const mentoresJS = ["Nico", "Lucre", "Flor", "Cami", "Kevin", "Guille"]

const titleSection = document.createElement("h2")
titleSection.textContent = "Lista Mentores"
titleSection.classList.add("text-danger")

section.appendChild(titleSection)

//ul --> li 
{/* <ul>
<li>Nico</li>
<li>Lucre</li>
</ul> */}


// crear el codigo para la lista
function createList(array, where){
    let list = document.createElement("ul")
    for (let elemento of array){
        list.innerHTML += `<li>${elemento}</li>`
    }
    where.appendChild(list)
}

createList(mentoresJS, section)