const removeDeliveryTransactionById = ({
  removeDeliveryTransactionUseCase,
}) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      //get the httprequest body
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
        id: httpRequest.params.id, // when id is passed
      };
      const removeDeliveryTransactions = await removeDeliveryTransactionUseCase(
        toView
      );
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { removeDeliveryTransactions },
      };
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

module.exports = removeDeliveryTransactionById;
