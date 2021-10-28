console.log('Works!')
const img = document.getElementById("inputUpload");
const titulo = document.getElementById("txtTitulo");
const descripcion =  document.getElementById("txtDescription");
const btnUpload = document.getElementById("btnUpload");
const btnCancel = document.getElementById("btnCancel");
const uploadList = document.getElementById("uploadsList");





function addNew(){
    const newUploadList = {
        title: titulo.value,
        description: descripcion.value,
        src: img.value
    }
    const newUploadsTemplate = `
                    <ion-card>
                    <ion-card-header>
                    <ion-card-title>
                    
                    ${newUploadList.title}
                    
                    </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                    ${newUploadList.description}
                    <ion-thumbnail>
                    <img src="${newUploadList.src}">
                    </ion-thumbnail>
                    </ion-card-content>
                    </ion-card>

                    
`;
    uploadList.innerHTML += newUploadsTemplate;
    console.log(img.value)

}