import { AxiosError, AxiosResponse } from "axios";
import apiClient from "./apiClient";

export type AuthServiceLoginCredentials = {
    email: string;
    password: string;
};

const handleAxiosResponse = <T>(response: AxiosResponse<T>) => {
    return {
        data: response.data,
        xhr: () => response,
    };
};

const handleAxiosError = (error: AxiosError<{ message?: string }>) => {
    var obj = {
        message: error.response?.data?.message || error.message,
        data: error.response?.data,
        xhr: () => error.response,
    };
    var err = new Error();
    Object.assign(err, obj);

    throw err;
};

const handleAxiosRequest = <T>(request: Promise<AxiosResponse<T>>) => {
    return request.then(handleAxiosResponse).catch(handleAxiosError);
};

class AuthService {
    static login(credentials: AuthServiceLoginCredentials) {
        return handleAxiosRequest(
            apiClient.post<{ user: object }>("/auth/login", credentials)
        );
    }
}

export default AuthService;
