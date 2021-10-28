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
           <ion-title>Colores</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-grid>
         <ion-row>
            <ion-col>
               <ion-text class="ion-text-center">
               <h1>Los colores</h1>
               </ion-text>
            </ion-col>
         </ion-row>
         <ion-row v-for="(color, index) in colores" :key="index">
            <ion-col>
               <ion-card>
                 <img :src="color[0].imgSrc" />
                 <ion-card-content>
                 <ion-text>{{color[0].nombre}}</ion-text>
                 <img @click="playAudio(color[0].audioSrc)" src="assets/images/sonido_icono-sinbg.png">
                 </ion-card-content>
               </ion-card>
            </ion-col>
            <ion-col>
               <ion-card>
                 <img :src="color[1].imgSrc" />
                 <ion-card-content>
                 <ion-text>{{color[1].nombre}}</ion-text>
                 <img @click="playAudio(color[1].audioSrc)" src="assets/images/sonido_icono-sinbg.png">
                 </ion-card-content>
               </ion-card>
            </ion-col>
         </ion-row>
       </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, 
IonToolbar, IonMenuButton, IonButtons,
IonGrid, IonRow, IonCol, IonText,
IonBackButton, IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Colores',
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
         colores: [
            [{nombre:'Rojo', imgSrc:'assets/images/rojo.png', audioSrc:'assets/sounds/rojo.mp3'},
            {nombre:'Amarillo', imgSrc:'assets/images/amarillo.png', audioSrc:'assets/sounds/amarillo.mp3'}],
            [{nombre:'Verde', imgSrc:'assets/images/verde.png', audioSrc:'assets/sounds/verde.mp3'},
            {nombre:'Morado', imgSrc:'assets/images/morado.png', audioSrc:'assets/sounds/morado.mp3'}],
            [{nombre:'Celeste', imgSrc:'assets/images/celeste.png', audioSrc:'assets/sounds/celeste.mp3'},
            {nombre:'Rosado', imgSrc:'assets/images/rosado.png', audioSrc:'assets/sounds/rosado.mp3'}],
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
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
