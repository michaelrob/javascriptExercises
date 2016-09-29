var debouncer = function debounce(func, wait) {
	var timeout;

	// New anonymous for debounce
	return function() {
		var context = this
		var args = arguments;

		// Each time this function is called the timer starts all over.
		// This is the main part of debounce, you can call the function as many
		// times as you like, but it will only execute once every x seconds
		// in relation to wait
		clearTimeout(timeout);

		timeout = setTimeout(function() {

		    func.apply(context, args);
		}, wait || 100); // if wait is nil default to 100
	};
};

module.exports = debouncer;
