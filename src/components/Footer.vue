<script>
export default {
  data(){
    return {}
  }
}
</script>

<template>

  <footer>
  <div>
    <img src="@/assets/logo-white.png" alt="logo spirulicious">
  </div>
    <div class="footer-columns">
  <div>
    <ul>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Terms of service</a></li>
      <li><a href="#">FAQ</a></li>
    </ul>
    </div>
  <div>
    <ul>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Shipping & returns</a></li>
      <li><a href="#">Partners</a></li>
    </ul>
  </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 350px;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer img {
  width: 150px;
  margin-bottom: 20px;
}

footer .footer-columns {
  display: flex;
  justify-content: center;
  gap: 10vh;
  width: 100%;
}

footer ul {
  list-style: none;
  padding: 0;
  margin: 0 20px;
}

footer li {
  margin-bottom: 10px;
}


footer ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
}

footer ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  footer {
    height: 300px;
    background-color: #1a1a1a;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  footer img {
    width: 100px;
    margin-bottom: 10px;
    margin-top: 0;
  }

  footer .footer-columns {
    flex-direction: row;
    gap: 3vh;
  }

  footer ul li a {
    font-size: 13px;
  }
}

@media (max-width: 480px) {

  footer {
    height: 300px;
    background-color: #1a1a1a;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  footer img {
    margin-top: 20px;
    width: 80px;
  }

  footer .footer-columns {
    flex-direction: row;
    gap: 2vh;
  }

  footer ul {
    margin: 0 10px;
  }

  footer ul li a {
    font-size: 12px;
  }

  footer ul li {
    margin-bottom: 5px;
  }
}
</style>