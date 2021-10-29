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
IonInput, IonButton, IonLabel, alertController} from '@ionic/vue';
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

      const alertaVacio = await alertController
        .create({
          header: 'Alerta',
          subHeader: 'Ingreso de datos',
          message: 'Debe ingresar datos en el correo o en la contraseña',
          buttons: ['OK'],
        });
      const alertaUsuarioIncorrecto = await alertController
        .create({
          header: 'Alerta',
          subHeader: 'Usuario no valido',
          message: 'El correo o la contraseña especificados son invalidos',
          buttons: ['OK'],
        });
       /*const datos = [
        {correo:'abc@gmail.com', nombre:'maria', password:'1235'},
        {correo:'jose@gmail.com', nombre:'nose', password:'jose123'},
        {correo:'naty@gmail.com', nombre:'natalia', password:'naty123'},
        {correo:'elias@gmail.com', nombre:'elias', password:'elias123'},
        {correo:'jessy@gmail.com', nombre:'jessy', password:'jessy123'},
        {correo:'nestor@gmail.com', nombre:'nestor', password:'nestor123'}
       ]*/
       if(!this.correo.trim() || !this.password.trim()){
          console.log("No puede dejar datos en blanco")
          await alertaVacio.present()
          return
       }

      await this.$storage.create()
      let listaTutores = await this.$storage.get('tutores')
      if(!listaTutores)
         listaTutores = []
      for(const tutor of listaTutores){
         if(this.correo == tutor.correo && this.password == tutor.password){
           this.$storage.set('usuarioSesion', {...tutor, loginFecha: new Date().toString()})
           console.log(`Usuario encontrado ${this.correo}`)
           break
         }
      }
      
      //No se verifica si no existe el usuario
      if(await this.$storage.get('usuarioSesion')){
         console.log("Usuario encontrado, vamos a home")
         this.$router.push('/home')
         this.correo=''
         this.password=''
      }else{
         console.log(`No se encontró ningún usuario con el correo especificado`)
         await alertaUsuarioIncorrecto.present()
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
