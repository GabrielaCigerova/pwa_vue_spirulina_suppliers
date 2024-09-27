<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSpirulina from "@/components/AboutSpirulina.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, AboutSpirulina},
  data() {
    return {
      isComponentVisible: false,
    }
  },
  mounted () {
    AOS.init({
      offset: 120,
      duration:1200,
      easing: 'ease-in-out',
    }),
        window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =  document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 100) {
        this.isComponentVisible = true;
      }
    },
  },
}
</script>

<template>
  <div class="header">
    <h1 id="superTitle">Your Global Source for Premium Spirulina</h1>
    <h3 id="subtitle">Discover the finest spirulina from around the world, bringing health and vitality to your daily life.</h3>
  </div>

  <div class="content" data-aos="fade-up">
    <div class="text-content" >
  <h1>Welcome to the Spirulicious ✨</h1>
  <p>where algae meets attitude! We’re passionate about bringing you the purest, most powerful spirulina to fuel your body and boost your well-being. Packed with nutrients and bursting with energy, our spirulina products are designed to help you thrive. Whether you're blending it into smoothies, sprinkling it on salads, or adding it to your daily routine, Spirulicious is your go-to for deliciously healthy living. Dive into the green goodness today and feel the difference!</p>
      <img  src="@/assets/spiruline-heart.png" alt="spiruline tablets in a heart shape" style="height: 150px">
    </div>
    </div>

  <div class="info">
    <div class="text-content" data-aos="fade-up">
    <h3>What is spirulina?</h3>
    <p> Spirulina is a nutrient-rich blue-green algae known for its high protein content and various health benefits. Often considered a superfood, it is packed with vitamins, minerals, antioxidants, and essential fatty acids. Spirulina supports immune function, boosts energy levels, and promotes overall well-being. Its rich chlorophyll content also aids in detoxification and supports digestive health. Typically available in powder or tablet form, spirulina can be easily incorporated into smoothies, salads, and other dishes, making it a popular choice for health-conscious individuals.</p>
    </div>
  </div>
    <div class="imagesGallery" >
      <img data-aos="slide-up" src="https://cdn.bioalaune.com/img/article/thumb/900x500/36081-nori-spiruline-chlorelle-algues-ces-nouvelles-alliees-sante.png" alt="raw spirulina in a bowl">
      <img data-aos="slide-up" src="https://previews.123rf.com/images/taurus15/taurus151101/taurus15110100023/8713433-la-texture-du-soleil-de-la-spiruline-s%C3%A9ch%C3%A9-flocons-produit.jpg" alt="dry flakes of spiruline">
      <img data-aos="slide-up" src="https://ileauxepices.com/blog/wp-content/uploads/2019/01/smoothie-spiruline-epinard.jpg" alt="two smoothie-spiruline-epinard">
    </div>
<div class="learnMore" data-aos="fade-up">
  <h3>Learn more</h3>
  <img src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif" alt="gray arrow">
</div>

  <AboutSpirulina v-if="isComponentVisible" />


</template>

<style scoped>

.header {
  height: 100vh;
  background-image: url("@/assets/powder.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #1b4947;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

#superTitle {
  margin-top: 0;
  margin-bottom: 1vh;
  font-size: 5rem;
  color: #cccccc;
}

#subtitle {
  margin-top: 0;
  font-size: 2rem;
  color: #cccccc;
}

.content, .info {
  margin: 100px;
  margin-left: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  line-height: 3.5vh;
}

.content img {
  margin-top: 4vh;
  height: 150px;
}

.text-content h1 {
  font-size: 5rem;
  color: #1b4947;
  text-shadow: 0 0 5px rgb(95, 158, 160);
}

.text-content p {
  font-size: 2rem;
}

.text-content h3 {
  text-align: right;
  font-size: 4rem;
  color: #1b4947;
  text-shadow: 0 0 5px rgb(95, 158, 160);
}

.imagesGallery {
  display: flex;
  justify-content: space-between;
  margin: 0 4vh 5vh 4vh;
}

.imagesGallery img {
  width: 50vh;
  height: auto;
  object-fit: cover;
  max-height: 200px;
}

.learnMore {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5vh 0 35vh 0;
  color: #9c9b98;
}

.learnMore img {
  margin-top: 10px;
  width: 10vh;
}

.learnMore h3 {
  font-size: 2vh;
}

@media (max-width: 768px) {
  #superTitle {
    font-size: 3.5rem;
  }

  #subtitle {
    font-size: 1.8rem;
  }

  .content, .info {
    margin: 20px;
    flex-direction: column;
    align-items: center;
  }

  .content img {
    height: 120px;
  }

  .text-content h1 {
    font-size: 3.5rem;
  }

  .text-content h3 {
    font-size: 3rem;
    text-align: center;
  }

  .imagesGallery {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  .imagesGallery img {
    width: 80%;
    max-height: 150px;
  }

  .learnMore {
    margin-bottom: 15vh;
  }

  .learnMore img {
    width: 8vh;
  }

  .header {
    height: 90vh;
  }
}

@media (max-width: 480px) {
  #superTitle {
    font-size: 2rem;
  }

  #subtitle {
    font-size: 1rem;
  }

  .content img {
    height: 90px;
  }

  .text-content h1 {
    font-size: 2rem;
  }

  .text-content h3 {
    font-size: 1.5rem;
  }

  .text-content p {
    font-size: 1rem;
  }

  .learnMore {
    margin: 10vh 20px 0 20px;
  }

  .learnMore img {
    width: 7vh;
  }

  .header {
    height: 80vh;
  }
}
</style>