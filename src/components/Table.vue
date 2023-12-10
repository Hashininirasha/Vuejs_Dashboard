<template>
  <div>

    <v-table
    :data="users"
        :currentPage.sync="currentPage"
        :pageSize="5"
        @totalPagesChanged="totalPages = $event"


      class="Table-style"
    >  
    <thead>
        <h2 class="heading-style">All Customers</h2>
    </thead>

    <div class="table-heading">
  <thead>
    <div class="flex-container">
      <p class="active-members">Active Members</p>
      
      <!-- <v-text-field
        v-model="searchQuery"
        variant="underlined"
        @input="filterItems"
        placeholder="Search..."
        class="search-field"
      >
        <i class="bx bx-search-alt-2" slot="prepend"></i>
      </v-text-field>

      <v-select
        v-model="selectedOption"
        :items="options"
        label="Sort by:"
        variant="underlined"
        append-icon="bx bxs-chevron-down"
      ></v-select> -->
    </div>
  </thead>
</div>

    
      <thead>
        <tr class="heading">
          <th class="text-left">
            Customer Name
          </th>
          <th class="text-left">
            Company
          </th>
          <th class="text-left">
            Phone Number
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Country
          </th>
          <th class="text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.customerName }}</td>
          <td>{{ item.company }}</td>
          <td>{{ item.phoneNumber }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.country }}</td>
          <td>
            <button class="status-btn" v-bind:status="item.status">
            {{ item.status }}
            </button>
            </td>
        </tr>
       
      </tbody>
  <tr >
    <td colspan="3" class="pagination-text">Showing Data 1 to 8 of 255 entities</td>
    <td colspan="3" class="pagination"><pagination/></td>
  </tr>
    </v-table>

      
  </div>

</template>

<script>
import Pagination from "./Pagination.vue"
export default {
    components: { Pagination },
  data() {
    return {
      options: ["Option 1", "Option 2", "Option 3"],
      page: 1,
      desserts: [
        {
          customerName: 'John Doe',
          company: 'ABC Inc.',
          phoneNumber: '123-456-7890',
          email: 'john.doe@example.com',
          country: 'USA',
          status: 'Active',
        },
        {
          customerName: 'John Doe',
          company: 'ABC Inc.',
          phoneNumber: '123-456-7890',
          email: 'john.doe@example.com',
          country: 'USA',
          status: 'Inactive',
        },
        {
          customerName: 'John Doe',
          company: 'ABC Inc.',
          phoneNumber: '123-456-7890',
          email: 'john.doe@example.com',
          country: 'USA',
          status: 'Active',
        },
        // Add more data objects as needed
      ],
 itemsPerPage: 5, // Adjust as needed
      currentPage: 1,
    };
  },
  computed: {
    paginatedDesserts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.desserts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
  },
  methods: {
    changePage(value) {
      this.currentPage = value;
    },
  },
};
</script>

<style scoped>
.search-field{
  padding-left: 100px
}
.flex-container {
  display: flex;
  align-items: center;
}


.pagination{
  padding-left: 50px
}
.pagination-text{
  padding-left: 20px;
  color: darkgray;


}
.status-btn {
  width: 80px;
  height: 30px;
  
  border-radius: 5px;
}

.status-btn[status="Active"] {
  background-color: #daf8e1;
  border: 2px solid #4CAF50;
  color: #4CAF50
}

.status-btn[status="Inactive"] {
  color: red;
  background-color: #eac0ba;
   border: 2px solid red;
}




.Table-style {
  margin: 60px;
  border-radius: 10px;
  height: 500px;
}

  .pagination-style {
    display: flex;
    justify-content: flex-end; /* Align to the right */
    margin-top: 20px; /* Adjust margin as needed */
  }

.heading-style {
  margin: 15px;
  font-size: 1.5em;
}
.active-members{
    color: #4CAF50;
    margin-left: 15px;
 
}
.heading{
    color:darkgray
}
</style>
