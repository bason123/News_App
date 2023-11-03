import AxiosInstance from "../../http/AxiosInstance";

export const login = async (email, password) => {
    try {
        const axiosInstance = AxiosInstance();
        const url = '/auth/login';
        const body = {
            email: email, 
            password: password,
        }
        return await axiosInstance.post(url, body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const signup = async (email, password) =>{
    try {
        const axiosInstance = AxiosInstance();
        const url= '/users/register'
        const body ={
            email: email, 
            password: password,
        }
        return await axiosInstance.post(url, body)
    } catch (error) {
        console.log(error);
        throw error;
    }
}
