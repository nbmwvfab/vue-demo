/*

 */
import ajax from "@/api/ajax";
const BASE_URL="/api"
// export const reqAddress = (geohash) =>ajax( + `${BASE_URL}/position/${geohash}`)
export function reqAddress(geohash) {

   return {
      "code": 0,
      "data": {
         "address": "北京市昌平区337省道",
         "city": "北京市",
         "geohash": "40.10038,116.36867",
         "latitude": "40.10038",
         "longitude": "116.36867",
         "name": `昌平区北七家宏福科技园(337省道北)${geohash}`
      }
   }
}
// export const reqCategorys = () =>ajax(BASE_URL + '/index_category')
export function reqCategorys() {
   return{

   }

}


export const reqShops = ({longitude,latitude}) =>ajax(BASE_URL+'/shops',{longitude,latitude})
