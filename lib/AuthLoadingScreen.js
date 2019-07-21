var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _realm=_interopRequireDefault(require("realm"));var _reactNative=require("react-native");var _schemas=require("../schemas");var _jsxFileName="C:\\Users\\q\\Documents\\GitHub\\Week4\\src\\AuthLoadingScreen.js";var AuthLoadingScreen=function(_Component){(0,_inherits2.default)(AuthLoadingScreen,_Component);function AuthLoadingScreen(props){var _this;(0,_classCallCheck2.default)(this,AuthLoadingScreen);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(AuthLoadingScreen).call(this,props));_this._bootstrapAsync=function _callee(){var isAuthenticated;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:isAuthenticated=!!_realm.default.Sync.User.current;_this.props.navigation.navigate(isAuthenticated?'App':'Auth');case 2:case"end":return _context.stop();}}});};_this._bootstrapAsync();return _this;}(0,_createClass2.default)(AuthLoadingScreen,[{key:"userLogoutAll",value:function userLogoutAll(){var users=_realm.default.Sync.User.all;for(var key in users){var user=users[key];user.logout();}}},{key:"render",value:function render(){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:32}},_react.default.createElement(_reactNative.ActivityIndicator,{__source:{fileName:_jsxFileName,lineNumber:33}}),_react.default.createElement(_reactNative.StatusBar,{barStyle:"default",hidden:true,__source:{fileName:_jsxFileName,lineNumber:34}}));}}]);return AuthLoadingScreen;}(_react.Component);exports.default=AuthLoadingScreen;