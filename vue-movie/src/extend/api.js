/*
 * @Author: doubleKang 
 * @Date: 2019-03-21 15:10:29 
 * @Last Modified by: doubleKang
 * @Last Modified time: 2019-03-21 15:44:39
 */
//window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');

let path = location.hostname === 'localhost'
    ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/'
    : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/';

let api = {

    /** 豆瓣电影API */
    inTheaters:'movie/in_theaters', // 获取正在热映电影列表 post
    search:'movie/search', // 查询电影 post
    subject:'movie/subject', // 电影详情 get

};

// for (let key in api) {
//     api[key] = path + api[key] + '?ticket=5f592f53-3db7-4206-9f9c-57ef097a4fad&domain=admin&isAjax=true';
// }

for (let key in api) {
    api[key] = path + api[key];
}


export default api;