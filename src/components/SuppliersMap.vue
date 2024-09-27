<script>
import "leaflet/dist/leaflet.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 12,
      center: [46.5322, 2.9482],
      bounds: null,
      suppliers : [],
      currentPage : 1,
      supplierNamePopup : null,
    };
  },
  created() {
    this.fetchAllSuppliers();
    this.getCenterMapPosition();
  },
mounted() {
  AOS.init({
    offset: 120,
    duration:1200,
    easing: 'ease-in-out',
  })
},
  methods: {
    fetchAllSuppliers() {
      axios.get(`https://suppliers.depembroke.fr/api/suppliers?page=1`)
          .then((response) => {
            const suppliersPage1 = response.data.data.map((supplier) => ({
              id: supplier.id,
              name : supplier.name,
              latitude: supplier.latitude,
              longitude: supplier.longitude,
            }));
            return axios.get(`https://suppliers.depembroke.fr/api/suppliers?page=2`)
                .then((response) => {
                  const suppliersPage2 = response.data.data.map((supplier) => ({
                    id: supplier.id,
                    name : supplier.name,
                    latitude: supplier.latitude,
                    longitude: supplier.longitude,
                  }));
                  this.suppliers = [...suppliersPage1, ...suppliersPage2];
                });
          })
          .catch((error) => {
            console.log('Error loading suppliers data', error);
          });
    },
    getCenterMapPosition(){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              this.center = [position.coords.latitude, position.coords.longitude];
            },
            (error) => {
              console.error("Error getting location:", error);
              this.center = [46.5322, 2.9482];
            }
        );
      } else {
        this.center = [46.5322, 2.9482];
      }
    },
    showPopup(name){
      this.supplierNamePopup = name;
    }
  },
};
</script>

<template>
  <div class="map-container">
    <div class="text-container">
      <h3 class="title">Suppliers Map</h3>
      <p class="centered-paragraph">Welcome to our Suppliers Map! Here, you can easily locate all our trusted suppliers in your area. Our interactive map provides a visual representation of where each supplier is located, making it convenient for you to find the nearest options.</p>
      <div class="columns">
        <div class="column">
          <h4>Explore our network</h4>
          <ul>
            <li><b>Interactive Mapping</b>: Zoom in and out to explore various regions and discover suppliers based on your preferences.</li>
            <li><b>Geolocation Access</b>: Allow your browser to access your geolocation, making it easier to find suppliers closest to you.</li>
          </ul>
        </div>
        <div class="column">
          <h4>How to use the map</h4>
          <ul>
            <li><b>Zoom In and Out</b>: Use your mouse scroll wheel or pinch gestures on touch devices to zoom in and out of the map for a closer look at different areas.</li>
            <li><b>View Markers</b>: As you explore the map, you’ll see markers indicating supplier locations.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="map" data-aos="fade-right">
      <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <div v-for="marker in suppliers" :key="marker.id">
          <LMarker :lat-lng="[marker.latitude, marker.longitude]"
          @click="showPopup(marker.name)">
            <l-popup class="popup">{{marker.name}}</l-popup>
          </LMarker>
        </div>
      </LMap>
    </div>
  </div>
</template>

<style scoped>

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #1b4947;
}

.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 100px;
  height: 100%;
}

.map-container p, li {
  font-size: 1.5rem;
}

.map-container h4 {
  color: #1b4947;
  font-size: 1.5rem;
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  height: 50vh;
  width: 150vh;
}

.text-container {
  text-align: center;
  margin-bottom: 20px;
}

.centered-paragraph {
  margin: 0 auto;
  max-width: 80%;
}

.columns {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 5vh 10vh auto 10vh;
}

.column {
  flex: 1;
  text-align: left;
}

.popup {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .map {
    width: 70vh;
    height: 80vh;
    margin: 0 3vw;
  }

  .map-container p, li {
    font-size: 1.2rem;
  }

  .map-container h4 {
    font-size: 1.3rem;
  }

  .columns {
    flex-direction: column;
    margin: 5vh 5vw;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .map {
    width: 35vh;
    height: 60vh;
    margin: 0 2vw;
  }

  .map-container p, li {
    font-size: 1rem;
  }

  .map-container h4 {
    font-size: 1.1rem;
  }

  .columns {
    flex-direction: column;
    gap: 15px;
    margin: 5vh 5vw; /* Further reduced margin */
  }
}

</style>