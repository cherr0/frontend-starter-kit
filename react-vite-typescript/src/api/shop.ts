import request from './index';

export function getProduct() {
    return request('https://codingapple1.github.io/shop/data2.json').then((v) => v.json);
}
