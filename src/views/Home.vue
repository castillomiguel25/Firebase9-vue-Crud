<template>
  <div class="home">
    <h2>hello</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li
              v-for="city in cities"
              :key="city.id"
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              {{ city.name }}
              <span class="badge badge-primary badge-pill">
                <router-link
                  :to="{ path: `/cities/${city.id}` }"
                  class="btn btn-primary ml-2"
                  >Edit</router-link
                >
                <a href="#" class="btn btn-danger" @click="deleteUser(city.id)"
                  >Delete</a
                >
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatosRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      cities: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(DatosRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        cityData.id = city.id;
        cities.push(cityData);
      });
      console.log(cities);
      this.cities = cities;
    },
    async deleteUser(cityId) {
      let cityRef = doc(DatosRef, cityId);
      await deleteDoc(cityRef);
      alert("City deleted successully!");
      this.$router.go();
    },
  },
  created() {
    this.fetchCities();
  },
};
</script>