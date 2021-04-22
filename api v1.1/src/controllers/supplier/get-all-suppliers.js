const getAllSuppliers = ({ listSupplierUseCase }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
      };
      const suppliersList = await listSupplierUseCase(toView);
      if (suppliersList.length > 0) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { suppliersList },
        };
      } else throw new Error("No Suppliers Found.");
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = getAllSuppliers;
