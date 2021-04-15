const {
  makeItem_ENTITY,
  updateItem_ENTITY,
} = require("../../entities/item/index");

const itemsDb = require("../../data-access/items/index");

const listItems = require("./list-item");
const registerItem = require("./register-item");
const removeItem = require("./remove-item");
const updateItem = require("./update-item");

const listItemUseCase = listItems({ itemsDb });
const registerItemUseCase = registerItem({
  itemsDb,
  makeItem_ENTITY,
});
const removeItemUseCase = removeItem({ itemsDb });
const updateItemUseCase = updateItem({
  itemsDb,
  updateItem_ENTITY,
});

const services = Object.freeze({
  listItemUseCase,
  registerItemUseCase,
  removeItemUseCase,
  updateItemUseCase,
});

module.exports = services;
module.exports = {
  listItemUseCase,
  registerItemUseCase,
  removeItemUseCase,
  updateItemUseCase,
};
