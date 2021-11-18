export const getLogin = () => {
	const getURL = () => {
		return process.env.REACT_APP_ENV.trim() === "dev" ? (
			<>{process.env.REACT_APP_DEV_URL}</>
		) : (
			<>{process.env.REACT_APP_PROD_URL}</>
		);
	};

	return getURL();
};
