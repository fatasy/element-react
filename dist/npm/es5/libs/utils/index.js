'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IDGenerator = exports.DateUtils = exports.Errors = exports.ReactUtils = exports.require_condition = undefined;
exports.watchPropertyChange = watchPropertyChange;
exports.createPropType = createPropType;
exports.hashCode = hashCode;
exports.pick = pick;
exports.range = range;

var _date = require('./date');

Object.defineProperty(exports, 'DateUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_date).default;
  }
});

var _popperMixins = require('./popper-mixins');

Object.keys(_popperMixins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popperMixins[key];
    }
  });
});

var _IDGenerator = require('./IDGenerator');

Object.defineProperty(exports, 'IDGenerator', {
  enumerable: true,
  get: function get() {
    return _IDGenerator.IDGenerator;
  }
});

var _assert = require('./assert');

var _react = require('./react');

var ReactUtils = _interopRequireWildcard(_react);

var _errors = require('./errors');

var Errors = _interopRequireWildcard(_errors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

exports.require_condition = _assert.require_condition;
exports.ReactUtils = ReactUtils;
exports.Errors = Errors;
function watchPropertyChange(target, property, cb) {
  (0, _assert.require_condition)(target != null && typeof property === 'string' && typeof cb === 'function', 'invalid arguments');

  var cache = null;
  if (!target.__watch_cache) {
    target.__watch_cache = {};
  }
  cache = target.__watch_cache;

  (0, _assert.require_condition)(cache[property] == null, 'duplicated watch on ' + target + ' \'s ' + property);
  cache[property] = cb;

  var origin = target[property];

  Object.defineProperty(target, property, {
    configurable: true,

    get: function get() {
      return origin;
    },
    set: function set(value) {
      origin = value;
      if (cache[property]) {
        cache[property](origin);
      }
    }
  });

  return function () {
    if (target.__watch_cache && target.__watch_cache[property]) {
      delete target.__watch_cache[property];
      delete target[property];
      target[property] = origin;
    }
  };
}

function createPropType(validate) {
  // Chainable isRequired
  function checkType(isRequired, props, propName, componentName) {
    componentName = componentName || '<<anonymous>>';
    if (props[propName] == null) {
      if (isRequired) {
        return new Error("Required `" + propName + "` was not specified in " + ("`" + componentName + "`."));
      }
      return null;
    } else {
      return validate(props, propName, componentName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

// take from :  http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function hashCode(str) {
  if (str == null || str.length === 0) return 0;
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function pick(obj, keys) {
  (0, _assert.require_condition)(obj != null && Array.isArray(keys));

  var r = {};
  keys.forEach(function (e) {
    return r[e] = obj[e];
  });
  return r;
}

function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(watchPropertyChange, 'watchPropertyChange', 'libs/utils/index.js');
  reactHotLoader.register(createPropType, 'createPropType', 'libs/utils/index.js');
  reactHotLoader.register(hashCode, 'hashCode', 'libs/utils/index.js');
  reactHotLoader.register(pick, 'pick', 'libs/utils/index.js');
  reactHotLoader.register(range, 'range', 'libs/utils/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();