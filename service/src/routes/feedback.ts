import express from 'express';

const { handleAddFeedback } = require("../controllers/feedback");

const router = express();

router.post("/feedback/add", handleAddFeedback);

export default router;