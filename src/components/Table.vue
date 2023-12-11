<template>
  <v-data-table
    v-model:expanded="expanded"
    :headers="dessertHeaders"
    :items="desserts"
    item-value="name"
    show-expand
    class="rounded-table"
  >
    <template v-slot:top>
      <h2 class="heading-style">All Customers</h2>
      <p class="active-members">Active Members</p>





    </template>


    <template v-slot:expanded-row="{ item }">
      <tr  class="address-set">
        <td></td>
        <td>Address 1</td>
        <td>
        
          <div>
            <p>{{ item.address1.number  }}</p>
          </div>
          
        </td>

        <td>
        
          <div>
            <p>{{ item.address1.street}}</p>
          </div>
          
        </td>

        <td>
        
          <div>
            <p>{{ item.address1.city }}</p>
          </div>
          
        </td>
      </tr>

      <tr class="address-set">
        <td></td>
        <td>Address 2</td>
        <td>
        
          <div>
            <p>{{ item.address2.number2 }}</p>
          </div>
          
        </td>

        <td>
        
          <div>
            <p>{{ item.address2.street2}}</p>
          </div>
          
        </td>

        <td>
        
          <div>
            <p>{{ item.address2.city2 }}</p>
          </div>
          
        </td>
      </tr>
    </template>
  </v-data-table>
</template>


<script>
export default {
  data() {
    return {
      expanded: [],
      dessertHeaders: [
        {
          title: 'CustomerName',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Company', key: 'company' },
        { title: 'PhoneNumber', key: 'phoneNumber' },
        { title: 'Email', key: 'email' },
        { title: 'Country', key: 'country' },
        { title: 'Status', key: 'status', class: 'status-column', style: 'color: red;', value: 'status' },
        { title: '', key: 'data-table-expand' },
      ],
      desserts: [],
    };
  },
 created() {
  const storedCustomers = localStorage.getItem('customers');
  if (storedCustomers) {
    this.desserts = JSON.parse(storedCustomers).map(customer => ({
      ...customer,
      status: customer.status || 'Active', 
    }));
  }
},

};
</script>



<style scoped>
.search-style{
  width: 15%;
}
.address-set{
  color: darkgray;
}
.status-column{
  color: #4CAF50;
  margin-left: 50px
}
.active-status {
  color: red; 
}

.inactive-status {
  color: green; 
}

.rounded-table {
  border-radius: 10px;
  margin-left: 60px;
  margin-top: 40px;
  width: 90%;
}

.heading-style {
  margin: 15px;
  font-size: 1.5em;
}

.active-members {
  color: #4CAF50;
  margin-left: 15px;
}

.expanded-row {
  border: 1px solid #ccc; 
  padding: 10px;
}
</style>
