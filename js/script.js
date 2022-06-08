const imagenesGaleria = document.querySelectorAll(".galeria a");
const imagenModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");
const atras = document.querySelector(".modal a:first-child");
const proximo = document.querySelector(".modal a:last-child");

var queimagen = [];

for(let i = 0; i< imagenesGaleria.length; i++){
    queimagen.push(imagenesGaleria[i].getAttribute("href"))
    imagenesGaleria[i].addEventListener("click", function(e){
        e.preventDefault();
        imagenModal.setAttribute("src", queimagen[i]);
        modal.classList.add("visible");
    })
}

function flechas (queflecha, n1, n2, n3){
    queflecha.addEventListener("click", function(){
        if(queimagen.indexOf(imagenModal.getAttribute("src")) == n1){
            imagenModal.setAttribute("src", queimagen[n2]);
        }else{
            imagenModal.setAttribute("src", queimagen[queimagen.indexOf(imagenModal.getAttribute("src"))+(n3)])
        }
    })
}
flechas(atras, 0, queimagen.length -1 , -1);
flechas(proximo, queimagen.length -1, 0, 1);










// proximo.addEventListener("click", function(){
//     if(queimagen.indexOf(imagenModal.getAttribute("src")) == 8){
//         imagenModal.setAttribute("src", queimagen[0]);
//     }else{
//         imagenModal.setAttribute("src", queimagen[queimagen.indexOf(imagenModal.getAttribute("src"))+1])
//     }
// })

// atras.addEventListener("click", function(){
//     if(queimagen.indexOf(imagenModal.getAttribute("src")) == 0){
//         imagenModal.setAttribute("src", queimagen[8]);
//     }else{
//         imagenModal.setAttribute("src", queimagen[queimagen.indexOf(imagenModal.getAttribute("src"))-1])
//     }
// })