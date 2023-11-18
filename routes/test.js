const { Router } = require("express");
const router = Router();

// controller
const testController = require("../controllers/test");

router.get("/health", testController.getHealth);
router.get("/version", testController.getVersion);
router.get("/environment", testController.getEnvironment);

module.exports = router;
