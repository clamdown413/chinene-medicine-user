import request from '../utils/request'
export function selectAllOperate() {
    return request({
        url: 'selectAllOperate',
        method: 'POST',
    })
}