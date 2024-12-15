module.exports = {
    create: async function (req, res) {
      try {
        const { userId, coffeeId, rating, comment } = req.body;
  
        if (!userId || !coffeeId || !rating) {
          return res.badRequest('User ID, Coffee ID, and rating are required.');
        }
  
        const newReview = await Review.create({
          user: userId,
          coffee: coffeeId,
          rating: rating,
          comment: comment || '',
        }).fetch();
  
        return res.json(newReview);
      } catch (error) {
        return res.serverError(error);
      }
    },
  
    findReviewsForCoffee: async function (req, res) {
      try {
        const coffeeId = req.params.id;
  
        const reviews = await Review.find({ coffee: coffeeId }).populate('user');
        return res.json(reviews);
      } catch (error) {
        return res.serverError(error);
      }
    },
  };
  