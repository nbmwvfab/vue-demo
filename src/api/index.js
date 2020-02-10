/*

 */
import ajax from "./ajax";

// const BASE_URL="/api"
const BASE_URL="/mock/api"
export const reqAddress = (geohash) =>ajax( `${BASE_URL}/position/${geohash}`)

export const reqCategorys = () =>ajax(BASE_URL + '/index_category')

export const reqShops = ({longitude,latitude}) =>ajax(BASE_URL+'/shops',{longitude,latitude})

