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
           <ion-title>Edad 7 y 10</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-grid>
         <ion-row>
            <ion-col>
             <ion-text class="ion-text-center">
               <h1>Seleccione nivel</h1>
             </ion-text> 
            </ion-col>
         </ion-row>
         <ion-row>
            <ion-col>
               <ion-button color="secondary" router-link="rutina" size="large" expand="block">
               <ion-icon slot="start" name="star"></ion-icon>
               Nivel 1
               </ion-button>
            </ion-col>
         </ion-row>
         <ion-row>
            <ion-col>
               <ion-button color="secondary" router-link="/vocales" size="large" expand="block">
               <ion-icon slot="start" name="star"></ion-icon>
               Nivel 2
               </ion-button>
            </ion-col>
         </ion-row>
       </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, 
IonToolbar, IonMenuButton, IonButtons,
IonGrid, IonRow, IonCol, IonButton, IonText, IonIcon,
IonBackButton,
menuController} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Edad7y10',
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
    IonButton,
    IonText,
    IonIcon,
    IonBackButton
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
   methods: {
      mostrarMenu(){
         menuController.open()
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
