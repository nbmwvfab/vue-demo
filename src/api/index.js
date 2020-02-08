/*

 */
// import ajax from "@/api/ajax";
// const BASE_URL="/api"
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
      "code": 0,
      data: [
         {
            id: 1,
            is_in_serving: true,
            description: "特步-春季焕新",
            title: "无处不仿古",
            link: "",
            image_url: "./images/nav/1.jpg",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 2,
            is_in_serving: true,
            description: "萍全棉时代-全棉品",
            title: "seaweed",
            image_url: "./images/nav/2.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },

         {
            id: 3,
            is_in_serving: true,
            description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
            title: "Spring Boot",
            image_url: "./images/nav/3.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 4,
            is_in_serving: true,
            description: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
            title: "Spring Framework",
            image_url: "./images/nav/4.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 5,
            is_in_serving: true,
            description: "An orchestration service for composable data microservice applications on modern runtimes.",
            title: "Spring Cloud Data Flow",
            image_url: "./images/nav/5.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 6,
            is_in_serving: true,
            description: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
            title: "Spring Cloud",
            image_url: "./images/nav/6.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 7,
            is_in_serving: true,
            description: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
            title: "Spring Data",
            image_url: "./images/nav/7.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 8,
            is_in_serving: true,
            description: "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters.",
            title: "Spring Integration",
            image_url: "./images/nav/8.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 9,
            is_in_serving: true,
            description: "Simplifies and optimizes the work of processing high-volume batch operations.",
            title: "Spring Batch",
            image_url: "./images/nav/9.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 10,
            is_in_serving: true,
            description: "Protects your application with comprehensive and extensible authentication and authorization support.",
            title: "Simplifies",
            image_url: "./images/nav/10.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 11,
            is_in_serving: true,
            description: "Simplifies creating REST representations that follow the HATEOAS principle.",
            title: "Spring HATEOAS",
            image_url: "./images/nav/11.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 12,
            is_in_serving: true,
            description: "Document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC Test or REST Assured.",
            title: "Spring REST Docs",
            image_url: "./images/nav/12.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 13,
            is_in_serving: true,
            description: "Applies core Spring concepts to the development of AMQP-based messaging solutions.",
            title: "Spring AMQP",
            image_url: "./images/nav/13.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 14,
            is_in_serving: true,
            description: "Simplifies the development of mobile web apps through device detection and progressive rendering options.",
            title: "Spring Mobile",
            image_url: "./images/nav/14.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 15,
            is_in_serving: true,
            description: "Provides key Spring components for use in developing Android applications.",
            title: "Spring for Android",
            image_url: "./images/nav/15.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 16,
            is_in_serving: true,
            description: "Supports building web applications with controlled navigation such as checking in for a flight or applying for a loan.",
            title: "Spring Web Flow",
            image_url: "./images/nav/16.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
         {
            id: 17,
            is_in_serving: true,
            description: "Facilitates the development of contract-first SOAP web services.",
            title: "Spring Web Services",
            image_url: "./images/nav/17.jpg",
            link: "",
            icon_url: "",
            title_color: "",
            __v: 0
         },
      ]
   }

}


// export const reqShops = ({longitude,latitude}) =>ajax(BASE_URL+'/shops',{longitude,latitude})
export function reqShops({longitude,latitude}){
   return {
      "code": 0,
      data: [
         {
            name: "肯德基",
            address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
            id: 1,
            latitude: longitude,
            longitude: latitude,
            location: [
               121.50146,
               31.38098
            ],
            phone: "1232313124324",
            category: "快餐便当/简餐",
            supports: [
               {

                  description: "已加入“外卖保”计划，食品安全有保障",
                  icon_color: "999999",
                  icon_name: "保",
                  id: 7,
                  name: "外卖保",
                  _id: "591bec73c2bbc84a6328a1e5"
               }
            ],
            status: 0,
            recent_order_num: 615,
            rating_count: 389,
            rating: 2.6,
            promotion_info: "他依然有人有人有人有人有人",
            piecewise_agent_fee: {
               tips: "配送费约¥5"
            },
            opening_hours: [
               "8:30/20:30"
            ],
            license: {
               catering_service_license_image: "",
               business_license_image: ""
            },
            is_new: true,
            is_premium: true,
            image_path: require("../components/ShopList/images/shop/1.jpg"),
            identification: {
               registered_number: "",
               registered_address: "",
               operation_period: "",
               licenses_scope: "",
               licenses_number: "",
               licenses_date: "",
               legal_person: "",
               identificate_date: null,
               identificate_agency: "",
               company_name: ""
            },
            float_minimum_order_amount: 20,
            float_delivery_fee: 5,
            distance: "19.5公里",
            order_lead_time: "40分钟",
            description: "好吃的",
            delivery_mode: {
               color: "57A9FF",
               id: 1,
               is_solid: true,
               text: "蜂鸟专送"
            },
            activities: [
               {
                  icon_name: "减",
                  name: "满减优惠",
                  description: "满30减5，满60减8",
                  icon_color: "f07373",
                  id: 1,
                  _id: "591bec73c2bbc84a6328a1e7"
               }
            ],
         },
         {
            name: "麦当劳",
            address: "上海市宝山区淞宝路",
            id: 2,
            latitude: longitude,
            longitude: latitude,
            location: [
               121.50146,
               31.38098
            ],
            phone: "12312345678",
            category: "快餐便当/简餐",
            supports: [
               {

                  description: "已加入“外卖保”计划，食品安全有保障",
                  icon_color: "999999",
                  icon_name: "保",
                  id: 7,
                  name: "外卖保",
                  _id: "591bec73c2bbc84a6328a1e5"
               }
            ],
            status: 0,
            recent_order_num: 615,
            rating_count: 389,
            rating: 4.2,
            promotion_info: "他依然有人有人有人有人有人",
            piecewise_agent_fee: {
               tips: "配送费约¥5"
            },
            opening_hours: [
               "8:30/20:30"
            ],
            license: {
               catering_service_license_image: "",
               business_license_image: ""
            },
            is_new: true,
            is_premium: true,
            image_path: require("../components/ShopList/images/shop/2.jpg"),
            identification: {
               registered_number: "",
               registered_address: "",
               operation_period: "",
               licenses_scope: "",
               licenses_number: "",
               licenses_date: "",
               legal_person: "",
               identificate_date: null,
               identificate_agency: "",
               company_name: ""
            },
            float_minimum_order_amount: 20,
            float_delivery_fee: 5,
            distance: "19.5公里",
            order_lead_time: "40分钟",
            description: "好吃的",
            delivery_mode: {
               color: "57A9FF",
               id: 1,
               is_solid: true,
               text: "蜂鸟专送"
            },
            activities: [
               {
                  icon_name: "减",
                  name: "满减优惠",
                  description: "满30减5，满60减8",
                  icon_color: "f07373",
                  id: 1,
                  _id: "591bec73c2bbc84a6328a1e7"
               }
            ],
         },
         {
            name: "西贝",
            address: "上海市宝山区淞宝路",
            id: 3,
            latitude: longitude,
            longitude: latitude,
            location: [
               121.50146,
               31.38098
            ],
            phone: "12312345678",
            category: "快餐便当/简餐",
            supports: [
               {

                  description: "已加入“外卖保”计划，食品安全有保障",
                  icon_color: "999999",
                  icon_name: "保",
                  id: 7,
                  name: "外卖保",
                  _id: "591bec73c2bbc84a6328a1e5"
               }
            ],
            status: 0,
            recent_order_num: 615,
            rating_count: 389,
            rating: 3,
            promotion_info: "他依然有人有人有人有人有人",
            piecewise_agent_fee: {
               tips: "配送费约¥5"
            },
            opening_hours: [
               "8:30/20:30"
            ],
            license: {
               catering_service_license_image: "",
               business_license_image: ""
            },
            is_new: true,
            is_premium: true,
            image_path: require("../components/ShopList/images/shop/3.jpg"),
            identification: {
               registered_number: "",
               registered_address: "",
               operation_period: "",
               licenses_scope: "",
               licenses_number: "",
               licenses_date: "",
               legal_person: "",
               identificate_date: null,
               identificate_agency: "",
               company_name: ""
            },
            float_minimum_order_amount: 20,
            float_delivery_fee: 5,
            distance: "19.5公里",
            order_lead_time: "40分钟",
            description: "好吃的",
            delivery_mode: {
               color: "57A9FF",
               id: 1,
               is_solid: true,
               text: "蜂鸟专送"
            },
            activities: [
               {
                  icon_name: "减",
                  name: "满减优惠",
                  description: "满30减5，满60减8",
                  icon_color: "f07373",
                  id: 1,
                  _id: "591bec73c2bbc84a6328a1e7"
               }
            ],
         },
         {
            name: "来一份",
            address: "上海市宝山区淞宝路",
            id: 4,
            latitude: longitude,
            longitude: latitude,
            location: [
               121.50146,
               31.38098
            ],
            phone: "12312345678",
            category: "快餐便当/简餐",
            supports: [
               {

                  description: "已加入“外卖保”计划，食品安全有保障",
                  icon_color: "999999",
                  icon_name: "保",
                  id: 7,
                  name: "外卖保",
                  _id: "591bec73c2bbc84a6328a1e5"
               }
            ],
            status: 0,
            recent_order_num: 615,
            rating_count: 389,
            rating: 1.6,
            promotion_info: "他依然有人有人有人有人有人",
            piecewise_agent_fee: {
               tips: "配送费约¥5"
            },
            opening_hours: [
               "8:30/20:30"
            ],
            license: {
               catering_service_license_image: "",
               business_license_image: ""
            },
            is_new: true,
            is_premium: true,
            image_path: require("../components/ShopList/images/shop/4.jpg"),
            identification: {
               registered_number: "",
               registered_address: "",
               operation_period: "",
               licenses_scope: "",
               licenses_number: "",
               licenses_date: "",
               legal_person: "",
               identificate_date: null,
               identificate_agency: "",
               company_name: ""
            },
            float_minimum_order_amount: 20,
            float_delivery_fee: 5,
            distance: "19.5公里",
            order_lead_time: "40分钟",
            description: "好吃的",
            delivery_mode: {
               color: "57A9FF",
               id: 1,
               is_solid: true,
               text: "蜂鸟专送"
            },
            activities: [
               {
                  icon_name: "减",
                  name: "满减优惠",
                  description: "满30减5，满60减8",
                  icon_color: "f07373",
                  id: 1,
                  _id: "591bec73c2bbc84a6328a1e7"
               }
            ],
         }
      ]
   }
}