/*

 */
import ajax from "./ajax";

// const BASE_URL="/api"
const BASE_URL="/mock/api"
export const reqAddress = (geohash) =>ajax( `${BASE_URL}/position/${geohash}`)

export const reqCategorys = () =>ajax(BASE_URL + '/index_category')

export const reqShops = ({longitude,latitude}) =>ajax(BASE_URL+'/shops',{longitude,latitude})

export function reqLoginMessage({phone,code}) {
    return ajax(BASE_URL+'/login_sms',{phone,code},'Post')
}
export const reqSendCode =(phone) =>ajax(BASE_URL + '/sendcode',{phone})

