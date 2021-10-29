<style scoped>
  ion-content {
    --background: url('/assets/images/backgroundContent.jpg');
    
  }
  ion-icon{
    color: white;
  }
  ion-card{
    --background:#2c2c54;
    --color: transparent;
  }
  ion-item{
    --background:transparent;
  }
</style>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Contenido</ion-title>
      </ion-toolbar>
    </ion-header>
   <ion-content :fullscreen="true">
       <ion-header collapse="condense">
         <ion-toolbar>
           <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
           </ion-buttons>
           <ion-title>Contenido</ion-title>
         </ion-toolbar>
       </ion-header>
     <form>
     <ion-card>
       <ion-card-header color="tertiary">
            <ion-card-title>Agrega nuevo contenido</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-item>
                     <ion-label position="floating">Imagen del archivo</ion-label>
                    <ion-input v-model="imageUpload"  type="url"  id="inputUpload" required="true"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label class="text"  position="floating">Titulo del archivo</ion-label>
                    <ion-textarea v-model="titleUpload" type="text" id="txtTitulo" required="true"></ion-textarea>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Descripcion del archivo</ion-label>
                    <ion-textarea  v-model="descriptionUpload" type="text" id="txtDescription" required="true"></ion-textarea>
                </ion-item>
                <ion-item>
                     <ion-button color="tertiary" size="medium" expand="block" v-on:click="addNew()" id=""><ion-icon :icon="arrowUpCircle"></ion-icon> Subir</ion-button>
                    <ion-button color="danger" size="medium" expand="block" v-on:click="clear()" id=""><ion-icon :icon="closeCircle"></ion-icon> Cancelar</ion-button>
                </ion-item>
            </ion-card-content>
     </ion-card>
     </form>
              <ion-list style="background-color:transparent;" v-for="(upload, index) in uploads" v-bind:key="upload.index">
                <ion-card color="dark">
                  <ion-card-header color="tertiary" style="color:white;">
                    <ion-card-title>
                      <ion-label>Titulo:</ion-label>
                      {{upload.titleUpload}}
                    </ion-card-title>
                    <ion-card-subtitle slot="secondary">
                      {{index}}
                    </ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-img :src="upload.imageUpload"></ion-img>
                    <ion-label>Descripcion:</ion-label>
                    {{upload.descriptionUpload}}
                  </ion-card-content>
                </ion-card>
              </ion-list>
   </ion-content>
    
  </ion-page>
</template>

<script lang="js">
import { IonContent, IonPage, IonCard, IonCardHeader, IonItem, IonTextarea, IonCardContent, IonLabel, IonButton, IonCardTitle, IonIcon, IonInput, IonList, IonCardSubtitle, IonImg} from '@ionic/vue';
import { defineComponent } from 'vue';
import {arrowUpCircle, closeCircle} from "ionicons/icons";
export default defineComponent({
  name: 'SubirContenido',
  components: {
    IonContent,
    IonLabel,
    IonPage,
    IonCard,
    IonCardHeader,
    IonItem,
    IonCardContent,
    IonTextarea,
    IonButton,
    IonCardTitle,
    IonIcon,
    IonInput,
    IonList,
    IonCardSubtitle,
    IonImg
  },
  setup() {
    return {
      arrowUpCircle,
      closeCircle
    }
  },
  data() {
    return{
          imageUpload: '',
            titleUpload: '',
            descriptionUpload: '',
            uploads: []
    }
  },
  methods: {
      addNew(){
      console.log('Works!');
      this.uploads.push({
        imageUpload: this.imageUpload,
        titleUpload: this.titleUpload,
        descriptionUpload: this.descriptionUpload
      });
      this.imageUpload = '';
      this.titleUpload = '';
      this.descriptionUpload = '';
    },
    clear(){
      this.imageUpload = '';
      this.titleUpload = '';
      this.descriptionUpload = '';
    }
      }
});
</script>
