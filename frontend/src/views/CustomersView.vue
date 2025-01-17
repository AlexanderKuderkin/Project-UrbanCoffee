<template>
    <div class="outer-container">
      <div class="container mt-5">
        <div class="card shadow-lg">
          <img
            class="card-img-top rounded-circle"
            src="https://dummyimage.com/200x200/cccccc/000000&text=Customer+Photo"
            alt="Customer Photo"
          />
          <div class="card-body text-center">
            <h2 class="card-title fw-bold">Customer Name</h2>
            <ul class="list-group list-group-flush mt-3">
              <li class="list-group-item"><strong>Email:</strong> customer@example.com</li>
              <li class="list-group-item"><strong>Country:</strong> Country Name</li>
              <li class="list-group-item"><strong>City:</strong> City Name</li>
              <li class="list-group-item"><strong>Postal Code:</strong> 12345</li>
              <li class="list-group-item"><strong>Street:</strong> Street Name</li>
              <li class="list-group-item"><strong>House Number:</strong> 123</li>
            </ul>
  
            <div class="mt-4">
              <button class="btn btn-secondary back-button">
                <i class="fas fa-arrow-left me-2"></i> Back to Customers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .outer-container {
    background-color: rgb(212, 205, 205);
    border-radius: 20px;
    margin: 20px 0;
    padding: 20px;
  }
  .container {
    max-width: 600px;
  }
  .card {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .card-img-top {
    object-fit: cover;
    height: 200px;
    width: 200px;
    margin: 20px auto 0 auto;
  }
  .card-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .list-group-item {
    font-size: 1rem;
    text-align: left;
  }
  .btn {
    border-radius: 25px;
  }
  .back-button {
    background-color: #1e160d;
    border-color: #1e160d;
    border-radius: 15px;
  }
  .back-button:hover {
    background-color: #5a6268;
    border-color: #5a6268;
  }
  </style>
  