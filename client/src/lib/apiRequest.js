import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-pfuh.onrender.com",
  withCredentials: true,
});

export default apiRequest;





// import axios from "axios";

// const apiRequest = axios.create({
//   baseURL: "http://localhost:8800/api"||"https://real-estate-pfuh.onrender.com",
//   withCredentials: true,
// });

// export default apiRequest;
// import axios from "axios";

// // Dynamically set the baseURL from environment variables, with a fallback to localhost
// const apiRequest = axios.create({
//   // baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8800/api",
//   baseURL:"http://localhost:8800/api",
//   withCredentials: true,
// });

// export default apiRequest;
