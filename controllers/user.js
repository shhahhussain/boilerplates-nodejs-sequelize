const { Users } = require("../models");
const { isEmpty } = require("lodash");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await Users.findAll();
      if (isEmpty(users)) {
        // Demonstrating how errors are handled by res.internalServerError
        throw { status: 404, message: "User not found" };
      }
      res.success(users);
    } catch (err) {
      console.log(err);
      res.internalServerError(err);
    }
  },
};
