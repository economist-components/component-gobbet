'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentSharebar = require('@economist/component-sharebar');

var _economistComponentSharebar2 = _interopRequireDefault(_economistComponentSharebar);

var Gobbet = (function (_React$Component) {
  function Gobbet() {
    _classCallCheck(this, Gobbet);

    _React$Component.apply(this, arguments);
  }

  _inherits(Gobbet, _React$Component);

  Gobbet.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'gobbet' },
      this.props.title ? _react2['default'].createElement(
        'h1',
        null,
        this.props.title
      ) : null,
      this.props.children,
      this.props.showShareBar === true ? _react2['default'].createElement(_economistComponentSharebar2['default'], this.props.sharebar) : null
    );
  };

  _createClass(Gobbet, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        title: _react2['default'].PropTypes.node,
        children: _react2['default'].PropTypes.element,
        showShareBar: _react2['default'].PropTypes.bool,
        sharebar: _react2['default'].PropTypes.object
      };
    }
  }]);

  return Gobbet;
})(_react2['default'].Component);

exports['default'] = Gobbet;
module.exports = exports['default'];

