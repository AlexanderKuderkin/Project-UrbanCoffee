module.exports = {
    getAllUsersWithOrders: async function (req, res) {
        try {
          const users = await User.find();
          const orders = await Order.find();
    
          const usersWithOrders = users.map((user) => {
            const userOrders = orders.filter((order) => order.user === user.id);
            return {
              ...user,
              orderCount: userOrders.length || 0,
            };
          });
    
          return res.ok(usersWithOrders);
        } catch (error) {
          console.error('Error fetching users and orders:', error);
          return res.serverError({ error: 'Failed to fetch users and orders.' });
        }
      },
  };
  