<!-- ButtonComponent.vue -->
<template>
  <div>
    <button class="bx bx-plus custom-icon" @click="showAddCustomerForm"></button>
    
    <!-- Modal for adding customer details -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <form @submit.prevent="addCustomer">
         <h3 class="form-topic">Add New Customer</h3>
         <div class="inline-fields-first">
          <v-text-field label="Customer Name" variant="underlined" class="text-style" :rules="[v => !!v || 'Customer Name is required']"></v-text-field>
          <v-text-field label="Company" variant="underlined" class="text-style" :rules="[v => !!v || 'Company Name is required']"></v-text-field>
          <v-text-field label="Phone Number" variant="underlined" class="text-style" :rules="[
      v => !!v || 'Phone Number is required',
      v => (v && v.length === 10) || 'Phone Number must be 10 digits'
    ]"></v-text-field>
          <v-text-field label="Email" variant="underlined" class="text-style" :rules="[
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Enter a valid email address'
    ]"></v-text-field>
          <v-text-field label="Contry" variant="underlined" class="text-style" :rules="[v => !!v || 'Contry is required']"></v-text-field>
         </div>
          <h5 class="address-details">Addres Details</h5>
           <v-text-field label="Address 1" variant="underlined" class="text-style"></v-text-field>
         <div class="inline-fields">
    <v-text-field label="Number" variant="underlined" class="text-style-1" :rules="[v => !!v || 'Need to add at least one company']"></v-text-field>
    <v-text-field label="Street" variant="underlined" class="text-style-2" ></v-text-field>
  </div>
      <v-text-field label="City, Street" variant="underlined" class="text-style"></v-text-field>
      <v-btn v-if="!showHello" @click="showHelloText" variant="outlined" class="addbutton">
  ADD
</v-btn> 
<div v-if="showHello" class="hello-text">
<v-btn @click="deleteFields"  variant="outlined" class="deletebutton" v-if="showAddress">
  Delete
</v-btn>

<v-text-field label="Address 2" variant="underlined" class="text-style" v-if="showAddress"></v-text-field>
         <div class="inline-fields">
    <v-text-field label="Number" variant="underlined" class="text-style-1" v-if="showAddress"></v-text-field>
    <v-text-field label="Street" variant="underlined" class="text-style-2" v-if="showAddress"></v-text-field>
  </div>
      <v-text-field label="City, Street" variant="underlined" class="text-style" v-if="showAddress"></v-text-field>
      <v-btn  variant="outlined" class="addbutton" v-if="showAddress">
  ADD
</v-btn>


</div>
<br>
 <v-btn  variant="outlined" class="Submit" >
 SUBMIT
</v-btn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      isModalOpen: false,
      customerName: '',
      customerEmail: '',
     showHello: false,
     showAddress: true,
    };
  },
  methods: {
    showAddCustomerForm() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      // Reset form fields when the modal is closed
      this.customerName = '';
      this.customerEmail = '';
      // Reset other fields as needed
    },
     showHelloText() {
      this.showHello = !this.showHello;
    },
    deleteFields() {
      this.showAddress = false; // Set showAddress to false to hide the address fields
    },
    addCustomer() {
      // Perform actions with the entered customer details
      const customerDetails = {
        name: this.customerName,
        email: this.customerEmail,
        // Add more fields as needed
      };

      // Process the customer details or update your state
      console.log("Customer Details:", customerDetails);

      // Close the modal after processing
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.Submit{
   color:#daf8e1;
  margin-left: 30px;
  width: 80%;
  margin-top: 20px;
  background-color: #4CAF50;
   border-radius: 10px;
  
}
.deletebutton{
    color:#4CAF50;
  margin-left: 70%;
  width:30px;
}
.addbutton{
  color:#4CAF50;
  margin-left: 30px;
  width:30px;
}
.inline-fields {
  display: flex;
  gap: 6px; /* Adjust the gap as needed */
   margin-left: 30px;
}

.text-style-1 {
  width: 10px

}

.text-style-2{
  width: 20px;
   margin-left: 30px;
   margin-right: 50px
}

.address-details{
  margin-left: 30px
}
.text-style{
  width: 80%;
  margin-left: 30px;


}
.custom-icon {
  color: #4CAF50;
  font-size: 25px;
  display: inline-block;
  width: 30px; /* Adjust the size of the circle as needed */
  height: 30px; /* Adjust the size of the circle as needed */
  background-color: #daf8e1; /* Green color */
  border-radius: 50%;
  text-align: center;
  line-height: 20px; /* Adjust the line height to center the icon */
  margin-left: 93%; /* Use percentage for responsiveness */
  border: 2px solid #4CAF50;
}
.form-topic{
  padding-left: 25%;
  padding-bottom: 5%;
  gap: 2px;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin-left: 35%;
  margin-right: 50%;
  margin-top: 5%;
  /* margin: 15% auto; */
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
 border-radius: 10px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
