const registerSalesTransactions = ({ registerSalesTransactionUseCase }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = { ...info, source };
      const result = await registerSalesTransactionUseCase(toView);
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

module.exports = registerSalesTransactions;
