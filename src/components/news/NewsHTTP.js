import AxiosInstance from "../../http/AxiosInstance";

export const getNews = async () =>{
    try {
        const axiosInstance = AxiosInstance();
        const url = '/articles';
        return await axiosInstance.get(url);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getNewsDetail = async (id) =>{
    try{
        const axiosInstance = AxiosInstance();
        const url = `/articles/${id}/detail`;
        return await axiosInstance.get(url);
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const setPersonInformation = async (name, address, phone, avatar, dob,createdAt) =>{
    try {
        const axiosInstance = AxiosInstance();
        const url = '/users/update-profile';
        const body = {
            name: name,
            address: address,
            phone: phone,
            avatar: avatar,
            dob:dob,
            createdAt:createdAt,
        }
        return await axiosInstance.post(url, body)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getNewsSearch = async (keyword) => {
    try {
        const axiosInstance = AxiosInstance();
        const url = `/articles/search?title=${keyword}`;
        return await axiosInstance.get(url);
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getUpdateImage = async (form) =>{
    try {
        const axiosInstance = AxiosInstance('multipart/form-data');
        const url ='/media/upload';
        return await axiosInstance.post(url,form)
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAddArticles = async (title, content, image) =>{
    try {
        const axiosInstance = AxiosInstance();
        const url = '/articles';
        body = {
            title:title,
            content:content,
            image:image
        };
        return await axiosInstance.post(url, body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}