const {
  getAllItemsController,
  registerItemController,
  updateItemController,
  removeItemController,
} = require("../../controllers/item/index");

const itemRoutes = ({ itemRouter, makeExpressCallback }) => {
  itemRouter.get("/", makeExpressCallback(getAllItemsController));
  itemRouter.post("/", makeExpressCallback(registerItemController));
  itemRouter.patch("/:id", makeExpressCallback(updateItemController));
  itemRouter.delete("/:id", makeExpressCallback(removeItemController));

  return itemRouter;
};

module.exports = itemRoutes;
