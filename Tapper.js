var self = module.exports = {
	
	LONG_PRESS: 0, 
	VIRTUAL_KEY: 1,
	KEYBOARD_TAP: 3,
	
	acoustic: function() {
		cordova.exec(function() {}, function() {}, 'Tapper', 'Sound', [])
	},
	
	haptic: function(type) {
		// set default value when argument is omitted
		if(type == undefined) type = self.VIRTUAL_KEY
		// validate type argument
		else if(type !== self.VIRTUAL_KEY && type !== self.LONG_PRESS && type !== self.KEYBOARD_TAP)
			throw "Argument must be equal to one of these constants: LONG_PRESS, VIRTUAL_KEY, KEYBOARD_TAP."
		
		cordova.exec(
			function() {},
			function() {}, 
			'DeviceFeedback', 
			'Vibrate', 
			[type]
		)
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
