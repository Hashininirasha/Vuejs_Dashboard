
<template>
  <div>
    <button class="bx bx-plus custom-icon" @click="showAddCustomerForm"></button>
    
  
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <form @submit.prevent="addCustomer">
         <h3 class="form-topic">Add New Customer</h3>
         <div class="inline-fields-first">
          <v-text-field label="Customer Name" v-model="customerName" variant="underlined" class="text-style" :rules="[v => !!v || 'Customer Name is required']"></v-text-field>
          <v-text-field label="Company" v-model="company" variant="underlined" class="text-style" :rules="[v => !!v || 'Company Name is required']"></v-text-field>
          <v-text-field label="Phone Number" v-model="phoneNumber" variant="underlined" class="text-style" :rules="[
      v => !!v || 'Phone Number is required',
      v => (v && v.length === 10) || 'Phone Number must be 10 digits'
    ]"></v-text-field>
          <v-text-field label="Email" v-model="email" variant="underlined" class="text-style" :rules="[
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Enter a valid email address'
    ]"></v-text-field>
          <v-text-field label="Country" v-model="country" variant="underlined" class="text-style" :rules="[v => !!v || 'Contry is required']"></v-text-field>
         </div>
          <h5 class="address-details">Addres Details</h5>
           <v-text-field label="Address 1" variant="underlined" class="text-style"></v-text-field>
         <div class="inline-fields">
    <v-text-field label="Number" v-model="number1" variant="underlined" class="text-style-1" :rules="[v => !!v || 'Need to add at least one company']"></v-text-field>
    <v-text-field label="Street" v-model="street1" variant="underlined" class="text-style-2" ></v-text-field>
  </div>
      <v-text-field label="City, Street" v-model="city1" variant="underlined" class="text-style"></v-text-field>
      <v-btn v-if="!showHello" @click="showHelloText" variant="outlined" class="addbutton">
  ADD
</v-btn> 
<div v-if="showHello" class="hello-text">
<v-btn @click="deleteFields"  variant="outlined" class="deletebutton" v-if="showAddress">
  Delete
</v-btn>

<v-text-field label="Address 2" variant="underlined" class="text-style" v-if="showAddress"></v-text-field>
         <div class="inline-fields">
    <v-text-field label="Number" variant="underlined" v-model="number2"  class="text-style-1" v-if="showAddress"></v-text-field>
    <v-text-field label="Street" variant="underlined" v-model="street2" class="text-style-2" v-if="showAddress"></v-text-field>
  </div>
      <v-text-field label="City, Street" variant="underlined" v-model="city2" class="text-style" v-if="showAddress"></v-text-field>
      
      <v-btn  variant="outlined" class="addbutton" v-if="showAddress">
  ADD
</v-btn>


</div>
<br>
 <v-btn  @click="addCustomer" variant="outlined" class="Submit" >
 SUBMIT
</v-btn>
        </form>
      </div>
    </div>
     <v-snackbar v-model="isSnackbarVisible" color="success" class="alert-box">
      Successfully added!
      <v-btn text @click="isSnackbarVisible = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      isModalOpen: false,
      customerName: '',
      company: '',
      phoneNumber: '',
      email: '',
      country: '',
      number1: '',
      street1: '',
      city1: '',
      number2: '',
      street2: '',
      city2: '',
      status:'Active',
     showHello: false,
     showAddress: true,
     isSnackbarVisible: false,
    };
  },
  methods: {
    showAddCustomerForm() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;

      this.customerName= '';
      this.company= '';
      this.phoneNumber= '';
      this.email= '';
      this.country= '';
      this.number1= '';
      this.street1= '';
      this.city1= '';
      this.number2= '';
      this.street2= '';
      this.city2= '';
    },
     showHelloText() {
      this.showHello = !this.showHello;
    },
    deleteFields() {
      this.showAddress = false; 
    },
    addCustomer() {
    // Validate all required fields before submitting
    if (
      this.customerName &&
      this.company &&
      this.phoneNumber &&
      this.email &&
      this.country &&
      this.number1 &&
      this.street1 &&
      this.city1 &&
      (!this.showAddress || (this.number2 && this.street2 && this.city2))
    ) {
      // All required fields are filled, proceed with adding the customer
      const customerDetails = {
        name: this.customerName,
        company: this.company,
        phoneNumber: this.phoneNumber,
        email: this.email,
        country: this.country,
        address1: {
          number: this.number1,
          street: this.street1,
          city: this.city1,
        },
        address2: this.showAddress
          ? {
              number2: this.number2,
              street2: this.street2,
              city2: this.city2,
            }
          : null,
      };

 
      this.addCustomerToDatabase(customerDetails);
            this.isSnackbarVisible = true;


     this.closeModal();
      this.resetForm();
    } else {

      alert('Please fill in all required fields.');
    }
  },
 closeModal() {
    this.isModalOpen = false;
  },

resetForm() {
    this.customerName = '';
    this.company = '';
    this.phoneNumber = '';
    this.email = '';
    this.country = '';
    this.number1 = '';
    this.street1 = '';
    this.city1 = '';
    this.number2 = '';
    this.street2 = '';
    this.city2 = '';
    this.showHello = false;
    this.showAddress = false;
  },
// Inside your component's methods
addCustomerToDatabase(customerDetails) {
  console.log('Adding customer to the database:', customerDetails);

  // Save the customer details to local storage
  this.saveToLocalStorage(customerDetails);

  // You can replace this with the actual logic to add the customer to the database
  // For demonstration purposes, we'll just log a message
  console.log('Simulating adding customer to the database...');
},

saveToLocalStorage(customerDetails) {
  // Get existing data from local storage or initialize an empty array
  const existingCustomers = JSON.parse(localStorage.getItem('customers')) || [];

  // Add the new customer details to the array
  existingCustomers.push(customerDetails);

  // Save the updated array back to local storage
  localStorage.setItem('customers', JSON.stringify(existingCustomers));

  console.log('Customer details saved to local storage:', customerDetails);
},

  }
};
</script>

<style scoped>
.alert-box{
  margin-bottom: 25%;
}
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
  gap: 6px; 
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
  width: 30px; 
  height: 30px; 
  background-color: #daf8e1; 
  border-radius: 50%;
  text-align: center;
  line-height: 20px; 
  margin-left: 93%; 
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
