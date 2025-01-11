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
  };
  