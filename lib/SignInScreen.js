var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _realm=_interopRequireDefault(require("realm"));var _constants=require("../constants");var _schemas=require("../schemas");var _types=require("@babel/types");var _jsxFileName="C:\\Users\\q\\Documents\\GitHub\\Week4\\src\\SignInScreen.js";var SignInScreen=function(_Component){(0,_inherits2.default)(SignInScreen,_Component);function SignInScreen(props){var _this;(0,_classCallCheck2.default)(this,SignInScreen);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(SignInScreen).call(this,props));_this.onClickListener=function(viewId){_reactNative.Alert.alert("Alert","Button pressed "+viewId);};_this.state={email:"",password:""};_this.signIn=_this.signIn.bind((0,_assertThisInitialized2.default)(_this));_this.register=_this.register.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(SignInScreen,[{key:"signIn",value:function signIn(){var _this2=this;var creds=_realm.default.Sync.Credentials.usernamePassword(this.state.email,this.state.password,false);_realm.default.Sync.User.login(_constants.SERVER_URL,creds).then(function(user){var realm=new _realm.default({sync:{user:user,url:_constants.SERVER_URL},schema:[_schemas.User]});_this2.props.navigation.navigate('App');}).catch(function(error){_reactNative.Alert.alert('The provided credentials are invalid or the user does not exist.','',[{text:'OK',onPress:function onPress(){return console.log('OK Pressed');}}],{cancelable:false});});}},{key:"signOut",value:function signOut(){_realm.default.Sync.User.current.logout();this.props.navigation.navigate('Auth');}},{key:"register",value:function register(){var creds=_realm.default.Sync.Credentials.usernamePassword(this.state.email,this.state.password);_realm.default.Sync.User.login(_constants.SERVER_URL,creds);this.props.navigation.navigate('App');}},{key:"render",value:function render(){var _this3=this;return _react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:69}},_react.default.createElement(_reactNative.View,{style:styles.inputContainer,__source:{fileName:_jsxFileName,lineNumber:70}},_react.default.createElement(_reactNative.TextInput,{style:styles.inputs,placeholder:"Email",keyboardType:"email-address",underlineColorAndroid:"transparent",onChangeText:function onChangeText(email){return _this3.setState({email:email});},__source:{fileName:_jsxFileName,lineNumber:71}})),_react.default.createElement(_reactNative.View,{style:styles.inputContainer,__source:{fileName:_jsxFileName,lineNumber:78}},_react.default.createElement(_reactNative.TextInput,{style:styles.inputs,placeholder:"Password",secureTextEntry:true,underlineColorAndroid:"transparent",onChangeText:function onChangeText(password){return _this3.setState({password:password});},__source:{fileName:_jsxFileName,lineNumber:79}})),_react.default.createElement(_reactNative.TouchableHighlight,{style:[styles.buttonContainer,styles.loginButton],onPress:this.signIn.bind(this),__source:{fileName:_jsxFileName,lineNumber:86}},_react.default.createElement(_reactNative.Text,{style:styles.loginText,__source:{fileName:_jsxFileName,lineNumber:87}},"Login")),_react.default.createElement(_reactNative.TouchableHighlight,{style:styles.buttonContainer,onPress:function onPress(){return _this3.onClickListener('restore_password');},__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:91}},"Forgot your password?")),_react.default.createElement(_reactNative.TouchableHighlight,{style:styles.buttonContainer,onPress:this.register,__source:{fileName:_jsxFileName,lineNumber:94}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:95}},"Register")));}}]);return SignInScreen;}(_react.Component);exports.default=SignInScreen;var styles=_reactNative.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#DCDCDC'},inputContainer:{borderBottomColor:'#F5FCFF',backgroundColor:'#FFFFFF',borderRadius:30,borderBottomWidth:1,width:250,height:45,marginBottom:20,flexDirection:'row',alignItems:'center'},inputs:{height:45,marginLeft:16,borderBottomColor:'#FFFFFF',flex:1},buttonContainer:{height:45,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20,width:250,borderRadius:30},loginButton:{backgroundColor:"#00b5ec"},loginText:{color:'white'}});