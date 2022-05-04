<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Registro</h2>
          <form @submit.prevent="createUser">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Apellido"
                v-model="Apellido"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Edad"
                v-model="Edad"
              />
            </div>
            <button class="btn btn-primary">Crear Usuario</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatosRef from "../firebase";
import { addDoc } from "firebase/firestore";
export default {
  data() {
    return {
      name: null,
      Apellido: null,
      Edad: null,
    };
  },
  methods: {
    async createUser() {
      console.log("Creating Document");
      const addedDoc = await addDoc(DatosRef, this.$data);
      alert("Document created successfully!");
      console.log(addedDoc);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>