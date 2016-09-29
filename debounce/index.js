var debouncer = function debounce(wait) {
	var timeout;
	var func = this;

	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
		    func.apply(context, args);
		}, wait || 100);
	};
};

module.exports = debouncer;
