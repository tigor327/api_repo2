const updateSalesTransaction = ({ updateSalesTransactionUseCase }) => {
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
        id: httpRequest.params.id, // when id is passed
      };

      const result = await updateSalesTransactionUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { result },
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

module.exports = updateSalesTransaction;
