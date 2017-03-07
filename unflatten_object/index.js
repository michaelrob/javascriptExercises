var unflatten_object = function unflatten(obj, item) {
  var item = item || {}, cur, prop, parts, idx;

  for (var o in obj) {
      cur = item, prop = "";
      parts = o.split(".");

      for (var i=0; i < parts.length; i++) {
          idx = !isNaN(parseInt(parts[i]));
          cur = cur[prop] || (cur[prop] = (idx ? [] : {}));
          prop = parts[i];
      }

      cur[prop] = obj[o];
  }
  return item[""];
};

module.exports = unflatten_object;