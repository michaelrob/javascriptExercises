var flatten_object = function flatten(obj, item) {
  var item = item || {};

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if ((typeof obj[i]) == 'object') {
			var flat_object = flatten_object(obj[i]);

			for (var x in flat_object) {
				if (!flatObject.hasOwnProperty(x)) continue;

				item[i + '.' + x] = flat_object[x];
			}
		} else {
			item[i] = obj[i];
		}
  }
};

module.exports = flatten_object;