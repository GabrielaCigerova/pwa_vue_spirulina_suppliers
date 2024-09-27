<script>
import axios from 'axios';
import Supplier from './Supplier.vue'
import { ref } from 'vue';
import { useScroll } from '@vueuse/core'
import AOS from 'aos';
import 'aos/dist/aos.css';

const el = ref(null);
const scroll = useScroll(el);

export default {
  components: {
    Supplier,
  },
  data() {
    return {
      suppliers: [],
      allSuppliers: [],
      loading: false,
      error: null,
      moreToLoad : true,
      currentPage : 1
    };
  },
  methods: {
    getSuppliers() {
      this.loading = true;
      axios.get(`https://suppliers.depembroke.fr/api/suppliers?page=${this.currentPage}`)
          .then((response) => {
            const fetchedSuppliers = response.data.data.map((supplier) => ({
              id: supplier.id,
              name: supplier.name,
              status: supplier.status,
              checkedAt: supplier.checkedAt,
            }));
            this.suppliers = fetchedSuppliers;
            this.allSuppliers = fetchedSuppliers;
          })
          .catch((error) => {
            console.log('Error loading suppliers data', error);
          });
    },
    getMoreSuppliers() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 350;
        if (bottomOfWindow && this.moreToLoad) {
          this.currentPage += 1;
          axios.get(`https://suppliers.depembroke.fr/api/suppliers?page=${this.currentPage}`)
              .then((response) => {
                if (response.data.data.length > 0){
                const moreSuppliers = response.data.data.map((supplier) => ({
                  id: supplier.id,
                  name: supplier.name,
                  status: supplier.status,
                  checkedAt: supplier.checkedAt,
                }));
                this.suppliers = [...this.suppliers, ...moreSuppliers];
                this.allSuppliers = this.suppliers;
                } else {
                  this.moreToLoad = false;
                }
              })
              .catch((error) => {
                console.log('Error loading suppliers data', error);
              });
        }
      }
    },
    filterSuppliers(filterType) {
      if (filterType === 'available') {
        this.suppliers = this.allSuppliers.filter(supplier => supplier.status === 1);
      } else if (filterType === 'unavailable') {
        this.suppliers = this.allSuppliers.filter(supplier => supplier.status === 0);
      } else {
        this.suppliers = [...this.allSuppliers];
      }
    },
  },
  beforeMount() {
    this.getSuppliers();
  },
  mounted() {
    AOS.init({
      offset: 120,
      duration:1200,
      easing: 'ease-in-out',
    }),
    this.getMoreSuppliers();
  }
}
</script>

<template>

  <div class="supplierListContainer">
  <h1 id="title">Our trusted suppliers</h1>
    <p>At Spirulicious, we believe in providing the highest quality spirulina sourced from the best suppliers around the globe. Our partners are committed to sustainable farming practices and rigorous quality standards, ensuring that every batch of spirulina meets our exceptional criteria. Explore our range of trusted suppliers who share our passion for health, nutrition, and environmental responsibility. Together, we bring you the finest spirulina to enhance your wellness journey!</p>
    <div class="filter-bar">
      <h4 style="color: #1b4947;">Filter Suppliers</h4>
      <div class="radio-group">
        <label>
          <input type="radio" value="all" name="supplier-filter" @change="filterSuppliers('all')" />
          All
        </label>
        <label>
          <input type="radio" value="available" name="supplier-filter" @change="filterSuppliers('available')" />
          Available
        </label>
        <label>
          <input type="radio" value="not-available" name="supplier-filter" @change="filterSuppliers('unavailable')"/>
          Non-Available
        </label>
      </div>
    </div>
  <div class="listContainer" ref="el" data-aos="fade-up">
  <supplier v-for="obj in suppliers"
            :name="obj.name"
            :status="obj.status"
            :checkedAt="obj.checkedAt"
  />
  </div>
  </div>

</template>

<style scoped>
.filter-bar {
  padding: 16px;
}

.radio-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.radio-group label {
  margin-bottom: 8px;
}

.supplierListContainer {
  margin: 15vh 15vh 15vh 15vh;
}

.supplierListContainer p {
  font-size: 1.8rem;
}

.filter-bar label {
  font-size: 1.8rem;
}

.filter-bar h4 {
  font-size: 1.8rem;
}

#title {
  text-align: center;
  color: #1b4947;
  font-size: 2.5rem;
}

.supplierListContainer h4 {
  text-align: center;
}

.listContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 35px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 5vh 10vh 20vh 10vh;
}

@media (max-width: 768px) {

  .supplierListContainer {
    margin: 15vh 5vh 10vh 5vh;
  }

  .supplierListContainer p,
  .filter-bar label,
  .filter-bar h4 {
    font-size: 1.2rem;
  }

  #title {
    font-size: 2rem;
  }

  .listContainer {
    grid-template-columns: repeat(2, 1fr);
    margin: 5vh 5vh 15vh 5vh;
  }

  .radio-group {
    gap: 10px;
  }
  @media (max-width: 480px) {
    .supplierListContainer {
      margin: 10vh 2vh 5vh 2vh;
    }

    .supplierListContainer p,
    .filter-bar label,
    .filter-bar h4 {
      font-size: 0.8rem;
    }

    #title {
      font-size: 1.8rem;
    }

    .listContainer {
      grid-template-columns: repeat(2, 1fr);
      margin: 5vh 2vh 10vh 2vh;
      gap: 10px;
    }

    .radio-group {
      gap: 5px;
    }
  }
}


</style>
