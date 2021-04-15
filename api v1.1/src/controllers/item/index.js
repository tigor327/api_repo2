const {
  listItemUseCase,
  registerItemUseCase,
  removeItemUseCase,
  updateItemUseCase,
} = require("../../use-cases/item/index");

const getAllItems = require("./get-all-items");
const registerItems = require("./register-item");
const removeItemById = require("./remove-item");
const updateItemById = require("./update-item");
//console.log("passed through index item controller");
const getAllItemsController = getAllItems({ listItemUseCase });
const registerItemController = registerItems({ registerItemUseCase });
const removeItemController = removeItemById({ removeItemUseCase });
const updateItemController = updateItemById({ updateItemUseCase });

const services = Object.freeze({
  getAllItemsController,
  registerItemController,
  removeItemController,
  updateItemController,
});

module.exports = services;
module.exports = {
  getAllItemsController,
  registerItemController,
  removeItemController,
  updateItemController,
};
