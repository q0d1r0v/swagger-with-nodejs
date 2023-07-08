/**
 * @swagger
 * /get-index:
 *   get:
 *     summary: get index
 *     tags : [Index]
 *     requestParams:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components'
 *     responses:
 *       200:
 *         description: Get idex
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components'
 *
 */

// index service
const IndexService = (req, res) => {
  res.send({
    message: "Index route",
  });
};

// export service
module.exports = {
  IndexService,
};
