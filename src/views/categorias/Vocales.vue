<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
            <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Opciones 2</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
       <ion-header collapse="condense">
         <ion-toolbar>
           <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
           </ion-buttons>
           <ion-title>Vocales</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-grid>
         <ion-row>
            <ion-col>
             <ion-text class="ion-text-center">
               <h1>Vocales y Palabras</h1>
             </ion-text> 
            </ion-col>
         </ion-row>
         <ion-row v-for="(vocPa, index) in vocalesPalabras" :key="index">
            <ion-col class="ion-text-center">
               <ion-card>
                 <img :src="vocPa.imgSrc">
                 <ion-card-content>
                 <ion-text v-if="!vocPa.nombre">{{vocPa.nombre}}</ion-text>
                 <img @click="playAudio(vocPa.audioSrc)" src="assets/images/sonido_icono-sinbg.png">
                 </ion-card-content>
               </ion-card>
               <ion-text></ion-text>
            </ion-col>
         </ion-row>
       </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, 
IonToolbar, IonMenuButton, IonButtons,
IonGrid, IonRow, IonCol, IonText, IonCard, IonCardContent,
IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Vocales',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonGrid,
    IonCol,
    IonRow,
    IonText,
    IonBackButton,
    IonCard,
    IonCardContent
  },
  async beforeCreate(){
     await this.$storage.create()
     const usuarioLogeado = await this.$storage.get('usuarioSesion')
     if(!usuarioLogeado){
         console.log("Usuario no encontrado")
         this.$router.push('/login')
         console.log("redireccionando a Login")
     }
  },
  data(){
     return {
        vocalesPalabras : [
         {nombre:'', imgSrc:'assets/images/a.png', audioSrc:'assets/sounds/a_vocal.mp3'},
         {nombre:'', imgSrc:'assets/images/e.png', audioSrc:'assets/sounds/e_vocal.mp3'},
         {nombre:'', imgSrc:'assets/images/i.png', audioSrc:'assets/sounds/i_vocal.mp3'},
         {nombre:'', imgSrc:'assets/images/o.png', audioSrc:'assets/sounds/o_vocal.mp3'},
         {nombre:'', imgSrc:'assets/images/u.png', audioSrc:'assets/sounds/u_vocal.mp3'},
         {nombre:'Agua', imgSrc:'assets/images/agua.png', audioSrc:'assets/sounds/agua.mp3'},
         {nombre:'Elote', imgSrc:'assets/images/elote.png', audioSrc:'assets/sounds/Elote.mp3'},
         {nombre:'Isla', imgSrc:'assets/images/isla.png', audioSrc:'assets/sounds/Isla.mp3'},
         {nombre:'Oso', imgSrc:'assets/images/oso.png', audioSrc:'assets/sounds/oso.mp3'},
         {nombre:'Unicornio', imgSrc:'assets/images/unicornio.png', audioSrc:'assets/sounds/Unicornio.mp3'}
        ]
     }
  },
   methods: {
      playAudio(path){
         let audioElem = new Audio()
         audioElem.src = path
         audioElem.play()
      }
   }
});
</script>

<style scoped>
ion-content{
   --background: val(--ion-color-light);
}
</style>
