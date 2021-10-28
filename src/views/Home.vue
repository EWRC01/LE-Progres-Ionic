<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
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
           <ion-title>Home</ion-title>
         </ion-toolbar>
       </ion-header>
      <div id="container">
        <strong>Bienvenido a Le Progres!</strong><br>
        <h2>{{usuario.toUpperCase()}}</h2>
        <p>Utiliza el menu del lado para <br>poder ver las diferentes opciones</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, 
IonToolbar, IonMenuButton, IonButtons,
menuController} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonMenuButton,
    IonButtons
  },
  async beforeCreate(){
     await this.$storage.create()
     const usuarioLogeado = await this.$storage.get('usuarioSesion')
     if(!usuarioLogeado){
         console.log("Usuario no encontrado")
         this.$router.push('/login')
         console.log("redireccionando a Login")
     }else{
         this.usuario = usuarioLogeado.nombre
     }
  },
  data(){
     return {
        usuario: ''
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
