const registerDeliveryTransactions = ({
  registerDeliveryTransactionUseCase,
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
      const toView = { ...info, source };
      const result = await registerDeliveryTransactionUseCase(toView);
      console.log(
        "-1-1-1-1-1-1-1-1111-1-1-1-1-1-1-1-1------------------------------------------:",
        result
      );
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

module.exports = registerDeliveryTransactions;
