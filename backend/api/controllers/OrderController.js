module.exports = {
    createOrder: async function (req, res) {
      try {
        const { userId, items, totalAmount } = req.body;
  
        if (!userId || !items || !totalAmount) {
          return res.badRequest({ error: 'Invalid data' });
        }
  
        // Save the Order
        const newOrder = await Order.create({
          orderDate: new Date(),
          totalAmount: totalAmount,
          user: userId,
        }).fetch();
  
        // save in OrderPosition
        for (const item of items) {
          await OrderPosition.create({
            quantity: item.quantity,
            price: item.price,
            order: newOrder.id,
            coffee: item.productId,
          });
        }
  
        return res.ok({ message: 'Order created successfully', order: newOrder });
      } catch (error) {
        console.error('Error creating order:', error);
        return res.serverError({ error: 'Failed to create order' });
      }
    },

    findByUser: async function (req, res) {
        try {
          const userId = req.query.userId;
    
          if (!userId) {
            return res.badRequest({ error: 'User ID is required.' });
          }
    
          const orders = await Order.find({ user: userId }).populate('orderPosition');
    
          for (const order of orders) {
            for (const position of order.orderPosition) {
              const coffee = await Coffee.findOne({ id: position.coffee });
              position.coffee = coffee;
            }
          }
          return res.ok(orders);
        } catch (error) {
          console.error('Error fetching orders:', error);
          return res.serverError({ error: 'Failed to fetch orders.' });
        }
      },
      findAllOrders: async function (req, res) {
        try {
          const orders = await Order.find().populate('orderPosition');
          return res.ok(orders);
        } catch (error) {
          console.error('Error fetching all orders:', error);
          return res.serverError({ error: 'Failed to fetch all orders.' });
        }
      },
  };
  