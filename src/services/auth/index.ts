import axios from "@/axios";
import {AuthNS} from "@/services/auth/type";

export class AuthService {
    static login = (data: AuthNS.LoginRequest): any => {
        return axios.post('/auth/login', data)
    }
    static register = (data: AuthNS.RegisterRequest) => {
        return axios.post('/auth/register', data)
    }
}