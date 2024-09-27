<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  data() {
    return {}
  },
  mounted(){
    AOS.init({
      offset: 120,
      duration:1200,
      easing: 'ease-in-out',
    })
  }
}
</script>

<template>
  <div class="about-container" data-aos="zoom-in">
  <div class="content-container">
    <div class="text-section">
      <h1>From aquatic farm to your home...</h1>
      <p>
        Spirulina is a type of blue-green algae, specifically a cyanobacterium, that is cultivated from lakes or farmed in ponds. It is a dried biomass of Arthrospira platensis, A. fusiformis, and A. maxima species. Spirulina is used as a dietary supplement or whole food, and also as a feed supplement in the aquaculture, aquarium, and poultry industries.
      </p>
    </div>
    <div class="video-wrapper">
      <iframe
          class="video-section"
          src="https://www.youtube.com/embed/UfG8Cbpw2Po?si=gOtjgnqpWx8kTmzT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
      ></iframe>
      <img src="@/assets/image.png" alt="image with text">
    </div>
  </div>
    <div class="fun-fact-card" >
      <h3>Fun fact about spirulina!</h3>
      <p>
        Interestingly, NASA proposed spirulina as a potential food source for astronauts due to its high nutritional value and ability to grow in controlled environments, such as space stations.
      </p>
      <img src="@/assets/astro.png" alt="astronaut">
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10vh;
  width: 100%;
  max-width: 1200px;
}

.text-section {
  flex: 1;
}

.text-section p {
  font-size: 1.5rem;
}

.text-section h1 {
  color: #1b4947;
}

.video-wrapper {
  flex: 1;
  position: relative;
}

.video-wrapper iframe {
  width: 650px;
  height: 400px;
}

.video-wrapper img {
  height: 30vh;
  position: absolute;
  top: -100%;
  right: -20%;
}

.fun-fact-card {
  position: relative;
  background-color: #1b4947;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20vh;
  margin-bottom: 10vh;
  width: 100%;
  max-width: 750px;
}

.fun-fact-card h3 {
  font-size: 2rem;
}

.fun-fact-card p {
  font-size: 1.5rem;
}

.fun-fact-card img {
  position: absolute;
  z-index: -5;
  left: -35%;
  top: -80%;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    width: 100%;
    max-width: 400px;
  }

  .text-section {
    flex: 1;
  }

  .video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
  }

  .video-wrapper iframe {
    width: 100%;
    height: auto;
  }

  .video-wrapper img {
    height: 20vh;
    top: -40%;
    right: 0;
  }

  .fun-fact-card {
    margin-top: 17.5vh;
    margin-bottom: 5vh;
    margin-right: 10vh;
    margin-left: 10vh;
    padding: 15px;
  }

  .text-section p {
    font-size: 1rem;
  }

  .text-section h1 {
    color: #1b4947;
  }

  .fun-fact-card h3 {
    font-size: 1.2rem;
  }

  .fun-fact-card p {
    font-size: 1rem;
  }

  .fun-fact-card img {
    position: absolute;
    z-index: -5;
    left: -35%;
    top: -120%;
  }
}

@media (max-width: 480px) {
  .text-section h1 {
    font-size: 1.5rem;
  }

  .text-section {
    width: 80%;
  }

  .fun-fact-card {
    padding: 10px;
    margin-right: 5vh;
    margin-left: 5vh;
    margin-top: 20vh;
    width: 80%;
  }

  .fun-fact-card img {
    position: absolute;
    height: 40vh;
    z-index: -5;
    left: 2vh;
    top: -60%;
  }

  .video-wrapper img {
    height: 15vh;
    top: -50%;
    right: -10%;
  }

  .video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
  }

  .video-wrapper iframe {
    width: 80%;
    height: auto;
  }

  .text-section p {
    font-size: 1rem;
  }

  .text-section h1 {
    color: #1b4947;
    font-size: 1.2rem;
  }

  .fun-fact-card h3 {
    font-size: 1.2rem;
  }

  .fun-fact-card p {
    font-size: 1rem;
  }

  .fun-fact-card img {
    position: absolute;
    z-index: -5;
    left: -10%;
    top: -80%;
  }
}



</style>