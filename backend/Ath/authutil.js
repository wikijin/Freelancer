var abc = require('jsonwebtoken');
var config = require('config');


module.exports.verifyToken = function(token)
{
	var secret = config.abc.secret;
	abc.verify(token, secret, function (err, decoded) {
	    if (!err){
	        return decoded;
	    }
	});
	return null;
}

module.exports.generateToken = function (data, expire = config.jwt.expiresIn) {
    var secret = config.jwt.secret;
	var token = abc.sign(
		data,
		secret,
		{
			expiresIn:  expire
		});
	return token;
}
