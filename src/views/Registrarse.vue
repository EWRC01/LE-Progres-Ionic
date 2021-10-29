<template>
<ion-page>
<ion-header :translucent="true">
<ion-toolbar>
    <ion-title size="">Registrarse</ion-title>
</ion-toolbar>
</ion-header>
<ion-content :fullscreen="true">
  <ion-grid>
    <ion-row>
      <ion-col>
       <ion-text class="ion-text-center">
         <h1>LE PROGRES</h1>
       </ion-text> 
      </ion-col>
    </ion-row>
    <ion-row>
       <ion-col class="ion-text-center ion-margin-bottom">
          <ion-button color="warning">TUTOR</ion-button>
          <ion-button color="warning">ADMIN</ion-button>
       </ion-col>
    </ion-row>
    <ion-row>
       <ion-col class="ion-margin-top">
          <ion-item>
             <ion-label position="stacked"><h1>Nombre del Tutor</h1></ion-label>
             <ion-input v-model="nombre" type="text" id="nameTutor" placeholder="Escriba su nombre"></ion-input>
          </ion-item>
       </ion-col>
     </ion-row>
    <ion-row>
       <ion-col>
          <ion-item>
             <ion-label position="stacked"><h1>Corre Electrónico</h1></ion-label>
             <ion-input v-model="correo" type="email" placeholder="Escriba su correo"></ion-input>
          </ion-item>
       </ion-col>
     </ion-row>
    <ion-row>
       <ion-col>
          <ion-item>
             <ion-label position="stacked"><h1>Contraseña de Tutor</h1></ion-label>
             <ion-input v-model="password" type="password" placeholder="Escriba su correo"></ion-input>
          </ion-item>
       </ion-col>
     </ion-row>
     <ion-row>
      <ion-col class="ion-margin-top ion-margin-bottom">
         <ion-button @click="agregarUsuario" size="large" expand="block" color="primary">
            <ion-text color="dark">Registrarse</ion-text> 
         </ion-button>
      </ion-col>
     </ion-row>
     <ion-row>
      <ion-col class="ion-text-center ion-margin-top">
         <ion-button color="light">
            <ion-text color="dark">Olvidé Contraseña</ion-text> 
         </ion-button>
         <ion-button router-link="/login" color="light">
            <ion-text color="dark">Iniciar Sesión</ion-text> 
         </ion-button>
      </ion-col>
     </ion-row>
  </ion-grid>
</ion-content>
</ion-page>
</template>

<script>
import { IonCol, IonGrid, IonRow, IonPage, IonContent,
IonToolbar, IonTitle, IonHeader, IonText, IonItem,
IonInput, IonButton, IonLabel} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Registrarse',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonText,
    IonItem,
    IonInput,
    IonButton,
    IonLabel
  },
  async ionViewWillEnter(){
     await this.$storage.create()
     const usuarioLogeado = await this.$storage.get('usuarioSesion')
     if(usuarioLogeado){
         console.log("Ya hay un usuario registrado")
         this.$router.push('/home')
         console.log("redireccionando a Home")
     }

  },
  data(){
     return {
         nombre: '',
         correo: '',
         password: ''
     }
  },
  methods: {
    async agregarUsuario(){
      let existeUsuario = false
      await this.$storage.create()
      let listaTutores = await this.$storage.get('tutores')
      if(listaTutores){
         for(const tutor of listaTutores){
            if(this.correo == tutor.correo){
              existeUsuario = true
              console.log(`Ya existe un usuario registrado con ese correo`)
              break
            }
         }
      }else{
         listaTutores = []
      }

      if(!existeUsuario){
         //Creamos el usuario
         listaTutores.push({correo:this.correo, nombre:this.nombre, password: this.password})
         await this.$storage.set('tutores', listaTutores)
         console.log("Usuario agregado con exito")
         // Redireccionar a Login
         this.$router.push('/login')
      }
    }
  }
});
</script>

<style scoped>
ion-content{
   --background: url(/assets/images/background.jpg) 0 0/100% 100%;
}
ion-item{
   --background: transparent;
   --color: var(--ion-color-light);
}
</style>
