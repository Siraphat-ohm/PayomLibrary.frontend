import { axiosPrivate } from "../../config/baseAxios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth, setAuth } = useAuth();

    useEffect( () => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            async(config:any) => {
                if (!config.headers['Authorization']) {
                    const newAccessToken = await refresh();
                    config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    setAuth(!!newAccessToken)
                }
                return config;
            },(err) => Promise.reject(err)
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (err) => {
                const prevRequest = err?.config;
                if (err?.response?.static === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorizatoin'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
            }
        )
            return () => {
                axiosPrivate.interceptors.request.eject(requestIntercept);
                axiosPrivate.interceptors.response.eject(responseIntercept);
            }
    }, [auth, refresh])

    return axiosPrivate

}

export default useAxiosPrivate;
