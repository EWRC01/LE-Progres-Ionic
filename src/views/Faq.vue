<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>FAQs</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-buttons :collapse="true" slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>FAQs</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="containew">
        <ion-grid>
          <ion-row>
            <ion-col>
              <h1>FAQ o preguntas frecuentes</h1>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-margin-top">
                <h3> Q: ¿Cómo inicio sesión?</h3>
                <p>R: Para poder iniciar sesión tenemos que haber creado una cuenta previamente, luego de tenerla, digitaremos nuestro usuario, y la contraseña.</p><img src="assets/images/docs/imagen1.png">
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-margin-top">
                <h3>Q: ¿Cómo me puedo registrar?</h3>
                <p>R: Al momento de iniciar la aplicación se presentará con la página de registrarse, solamente se le pedirán un correo válido, su nombre y una contraseña. Una vez ingresados esos datos, y luego de la validación, se le redirigirá hacia la página de inicio de sesión en donde usted tendrá que ingresar los datos previamente registrados.</p><br> <img src="assets/images/docs/imagen2.png">
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-margin-top">
                <h3>Q: No recuerdo mi contraseña</h3>
                <p>Al iniciar la aplicación, se puede observar en la parte inferior de la pantalla, un botón con la opción de <i>"Olvidé Contraseña".</i></p><br> <img src="assets/images/docs/imagen3.png">
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-margin-top">
                <h3>Q: Estoy en la página de inicio ¿Ahora qué?</h3>
                <p>En la parte superir izquierda o haciendo un swipe a la derecha, se mostrará un menu con las diferentes secciones que tiene la aplicación.</p><br> <img src="assets/images/docs/imagen4_new.png">
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, 
IonToolbar, IonMenuButton, IonButtons, IonGrid, IonRow, IonCol,
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
    IonButtons,
    IonGrid,
    IonCol,
    IonRow
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
#container > div{
   margin-bottom: 35px;
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
