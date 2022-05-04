<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Edit Register</h2>
          <form @submit.prevent="NuevosDatos">
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="City"
                v-model="datos.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Apellido"
                v-model="datos.Apellido"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control mb-2"
                placeholder="Edad"
                v-model="datos.Edad"
              />
            </div>
            <button class="btn btn-primary">Actualizar Datos</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatosRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      datos: {
        name: null,
        Apellido: null,
        Edad: null,
      },
    };
  },
  methods: {
    async getCity() {
      let cityRef = doc(DatosRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.datos.name = cityData.name;
      this.datos.Apellido = cityData.Apellido;
      this.datos.Edad = cityData.Edad;
    },
    async NuevosDatos() {
      await setDoc(this.docRef, this.datos);
      alert(
        `The register with ID of ${this.cityId} has been updated successfully!`
      );
      this.$router.push("/");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>

<style>
</style>