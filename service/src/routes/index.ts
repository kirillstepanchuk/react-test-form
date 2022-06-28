import express from "express";

import feedback from "./feedback";

const router = express();

router.use(feedback);

module.exports = router;
