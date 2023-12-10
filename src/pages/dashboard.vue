<template>
  <div class="bg-app">
    <div class="Starting">
      <h3 class="title">{{ greeting }} <ButtonComponent/> </h3>
    </div>
    <div class="card-section">
      <div class="card-container">
        <div class="card">
          <div class="card-title">
            <div class="icon-circle">
              <h2 class="icon-position"><i class="bx bx-user"></i></h2>
            </div>
          </div>
          <div class="card-content">
            <p class="card-topic">Total Customers</p>
            <h2>5,425</h2>
            <div class="presentage-margin">
              <i class="bx bx-up-arrow-alt inline-text-presentatge-green"></i>
              <p class="inline-text-presentatge-green" >18% </p>
              <p class="inline-text-presentatge">this month</p>
            </div>
          </div>
                  <div class="vertical-line"></div>
        </div>
        <!-- Add a vertical line between cards -->


        <div class="card">
          <div class="card-title">
            <div class="icon-circle">
              <h2 class="icon-position"><i class="bx bx-user-check"></i></h2>
            </div>
          </div>
          <div class="card-content">
            <p class="card-topic">Members</p>
            <h2>1,452</h2>
            <div><i class="bx bx-down-arrow-alt inline-text-presentatge-red"></i>
              <p class="inline-text-presentatge-red">1% </p>
                     <p class="inline-text-presentatge">this month</p>
            </div>
          </div>
                  <div class="vertical-line"></div>
        </div>


        <div class="card">
          <div class="card-title">
            <div class="icon-circle">
              <h2 class="icon-position"><i class="bx bx-desktop"></i></h2>
            </div>
          </div>
          <div class="card-content">
            <p class="card-topic">Active Now</p>
            <h2>189</h2>
            <div>
    <Avater/>
  </div>
            <div><i></i>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent.vue"
import Avater from "../components/Avater.vue"
export default {
  components: { ButtonComponent, Avater },
  methods: {
    showAlert() {
      alert('Button Clicked!');
    },
  },
  data() {
    return {
      greeting: 'Hello Evano 👋🏻,',
    };
  },
};
</script>



<style scoped>
.inline-text-presentatge-green {
  display: inline;
  color: green;
}
.inline-text-presentatge-red {
  display: inline;
  color: red;
}

.presentage-margin{
  margin-top: 5px
}
.title {
  text-align: left;
  margin-left: 60px;
  padding-top: 30px;
}

.bg-app {
  background-color: #daeef8;
}

.card-section {
  display: block;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 60px;
}
.card-container {
  display: flex;
  width: 100%;
}

.card {
  /* Optional: Adjust card styles as needed */
  flex: 1;

}

.vertical-line {
  /* Optional: Adjust vertical line styles as needed */
  border-left: 1px solid #ccc;
  height: 100px; /* Adjust as needed */
  margin-top: 50px
}


.card {
  background-color: #fff;
  padding: 20px;
  display: flex;
}

.card-title {
  flex: 1;
}

.card-content {
  flex: 1;
}

.vertical-line {
  width: 1px;
  background-color: #ddd;
  margin: 0 10px;
}
.icon-circle {
  display: inline-block;
  width: 80px; /* Adjust the size of the circle as needed */
  height: 80px; /* Adjust the size of the circle as needed */
  background-color: #daf8e1; /* Green color */
  border-radius: 50%;
  text-align: center;
  line-height: 40px; /* Adjust the line height to center the icon */
  margin-left: 20px;
}

.icon-circle i {
  color: #fff; /* Set the color of the icon within the circle */
}
.con-position{
  margin-right: 10px;
}
.icon-position i {
  font-size: 50px;
  color: #4CAF50; /* Set the color of the icon within the circle */
  margin-top: 18px
}
.card-topic{
  font-size: 15px;
  color: #a3a8a2;
}
.custom-icon {
  color: #4CAF50;
  font-size: 35px;
  display: inline-block;
  width: 40px; /* Adjust the size of the circle as needed */
  height: 80px; /* Adjust the size of the circle as needed */
  background-color: #daf8e1; /* Green color */
  border-radius: 50%;
  text-align: center;
  line-height: 35px; /* Adjust the line height to center the icon */
  margin-left: 80%; /* Use percentage for responsiveness */
  border: 2px solid #4CAF50;
}

.inline-text-presentatge{
  display: inline;
}
/* Media query for small screens */
@media only screen and (max-width: 600px) {
  .title {
    margin-left: 5%;
  }

  .card-section {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
