const { Router } = require("express");
const router = Router();

const testRouter = require("./test");

router.use("/tests", testRouter);

module.exports = router;
