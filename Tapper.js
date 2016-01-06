var self = module.exports = {
	
	acoustic: function() {
		cordova.exec(function() {}, function() {}, 'Tapper', 'Sound', [])
	},

	isFeedbackEnabled: function(success) {
		// verify, that argument is function
		if(typeof success != "function") {
			throw "Argument must be callback function."
		}
	
		cordova.exec(
			success,
			function() {}, 
			'DeviceFeedback', 
			'isFeedbackEnabled', 
			[]
		)
	}
}
