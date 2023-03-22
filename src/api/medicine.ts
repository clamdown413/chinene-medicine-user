import request from '../utils/request'
export function selectAllMedicine() {
    return request({
        url: 'selectAll',
        method: 'POST',
    })
}
export function selectAllOrderByBuy() {
    return request({
        url: 'orderByBuy',
        method: 'POST',
    })
}
export function selectAllOrderBySale() {
    return request({
        url: 'orderBySale',
        method: 'POST',
    })
}
export function selectAllOrderByProfit() {
    return request({
        url: 'orderByProfit',
        method: 'POST',
    })
}

export function deleteMedicine(params: { id: number }) {
    return request({
        url: 'deleteMedicine',
        method: 'POST',
        data: params
    })
}

export function search(params: { string: string }) {
    return request({
        url: 'search',
        method: 'POST',
        data: params
    })
}

export function insert(params: { name: string, medicine_number: Number, last_data: string, buy_price: number, sale_price: number, grow_place: string }) {
    return request({
        url: 'insert',
        method: 'POST',
        data: params
    })
}
export function updated(params: { id: number, name: string, medicine_number: Number, last_data: string, buy_price: number, sale_price: number, grow_place: string }) {
    return request({
        url: 'updated',
        method: 'POST',
        data: params
    })
}

export function getMonthAndOperate(params: { id: number }) {

    return request({
        url: 'selectMedicineOperate',
        method: 'POST',
        data: params
    })
}

export function getMedicineInfoById(params: { id: number }) {
    return request({
        url: 'getMedicineInfoById',
        method: 'POST',
        data: params
    })
}

export function selectOperateById(params: { operate_id: number }) {
    return request({
        url: 'selectOperate',
        method: 'POST',
        data: params
    })
}

export function insertMedicineInfo(params: { name: string, medicine_number: number, last_data: string, buy_price: number, sale_price: number, grow_place: string, operate_mouth: string, operate_id: string }) {
    return request({
        url: 'insertTest',
        method: 'POST',
        data: params
    })
}
