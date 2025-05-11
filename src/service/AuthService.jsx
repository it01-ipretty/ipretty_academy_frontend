import {AUTH_GET_ACTIVE_EMAIL_URL, AUTH_POST_LOG_OUT, AUTH_POST_LOGIN_URL, AUTH_POST_SIGNUP_URL, GET_ME_URL} from './constances';
import TemplateAxios from "academy/helpers/axios";

function login(reponse , error ,email, password, isAdminPage) {
    return TemplateAxios.axiosTemplate('post',AUTH_POST_LOGIN_URL, '', { email, password, isAdminPage}, reponse , error)
}

function signup(reponse , error ,email, password, phone, name) {
    return TemplateAxios.axiosTemplate('post', AUTH_POST_SIGNUP_URL , '', { email, password, phone, name}, reponse , error)
}

function SignupActive(reponse , error ,id, token) {
    return TemplateAxios.axiosTemplate('get', AUTH_GET_ACTIVE_EMAIL_URL , { id, token}, '', reponse , error)
}

function logout(responseCb, errorCb) {
    return TemplateAxios.axiosTemplate('get', AUTH_POST_LOG_OUT, '' , '', responseCb , errorCb)
}
//
// function profile(responseCb, errorCb) {
//     axios
//         .get(GET_ME_URL, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }
// function get_me(access_token, responseCb, errorCb) {
//     axios
//         .get(GET_ME_URL, xAuthToken())
//         .then(responseCb)
//         .catch(errorCb)
// }

const AuthService = {
    // login, logout , profile , get_me
    login , signup , logout, SignupActive
};

export default AuthService;
