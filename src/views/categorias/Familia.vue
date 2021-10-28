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
           <ion-title>Familia</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-grid>
         <ion-row>
            <ion-col>
             <ion-text class="ion-text-center">
               <h1>Miembros de la Familia</h1>
             </ion-text> 
            </ion-col>
         </ion-row>
         <ion-row v-for="miembro of miembros" :key="miembro.nombre">
            <ion-col class="ion-text-center">
               <ion-card class="ion-padding">
                 <img :src="miembro.imgSrc" />
                 <ion-card-content>
                 <ion-text>{{miembro.nombre}}</ion-text>
                 </ion-card-content>
               </ion-card>
            </ion-col>
         </ion-row>
         <ion-row>
            <ion-col>
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
IonBackButton, IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Familia',
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
    IonCard
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
        miembros: [
        {nombre:"Mamá", imgSrc:"assets/images/mama.png"},
        {nombre:"Papá", imgSrc:"assets/images/papa.png"},
        {nombre:"Hermano", imgSrc:"assets/images/hijo.png"},
        {nombre:"Hermana", imgSrc:"assets/images/hermana.png"},
        {nombre:"Tía", imgSrc:"assets/images/tia.png"},
        {nombre:"Abuelo y Abuela", imgSrc:"assets/images/abuelos.png"},
        {nombre:"Prima", imgSrc:"assets/images/prima.png"},
        {nombre:"Primo", imgSrc:"assets/images/primo.png"},
        ]
     }
  },
   methods: {
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
