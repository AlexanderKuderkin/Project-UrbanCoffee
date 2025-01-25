<template>
	<div class="background-container">
	  <div class="container mt-5">
		<!-- Header Section -->
		<div class="header-section mb-4 p-3 text-white">
		  <h1 class="text-center mb-3">Manage Customers</h1>
		  <!-- Search Bar -->
		  <input
			type="text"
			placeholder="Search for customer name ..."
			class="form-control mb-3 search-bar"
			v-model="searchQuery"
		  />
		</div>
  
		<!-- Customers Table -->
		<div class="table-responsive-wrapper">
		  <table class="table table-bordered table-hover">
			<thead>
			  <tr>
				<th style="width: 50px;">ID</th>
				<th style="width: auto;">Name</th>
				<th style="width: 150px;">Orders</th>
				<th style="width: 250px;">Data</th>
				<th style="width: 250px;">Remove</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="user in filteredUsers" :key="user.id">
				<td>{{ user.id }}</td>
				<td>{{ user.fullName }}</td>
				<td>{{ user.orderCount || 0 }}</td>
				<td>
					<div class="button-container d-flex justify-content-between">
						<RouterLink
						:to="{ name: 'OrderHistoryUser', params: { id: user.id } }"
						class="btn btn-view-more"
						>
						Order History
						</RouterLink>
						<RouterLink
						:to="{ name: 'CustomersView', params: { id: user.id } }"
						class="btn btn-edit"
						>
						Information
						</RouterLink>
						
					</div>
				</td>
				<td>
					<button	v-if="!user.isSuperAdmin" class="btn btn-danger" @click="deleteUser(user.id)">
						Delete User
						</button>
				</td>
			  </tr>
			  <tr v-if="filteredUsers.length === 0">
				<td colspan="4" class="text-center">No customers found.</td>
			  </tr>
			</tbody>
		  </table>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
import axios from "axios";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      users: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      return this.users.filter((user) =>
        user.fullName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    async deleteUser(userId) {
      try {
        const confirmation = confirm(
          "Are you sure you want to delete this user? This action cannot be undone."
        );
        if (!confirmation) return;

        const response = await axios.delete(`/api/users/${userId}`);

        if (response.status === 200) {
          this.users = this.users.filter((user) => user.id !== userId);
          alert("User deleted successfully!");
        } else {
          alert("Failed to delete user. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("An error occurred while deleting the user.");
      }
    },
  },
  async created() {
    try {
      const response = await axios.get("/api/users-with-orders");
      this.users = response.data;
    } catch (error) {
      console.error("Failed to fetch users or orders:", error);
    }
  },
};
</script>
  
  <style scoped>
  .background-container {
	background-color: rgb(212, 205, 205);
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 20px;
	border-radius: 20px;
	display: flex;
	justify-content: center;
  }
  
  .container {
	max-width: 800px;
	width: 100%;
  }
  
  .header-section {
	background-color: #735340;
	border-radius: 10px;
	text-align: center;
  }
  
  .search-bar {
	max-width: 100%;
	margin: 0 auto;
  }
  
  .button-container {
	align-items: center;
	gap: 10px;
  }
  
  .btn-view-more, .btn-edit {
	color: white;
	border-radius: 15px;
	padding: 8px 16px;
	height: 40px;
	width: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
  }
  
  .btn-view-more {
	background-color: #A8865F;
  }
  
  .btn-view-more:hover {
	background-color: #A8765F;
  }
  
  .btn-edit {
	background-color: #1e160d;
  }
  
  .btn-edit:hover {
	background-color: #5a6268;
  }
  
  .table-responsive-wrapper {
	overflow-x: auto;
	margin-top: 20px;
	margin-bottom: 40px;
	border-radius: 10px;
	background-color: #f5f5f5;
	padding: 10px;
  }
  
  .table {
	table-layout: auto;
	width: 100%;
	border-collapse: collapse;
  }
  
  th, td {
	white-space: nowrap;
	text-align: left;
	vertical-align: middle;
	padding: 5px 10px;
  }
  .btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
}
  </style>
  