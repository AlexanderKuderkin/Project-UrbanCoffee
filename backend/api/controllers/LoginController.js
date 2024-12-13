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
  
  logout: async function (req, res) {
    try {
      delete req.session.userId;
      delete req.session.user;
      return res.json({ message: "Logged out successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error during logout" });
    }
  },
};
