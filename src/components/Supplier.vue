<script>
import { format } from 'timeago.js';
export default {
  methods: {format},
  props: {
  name : String,
  status : Number,
  checkedAt : String
}
}
</script>

<template>

  <div class="supplierContainer">
    <h1>{{ name }}</h1>
    <h3 v-if="status === 1" style="color: forestgreen">Available ✅</h3>
    <h3 v-if="status === 0" style="color: darkred">Not available ❌</h3>
    <p>Last verified {{ format(checkedAt) }}</p>
    <img src="@/assets/product.png" alt="product supplier certified" width="100vh">
  </div>

</template>

<style scoped>

.supplierContainer {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 270px;
}

.supplierContainer h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.supplierContainer h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.supplierContainer p {
  font-size: 1.2rem;
  color: gray;
}
@media (max-width: 768px) {
  .supplierContainer {
    padding: 15px;
  }

  .supplierContainer h1 {
    font-size: 1rem;
  }

  .supplierContainer h3 {
    font-size: 0.9rem;
  }

  .supplierContainer p {
    font-size: 0.8rem;
  }
}


@media (max-width: 480px) {
  .supplierContainer {
    padding: 10px;
    width: 150px;
  }

  .supplierContainer h1 {
    font-size: 0.9rem;
  }

  .supplierContainer h3 {
    font-size: 0.8rem;
  }

  .supplierContainer p {
    font-size: 0.7rem;
  }

}
</style>