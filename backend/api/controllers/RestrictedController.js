/**
 * RestrictedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    example: async function (req, res) {
  
        if (!req.session || !req.session.userId) {
            return res.status(401).json({ message: "Unauthorized: Please log in." });
        }

        const user = req.session.user;
        if (!user) {
            return res
            .status(401)
            .json({ message: "Session invalid. Please log in again." });
        }
        return res.json({
            message: `Hello ${user.fullName}. This message is protected!`,
        });
    },
};
