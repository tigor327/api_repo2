const clearDataBase = ({ clearDB }) => {
  return async function list() {
    const result = await clearDB.clearDB({});
    return result;
  };
};

module.exports = clearDataBase;
