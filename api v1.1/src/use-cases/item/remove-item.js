const removeItem = ({ itemsDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await itemsDb.removeItem({ id });
    let msg = `Item was not deleted, please try again`;
    if (res == 1) msg = `Item deleted successfully.`;
    return msg;
  };
};

module.exports = removeItem;
