/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res) {
    let params = req.body;
  
    let user = await User.findOne({
      emailAddress: params.emailAddress.toLowerCase(),
    });
  
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  
    await sails.helpers.passwords
      .checkPassword(params.password, user.password)
      .intercept("incorrect", "badCombo");
  
    req.session.userId = user.id;
    req.session.user = user;
  
    return res.json({
      id: user.id,
      fullName: user.fullName,
      emailAddress: user.emailAddress,
      isSuperAdmin: user.isSuperAdmin,
    });
  },
  sessionUser: async function (req, res) {
    console.log("Session userId:", req.session.userId);
    console.log("Session:", req.session);
  
    if (!req.session.userId) {
      return res.status(403).json({ message: "Not logged in" });
    }
  
    try {
      const user = await User.findOne({ id: req.session.userId });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  },
  
  
  register: async function (req, res) {
    let params = req.body;
    let newEmailAddress = params.emailAddress.toLowerCase();
  
    let user = await User.create({
      emailAddress: newEmailAddress,
      fullName: params.fullName,
      password: await sails.helpers.passwords.hashPassword(params.password),
      addressStreet: params.addressStreet,
      addressCity: params.addressCity,
      addressPostalCode: params.addressPostalCode,
      addressCountry: params.addressCountry,
      isSuperAdmin: false,
    })
      .intercept("E_UNIQUE", "emailAlreadyInUse")
      .intercept({ name: "UsageError" }, "invalid")
      .fetch();
  
    req.session.userId = user.id;
    req.session.user = user;
    return res.json(user);
  },

  updateUser: async function (req, res) {
    if (!req.session.userId) {
      return res.status(403).json({ message: "Not logged in" });
    }
  
    try {
      const updatedUser = await User.updateOne({ id: req.session.userId }).set({
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        addressStreet: req.body.addressStreet,
        addressCity: req.body.addressCity,
        addressPostalCode: req.body.addressPostalCode,
        addressCountry: req.body.addressCountry,
      });
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      req.session.user = updatedUser;
      return res.json(updatedUser); 
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  },  
  
  logout: async function (req, res) {
    delete req.session.user;
    delete req.session.userId;
    return res.ok();
  }, 
};
