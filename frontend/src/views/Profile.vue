<template>
	<div class="profile-container">
	  <div class="row">
		<!-- Linkes Profil-Panel -->
		<div class="col-lg-4">
		  <div class="card profile-card">
			<!-- Platzhalter für Profilbild -->
			<div class="profile-placeholder">
			  <span>No Image</span>
			</div>
			<h4 class="mt-3">John Doe</h4>
			<RouterLink to="/OrderHistory" class="btn order-history-button mt-3">Order History</RouterLink>
		  </div>
		</div>
  
		<!-- Rechtes Detail-Panel -->
		<div class="col-lg-8">
		  <div class="card">
			<div class="card-body">
			  <div class="mb-3 row">
				<label class="col-sm-3 col-form-label">Full Name</label>
				<div class="col-sm-9">
				  <input type="text" class="form-control" value="John Doe">
				</div>
			  </div>
			  <div class="mb-3 row">
				<label class="col-sm-3 col-form-label">Email</label>
				<div class="col-sm-9">
				  <input type="text" class="form-control" value="john@example.com">
				</div>
			  </div>
			  <div class="mb-3 row">
				<label class="col-sm-3 col-form-label">Phone</label>
				<div class="col-sm-9">
				  <input type="text" class="form-control" value="(239) 816-9029">
				</div>
			  </div>
			  <div class="mb-3 row">
				<label class="col-sm-3 col-form-label">Mobile</label>
				<div class="col-sm-9">
				  <input type="text" class="form-control" value="(320) 380-4539">
				</div>
			  </div>
			  <div class="mb-3 row">
				<label class="col-sm-3 col-form-label">Address</label>
				<div class="col-sm-9">
				  <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
				</div>
			  </div>
			  <div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-9">
				  <input type="button" class="btn save-changes-button px-4" value="Save Changes">
				</div>
			  </div>
			</div>
		  </div>
  
		  <!-- Kundenrezension -->
		  <div class="card mt-4">
			<div class="card-body">
			  <h5 class="mb-3">Customer Review</h5>
			  <p><strong>Coffee Name:</strong> Espresso Deluxe</p>
			  <p><strong>Date:</strong> 2025-01-10</p>
			  <p><strong>Rating:</strong> 4/5</p>
			  <p>
				"The Espresso Deluxe had a rich and bold flavor, but it was slightly too bitter for my taste. Still, a great choice for espresso lovers!"
			  </p>
			  <div class="d-flex justify-content-end gap-2">
				<button class="btn btn-danger">Delete</button>
				<button class="btn btn-outline-primary">Edit</button>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <style scoped>
  body {
	background: #f7f7ff;
	margin-top: 20px;
  }
  
  .profile-container {
	background-color: rgb(212, 205, 205);
	margin: 20px 0;
	padding: 20px;
	border-radius: 20px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card {
	background-color: #735340;
	color: #fff;
	border: 0;
	border-radius: 20px;
	margin-bottom: 1.5rem;
	box-shadow: 0 2px 6px rgba(218, 218, 253, 0.65), 0 2px 6px rgba(206, 206, 238, 0.54);
  }
  
  .profile-card {
	text-align: center;
	border-radius: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; /* Inhalte komplett zentrieren */
  }
  
  .profile-placeholder {
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;
	color: #555;
	margin: 0 auto 15px auto;
  }
  
  .card-body {
	color: #fff;
	border-radius: 20px;
	padding: 20px;
  }
  
  .card-body input {
	background-color: #fff;
	color: #000;
	border: 1px solid #ccc;
  }
  
  /* Order History Button */
  .order-history-button {
	background-color: #1e160d;
	color: #fff;
	border: none;
	border-radius: 15px;
	padding: 10px 20px;
	width: 150px;
	transition: background-color 0.3s ease;
  }
  
  .order-history-button:hover {
	background-color: #5a6268;
  }
  
  .save-changes-button {
	background-color: #A8865F !important;
	color: #fff !important;
	border: none;
	border-radius: 15px !important;
	padding: 10px 20px;
	transition: background-color 0.3s ease;
  }
  
  .save-changes-button:hover {
	background-color: #A8765F !important;
  }
  
  .btn-danger {
	background-color: #dc3545 !important;
	color: #fff !important;
	border: none;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary {
	color: #007bff !important;
	border-color: #007bff;
	border-radius: 15px;
	padding: 5px 15px;
  }
  
  .btn-outline-primary:hover {
	background-color: #007bff;
	color: #fff !important;
  }
  </style>
  