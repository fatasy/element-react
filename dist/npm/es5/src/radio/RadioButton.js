'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libs = require('../../libs');

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var RadioButton = function (_Radio) {
  (0, _inherits3.default)(RadioButton, _Radio);

  function RadioButton() {
    (0, _classCallCheck3.default)(this, RadioButton);
    return (0, _possibleConstructorReturn3.default)(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RadioButton, [{
    key: 'parent',
    value: function parent() {
      return this.context.component;
    }
  }, {
    key: 'size',
    value: function size() {
      return this.parent().props.size;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.props.disabled || this.parent().props.disabled;
    }
  }, {
    key: 'activeStyle',
    value: function activeStyle() {
      return {
        backgroundColor: this.parent().props.fill || '',
        borderColor: this.parent().props.fill || '',
        color: this.parent().props.textColor || ''
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        { style: this.style(), className: this.className('el-radio-button', this.props.size && 'el-radio-button--' + this.size(), {
            'is-active': this.state.checked
          }) },
        _react2.default.createElement('input', {
          type: 'radio',
          className: 'el-radio-button__orig-radio',
          checked: this.state.checked,
          disabled: this.isDisabled(),
          onChange: this.onChange.bind(this)
        }),
        _react2.default.createElement(
          'span',
          { className: 'el-radio-button__inner', style: this.state.checked ? this.activeStyle() : {} },
          this.props.children || this.props.value
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return RadioButton;
}(_Radio3.default);

RadioButton.elementType = 'RadioButton';
var _default = RadioButton;
exports.default = _default;


RadioButton.contextTypes = {
  component: _libs.PropTypes.any
};

RadioButton.propTypes = {
  value: _libs.PropTypes.oneOfType([_libs.PropTypes.string, _libs.PropTypes.number]),
  disabled: _libs.PropTypes.bool,
  name: _libs.PropTypes.string
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RadioButton, 'RadioButton', 'src/radio/RadioButton.jsx');
  reactHotLoader.register(_default, 'default', 'src/radio/RadioButton.jsx');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();