<script>
import SuppliersList from '@/components/SuppliersList.vue'
import SuppliersMap from "@/components/SuppliersMap.vue"
import Footer from "@/components/Footer.vue";


export default {
  name: "App",
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
  components: {
    Footer,
    SuppliersList,
    SuppliersMap
  },
}
</script>

<template>


  <nav>
    <img id="logoHeader" src="@/assets/logo-white.png" alt="white logo">

    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/suppliers">Our suppliers</RouterLink>
      <RouterLink to="/map">See the map</RouterLink>
    </div>

    <div class="burger" @click="toggleMenu()">&#9776;</div>
    <div class="nav-burger-links" v-if="isMenuActive===true">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/suppliers">Our suppliers</RouterLink>
      <RouterLink to="/map">See the map</RouterLink>
    </div>

  </nav>

    <RouterView />
    <Footer />


</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}
body, html {
  margin: 0;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  padding-top: 20px;
}

nav {
  display: flex;
  justify-content: center;
  background-color: #1b4947;
  padding: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
}

#logoHeader {
  margin-left: 20px;
  height: 60px;
}

.nav-links {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
  margin: 0 20px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: #1d5351;
  border-radius: 20px;
}

.burger {
  display: none;
}

.nav-burger-links {
  display: none;
}

@media (max-width: 768px), (max-width: 600px), (max-width: 480px) {

  nav {
    display: flex;
    justify-content: center;
    background-color: #1b4947;
    padding: 10px 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    z-index: 1000;
  }

  .burger {
    display: block;
    cursor: pointer;
    font-size: 2rem;
    color: white;
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .nav-links {
    display: none;
  }

  .nav-burger-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    width: 100%;
    background-color: #1b4947;
    z-index: 999;
  }

  .nav-burger-links a {
    text-decoration: none;
    color: #fff;
    font-size: 0.9rem;
    margin: 0 20px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  #logoHeader {
    margin-left: 20px;
    height: 40px;
  }
}

</style>

