import request from '../utils/request'
export function userLogin(params: { username: string, password: string }) {
    return request({
        url: 'userLogin',
        method: 'POST',
        data: params

    })
}

export function userRegister(params: { username: string, password: string }) {
    return request({
        url: 'register',
        method: 'POST',
        data: params

    })
}