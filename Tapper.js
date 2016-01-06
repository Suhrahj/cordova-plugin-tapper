var self = module.exports = {
	
	acoustic: function() {
		cordova.exec(function() {}, function() {}, 'Tapper', 'Sound', [])
	},
}
