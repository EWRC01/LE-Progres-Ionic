console.log('Works!')
const description =  document.getElementById("txtDescription");
const titulo = document.getElementById("txtTitulo");
const btnUpload = document.getElementById("btnUpload");
const btnCancel = document.getElementById("btnCancel");



btnUpload.addEventListener('click', () => {
    const descriptionA = description.value;
    const tituloA = titulo.value;
    console.log(tituloA,  descriptionA);
})


const $seleccionArchivos = document.querySelector('#inputUpload')
  const $prevImagen = document.querySelector("#prevImg");
  $seleccionArchivos.addEventListener("change", ()=>{
    const archivos = $seleccionArchivos.files;
    if(!archivos || !archivos.length) {
        $prevImagen.src="";
        return;
    }

    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $prevImagen.src = objectURL;
});