import axios from "axios";

const baseUrl = "http://82.115.20.169:8000/";

// const baseUrl = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: baseUrl,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(baseUrl + "auth/jwt/refresh/", {
          refresh: refreshToken,
        });
        const { access } = response.data;

        localStorage.setItem("token", access);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `JWT ${access}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  }
);

export default api;
