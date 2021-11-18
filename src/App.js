import { Route } from "react-router";
import { getLogin } from "./api/getLogin";
import Login from "./pages/Login/Login";

function App() {
	return <>{getLogin()}</>;
}

export default App;
