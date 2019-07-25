var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.LoginForm=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeRouterFlux=require("react-native-router-flux");var _realm=_interopRequireDefault(require("realm"));var _constants=require("../constants");var _schemas=require("../schemas");var _Button=require("./Button");var _ModalView=require("./ModalView");var _jsxFileName="C:\\Users\\q\\Documents\\GitHub\\Week4\\src\\LoginForm.js";var styles=_reactNative.StyleSheet.create({container:{flex:1,justifyContent:"center",alignItems:"center"},buttons:{flex:1,justifyContent:"center",alignItems:"center"}});var LoginForm=function(_Component){(0,_inherits2.default)(LoginForm,_Component);function LoginForm(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,LoginForm);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(LoginForm)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.state={};_this.handleSubmit=function _callee(nickname){var user;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_this.setState({error:undefined});_context.next=4;return _regenerator.default.awrap(_realm.default.Sync.User.registerWithProvider(_constants.SERVER_URL,{provider:"nickname",providerToken:nickname}));case 4:user=_context.sent;_this.setState({isModalVisible:false});_this.onAuthenticated(user);_context.next=12;break;case 9:_context.prev=9;_context.t0=_context["catch"](0);_this.setState({isModalVisible:true,error:_context.t0});case 12:case"end":return _context.stop();}}},null,null,[[0,9]]);};return _this;}(0,_createClass2.default)(LoginForm,[{key:"componentDidMount",value:function componentDidMount(){if(_realm.default.Sync.User.current){this.onAuthenticated(_realm.default.Sync.User.current);}else{this.setState({isModalVisible:true});}}},{key:"render",value:function render(){var isAuthenticated=!!_realm.default.Sync.User.current;return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:43}},_react.default.createElement(_ModalView.ModalView,{placeholder:"Please Enter a Username",confirmLabel:"Login",isModalVisible:!isAuthenticated,handleSubmit:this.handleSubmit,error:this.state.error,__source:{fileName:_jsxFileName,lineNumber:44}}));}},{key:"onAuthenticated",value:function onAuthenticated(user){var config=user.createConfiguration({schema:[_schemas.Project,_schemas.Item]});var realm=new _realm.default(config);_reactNativeRouterFlux.Actions.authenticated({user:user,realm:realm});}}]);return LoginForm;}(_react.Component);exports.LoginForm=LoginForm;