import { Route } from "react-router";
import { getLogin } from "./api/getLogin";
import ChangePass from "./components/ChangePassword";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./App.css"
import Home from "./Home/Home";
function App() {
	return (
		<div className="App">
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/authenticate/changePass" component={ChangePass}/>
			<Route path="/home" component={Home}/>
		</div>
	);
}

export default App;
