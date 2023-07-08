// imports
const router = require("express").Router();

// import services
const { IndexService } = require("../services/index");
const { CreatePost } = require("../services/CreatePost");

// routes
router.get("/get-index", IndexService);
router.post("/create-post", CreatePost);

// export router
module.exports = {
  router,
};
