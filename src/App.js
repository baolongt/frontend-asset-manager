import { Route } from "react-router";
import { getLogin } from "./api/getLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
	return (
		<>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</>
	);
}

export default App;
