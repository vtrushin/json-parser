var errorTypes = require('../../dist/parseErrorTypes');
var tokenTypes = require('../../dist/tokenize').tokenTypes;

module.exports = {
	error: {
		message: errorTypes.unexpectedToken(tokenTypes.RIGHT_BRACKET, 1, 4)
	}
};
