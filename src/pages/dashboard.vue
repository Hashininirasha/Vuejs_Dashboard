<template>
  <div class="bg-app">
    <div class="Starting">
      <h3 class="title">{{ greeting }} <ButtonComponent/> </h3>
    </div>
    <div class="card-section">
      <div class="card-container">
        <div class="card section1">
          <div class="card-title">
            <div class="icon-circle">
              <h2 class="icon-position"><i class="bx bx-user"></i></h2>
            </div>
          </div>
          <div class="card-content1">
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


        <div class="card section3">
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


        <div class="card section3">
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
    <Testing/>
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
.section3{
    border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  
}
.section1 {
    border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
}
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
  flex: 1;

}

.vertical-line {
  border-left: 1px solid #ccc;
  height: 100px;
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
  width: 80px;
  height: 80px; 
  background-color: #daf8e1; 
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}

.icon-circle i {
  color: #fff; 
}
.con-position{
  margin-right: 10px;
}
.icon-position i {
  font-size: 50px;
  color: #4CAF50; 
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
  width: 40px; 
  height: 80px;
  background-color: #daf8e1; 
  border-radius: 50%;
  text-align: center;
  line-height: 35px; 
  margin-left: 80%; 
  border: 2px solid #4CAF50;
}

.inline-text-presentatge{
  display: inline;
}

@media only screen and (max-width: 600px) {
  .title {
    margin-left: 5%;
  }

  .card-section {
    margin-left: 25%;
    margin-right: 5%;
  }

  .card-container {
    flex-direction: column; 
  }
}
</style>
