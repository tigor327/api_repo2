require('dotenv').config()

async function verifyToken(token, key, employee_id) {
    return await jwt.verify(token, key, async (err, authData) => {
      if (err) {
        return false;
      } else {
        const tokenExist = await employeeDb.checkToken(employee_id, token);
        if (!tokenExist) {
          return false;
        }
  
        return true;
      }
    });
  }