<template>
  <ion-app>
   <ion-menu side="start" menu-id="first" content-id="main" swipeGesture="false">
      <ion-header>
         <ion-toolbar color="primary">
           <ion-title>Menu</ion-title>
         </ion-toolbar>
       </ion-header>
       <ion-content>
         <ion-list>
             <ion-item href="/home">
               <ion-icon name="mail-outline" slot="start"></ion-icon>
               <ion-label>Inicio</ion-label>
             </ion-item>
             <ion-item href="/categorias">
               <ion-icon name="mail-outline" slot="start"></ion-icon>
               <ion-label>Categorías</ion-label>
             </ion-item>
             <ion-item href="/subircontenido">
               <ion-icon name="paper-plane" slot="start"></ion-icon>
               <ion-label>Subir Contenido</ion-label>
             </ion-item>
             <ion-item button @click="cerrarSesion()">
               <ion-icon name="heart" slot="start"></ion-icon>
               <ion-label>Cerrar Sesión</ion-label>
             </ion-item>
        </ion-list>
       </ion-content>
    </ion-menu>
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonMenu, IonHeader,
IonToolbar, IonList, IonItem,IonContent, 
IonTitle, IonLabel, IonIcon, menuController} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonList,
    IonItem,
    IonContent,
    IonTitle,
    IonLabel,
    IonIcon,
  },
  created(){
     console.log("App has been created. Checking database...")
     //await this.$storage.create()
  },
   methods: {
      async cerrarSesion(){
           await this.$storage.create()
           await this.$storage.remove('usuarioSesion')
           console.log("Sesion de usuario Eliminadao")
           menuController.close("first")
           this.$router.push('/login')
           console.log("redireccionando a Login")

      }
   }

});
</script>
