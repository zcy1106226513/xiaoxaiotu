import instance from './index';

export const login = (obj) => instance.post('login', obj);
