/**
 * @swagger
 * /create-post:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components'
 *     responses:
 *       200:
 *         description: Post created!
 *       400:
 *         description: Must be required title and type!
 *       500:
 *         description: Some server error!
 *
 */

// create post method
const CreatePost = (req, res) => {
  const { title, type } = req.body;

  if (title && type) {
    res.send({
      message: "Post created!",
    });
  } else {
    res.status(400).send({
      message: "Must be required title and type!",
    });
  }
};

// export create post method
module.exports = {
  CreatePost,
};
