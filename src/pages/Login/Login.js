import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [info, setInfo] = useState({
		username: "",
		password: ""
	});

	return (
		<div className="flex">
			<div className="flex flex-column mx-auto bg-white w-25 p-3">
				<p class="h3 text-g">Log in</p>
				<div>
					<label className="form-label text-secondary" htmlFor="username">
						Username
					</label>
					<input
						class="form-control"
						onChange={(e) => setInfo({ ...info, username: e.target.value })}
						type="text"
						value={info.username}
						id="username"
					/>
				</div>
				<div className="flex flex-column mt-2">
					<label className="form-label text-secondary" htmlFor="password">
						Password
					</label>
					<input
						class="form-control"
						onChange={(e) => setInfo({ ...info, password: e.target.value })}
						type="password"
						value={info.password}
						id="password"
					/>
				</div>
				<div className="mt-3">
					<button className="ms-3 btn btn-danger">Log in</button>
					<Link className="mt-4 ms-3 text-decoration-none" to="/forgot">
						Forgot password?
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
