<template>
<ion-page>
<ion-header :translucent="true">
<ion-toolbar>
    <ion-title size="">Iniciar Sesión</ion-title>
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
             <ion-input v-model="password" type="password" placeholder="Escriba su contraseña"></ion-input>
          </ion-item>
       </ion-col>
     </ion-row>
     <ion-row>
      <ion-col class="ion-margin-top ion-margin-bottom">
         <ion-button @click="verificar" size="large" expand="block" color="primary">
            <ion-text color="dark">Iniciar Sesión</ion-text> 
         </ion-button>
      </ion-col>
     </ion-row>
     <ion-row>
      <ion-col class="ion-text-center ion-margin-top">
         <ion-button color="light">
            <ion-text color="dark">Olvidé Contraseña</ion-text> 
         </ion-button>
         <ion-button router-link="/registrarse" color="light">
            <ion-text color="dark"> Registrarse</ion-text> 
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
  name: 'Login',
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
  data(){
     return {
         nombre: '',
         correo: '',
         password: ''
     }
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
  methods: {
    async verificar(){
       /*const datos = [
        {correo:'abc@gmail.com', nombre:'maria', password:'1235'},
        {correo:'jose@gmail.com', nombre:'nose', password:'jose123'},
        {correo:'naty@gmail.com', nombre:'natalia', password:'naty123'},
        {correo:'elias@gmail.com', nombre:'elias', password:'elias123'},
        {correo:'jessy@gmail.com', nombre:'jessy', password:'jessy123'},
        {correo:'nestor@gmail.com', nombre:'nestor', password:'nestor123'}
       ]*/
      await this.$storage.create()
      const listaTutores = await this.$storage.get('tutores')
      for(const tutor of listaTutores){
         if(this.correo == tutor.correo && this.password == tutor.password){
           this.$storage.set('usuarioSesion', {...tutor, loginFecha: new Date().toString()})
           console.log(`Usuario encontrado ${this.correo}`)
           break
         }
      }

      if(this.$storage.get('usuarioSesion')){
         this.$router.push('/home')
      }else{
         console.log(`No se encontró ningún usuario con el correo especificado`)
      }
      //await this.$storage.set('tutores', [{nombre:'Maria', correo:'hola@hotmail.com', password:'asdlkj'}]);
      //const llaves = await this.$storage.get('tutores')
      //console.log(llaves)
      //Verificar que exista usuario
      //console.log("Entrando a verificar function")
      //console.log(this.nombre, this.password, this.correo)
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
