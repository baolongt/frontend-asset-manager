import { Route } from "react-router";
import ChangePass from "./components/ChangePassword";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./Home/Home";
function App() {
	return (
		<div>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
<<<<<<< HEAD
			<Route path="/home" component={Home} />
=======
			<Route path="/home" component={Home}/>
>>>>>>> 50f6415075b3d1aad3c24bdc47827035eb203f10
		</div>
	);
}

export default App;
