import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "x-access-token": localStorage.getItem("user") ?? null,
    }
});

// export default {
//     install: (app) => {
//         app.config.globalProperties.$axios = { ...axiosInstance }
//     }
// }

export default {
    install (Vue) {
        Object.defineProperty(Vue.prototype, '$axios', { value: axiosInstance });
    }
}
