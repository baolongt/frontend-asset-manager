import axios from "axios";

export const getLogin = async (formData) => {
	let url =
		process.env.REACT_APP_ENV.trim() === "dev"
			? process.env.REACT_APP_DEV_URL
			: process.env.REACT_APP_PROD_URL;
	url += "/auth/login";
	let response = await axios.post(url, {
		username: formData.username,
		password: formData.password
	});
	let data = await response.data;
	return data;
};
