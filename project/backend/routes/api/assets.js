const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Body } = require("../../db/models")

const router = express.Router();

router.get(
  '/bodies',
  asyncHandler(async (req, res) => {
    const bodies = await Body.findAll();
    return res.json(bodies)
  }),
)

router.get(
  '/bodies/:id',
  asyncHandler(async (req, res) => {
    const bodies = await Body.findAll({
        where: {
          id: req.params.id
        }
      });
    return res.json(bodies)
  }),
)

module.exports = router;
