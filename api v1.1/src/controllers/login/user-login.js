const login = ({ loginUseCase }) => {
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

      const users = await loginUseCase(toView);

      if (users.result !== undefined) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: {
            result: users.result,
            message: users.message,
            token: users.token,
          },
        };
      } else {
        throw new Error(users.message);
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },

        // else {
        //   return {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     statusCode: 400,
        //     body: { error: "Wrong username or password" },
        //   };
        //}
      };
    }
  };
};

module.exports = login;
