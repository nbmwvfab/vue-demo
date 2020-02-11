import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口

Mock.mock(/\/mock\/api\/position\/[\s\S]*/, {code: 0, data: data.address})
Mock.mock('/mock/api/index_category', {code: 0, data: data.categorys})
Mock.mock(RegExp(/\/mock\/api\/shops[\s\S]*?/), "get", {code: 0, data: data.shops})

Mock.mock(RegExp(/\/mock\/api\/sendcode[\s\S]*?/), "get", {code: 0})
Mock.mock('/mock/api/login_sms', 'post', {code: 0, data: data.userInfo})
Mock.mock('/mock/api/login_pwd', 'post', {code: 0, data: data.userInfo})

