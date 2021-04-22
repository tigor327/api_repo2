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
      console.log("---------", users);
      if (users.result.rows.length > 0) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: {
            message: users.message,

            token: users.token,
          },
        };
      } else {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 400,
          body: { error: "Wrong username or password" },
        };
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
      };
    }
  };
};

module.exports = login;
