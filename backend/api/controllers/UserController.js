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
      getUserById: async function (req, res) {
        try {
          const userId = req.params.id;
          const user = await User.findOne({ id: userId });
    
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
    
          return res.ok(user);
        } catch (error) {
          console.error("Error fetching user by ID:", error);
          return res.serverError({ error: "Failed to fetch user data" });
        }
      },
    deleteUser: async function (req, res) {
         try {
           const userId = req.params.id;
     
           if (!userId) {
             return res.badRequest({ error: "User ID is required." });
           }
      
            const user = await User.findOne({ id: userId });
            if (!user) {
              return res.notFound({ error: "User not found." });
            }
      
            if (user.isSuperAdmin) {
              return res.forbidden({ error: "Cannot delete an admin user." });
            }
      
            await User.destroyOne({ id: userId });
            return res.ok({ message: "User deleted successfully." });
          } catch (error) {
            console.error("Error deleting user:", error);
            return res.serverError({ error: "Failed to delete user." });
          }
    },      
  };
  