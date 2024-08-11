const { tokenVerification } = require("../utils");

function checkToken(tokenName) {
    return async (req, res, next) => {
        const userToken = req.cookies[tokenName];
        if (!userToken) return next();

        const user = await tokenVerification(userToken);

        if (!user) return next();

        req.user = user;
        return next();
    }


}

module.exports = { checkToken }
