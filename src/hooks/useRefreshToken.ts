import axios from '../config/baseAxios';

const useRefreshToken = () => {
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;