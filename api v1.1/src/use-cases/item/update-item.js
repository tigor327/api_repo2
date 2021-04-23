const updateItem = ({ itemsDb, updateItem_ENTITY }) => {
  return async function add(info) {
    let data = await updateItem_ENTITY({ info });
    let result = {};
    // data = {
    //   name: info.name,
    //   barcode: info.barcode,
    //   description: info.description,
    //   supplier: info.supplier,
    //   price: info.price,
    //   quantity: info.quantity,
    //   itemStatus: info.itemStatus,
    //   itemid: info.id,
    // };

    const res = await itemsDb.updateItem({ data });
    let prompt = "";
    if (res) {
      result.id = res[0].itemid;
      result.name = res[0].itemName;
      result.barcode = res[0].itemBarcode;
      result.description = res[0].itemDescription;
      result.price = res[0].itemPrice;
      result.quantity = res[0].itemQuantity;
      result.itemStatus = res[0].itemStatus;
      result.supid = res[0].userid;
    }

    if (res) {
      prompt = "Item updated succesfully!";
      return {
        message: prompt,
        product: [result],
      };
    } else {
      throw new Error("Failed to update item.");
    }
  };
};

module.exports = updateItem;
