import instance from './index';
// 导航栏接口
export const getNav = () => instance.get('home/category/head');
// 轮播图接口
export const getBanner = () => instance.get('home/banner');
// 新鲜好物
export const getNew = () => instance.get('home/new');
