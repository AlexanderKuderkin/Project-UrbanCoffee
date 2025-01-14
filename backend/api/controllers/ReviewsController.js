module.exports = {
    async getUserCoffees(req, res) {
        try {
          const userId = req.query.userId;
          if (!userId) {
            return res.status(400).json({ error: "User ID is required." });
          }
    
          const userOrders = await Order.find({ user: userId }).populate("orderPosition");
    
          if (!userOrders || userOrders.length === 0) {
            return res.status(404).json({ error: "No orders found for this user." });
          }
    
          const coffeeIds = [];
          userOrders.forEach((order) => {
            order.orderPosition.forEach((pos) => {
              if (pos.coffee) coffeeIds.push(pos.coffee);
            });
          });
    
          const uniqueCoffeeIds = [...new Set(coffeeIds)];
    
          const userReviews = await Reviews.find({ user: userId });
    
          const reviewedCoffeeIds = userReviews.map((review) => review.coffee);
    
          const coffeesToReview = await Coffee.find({
            id: { in: uniqueCoffeeIds, nin: reviewedCoffeeIds },
          });
    
          return res.json({ coffees: coffeesToReview });
        } catch (err) {
          console.error("Error fetching user coffees:", err);
          return res.status(500).json({ error: "An error occurred.", details: err.message });
        }
      },
    async createReview(req, res) {
        try {
          const { rating, comment, coffeeId, userId } = req.body;
    
          if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({ error: "Rating must be between 1 and 5." });
          }
          if (!comment || !comment.trim()) {
            return res.status(400).json({ error: "Comment is required." });
          }
          if (!coffeeId) {
            return res.status(400).json({ error: "Coffee ID is required." });
          }
          if (!userId) {
            return res.status(400).json({ error: "User ID is required." });
          }
    
          const review = await Reviews.create({
            rating,
            comment,
            coffee: coffeeId,
            user: userId,
          }).fetch();
    
          return res.status(201).json({ message: "Review created successfully.", review });
        } catch (err) {
          console.error("Error creating review:", err);
          return res.status(500).json({ error: "An error occurred.", details: err.message });
        }
      },
      async getUserReviews(req, res) {
        try {
          const userId = req.query.userId;
          if (!userId) {
            return res.status(400).json({ error: "User ID is required." });
          }
    
          const reviews = await Reviews.find({ user: userId })
            .populate("coffee")
            .populate("user");
    
          return res.json({ reviews });
        } catch (err) {
          console.error("Error fetching user reviews:", err);
          return res.status(500).json({ error: "An error occurred.", details: err.message });
        }
      },
      async deleteReview(req, res) {
        try {
          const reviewId = req.params.id;          
          if (!reviewId) {
            return res.status(400).json({ error: "Review ID is required." });
          }
    
          const deletedReview = await Reviews.destroyOne({ id: reviewId });
    
          if (!deletedReview) {
            return res.status(404).json({ error: "Review not found." });
          }
    
          return res.status(200).json({ message: "Review deleted successfully." });
        } catch (err) {
          console.error("Error deleting review:", err);
          return res.status(500).json({ error: "An error occurred.", details: err.message });
        }
      },    
      async updateReview(req, res) {
        try {
          const reviewId = req.params.id;
          const { comment } = req.body;
      
          if (!reviewId || !comment) {
            return res.status(400).json({ error: "Review ID and comment are required." });
          }
      
          const updatedReview = await Reviews.updateOne({ id: reviewId }).set({ comment });
      
          if (!updatedReview) {
            return res.status(404).json({ error: "Review not found." });
          }
      
          return res.status(200).json({ message: "Review updated successfully.", review: updatedReview });
        } catch (err) {
          console.error("Error updating review:", err);
          return res.status(500).json({ error: "An error occurred.", details: err.message });
        }
      },
  };
  
  
  

  