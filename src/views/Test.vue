<template>
<ion-page>
<ion-content>
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
   <ion-col>
      <ion-button @click="test">Presioname</ion-button>
   </ion-col>
  </ion-row>
</ion-grid>
</ion-content>
</ion-page>
</template>

<script>
import { IonCol, IonGrid, IonRow, IonPage, IonContent, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonPage,
    IonContent,
    IonButton
  },
   methods: {
      async test(){
         await this.$storage.create()
         //await this.$storage.remove('usuarioSesion')
         await this.$storage.clear()
      },

       /*const datos = [
        {correo:'abc@gmail.com', nombre:'maria', password:'1235'},
        {correo:'jose@gmail.com', nombre:'nose', password:'jose123'},
        {correo:'naty@gmail.com', nombre:'natalia', password:'naty123'},
        {correo:'elias@gmail.com', nombre:'elias', password:'elias123'},
        {correo:'jessy@gmail.com', nombre:'jessy', password:'jessy123'},
        {correo:'nestor@gmail.com', nombre:'nestor', password:'nestor123'}
       ]*/
   }
});
</script>

<style scoped>
</style>
