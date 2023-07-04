import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'http://localhost:4000'
})
axiosInstance.interceptors.request.use((request)=>{
    const accessToken=sessionStorage.getItem('accessToken')
    console.log(accessToken);
    console.log('accessToken');
    request.headers['Authorization']=accessToken
    return request
})
export default axiosInstance
