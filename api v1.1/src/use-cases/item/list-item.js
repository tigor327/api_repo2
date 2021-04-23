const listItems = ({ itemsDb }) => {
  return async function list() {
    let itemList = [];
    const result = await itemsDb.getAllItems({});

    for (let data of result.rows) {
      const dataValue = {};

      dataValue.id = data.itemid;
      dataValue.name = data.itemName;
      dataValue.barcode = data.itemBarcode;
      dataValue.description = data.itemDescription;
      dataValue.price = data.itemPrice;
      dataValue.quantity = data.itemQuantity;
      dataValue.itemStatus = data.itemStatus;
      dataValue.supid = data.userid;
      dataValue.supName = data.userName;
      dataValue.supContact = data.userContact;
      dataValue.supAddress = data.userAddress;
      dataValue.supStatus = data.userStatus;
      itemList.push(dataValue);
    }

    return itemList;
  };
};

module.exports = listItems;
