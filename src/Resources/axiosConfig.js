import axios from "axios";

// const axiosBase = axios.create({ baseURL: "http://localhost:5500/api" });
// export default axiosBase;

// export default axiosBase;

const axiosBase = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

export default axiosBase;
