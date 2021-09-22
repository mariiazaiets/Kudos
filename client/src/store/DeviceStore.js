import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerator'},
            {id: 1, name: 'Smartphone'},
        ];
        this._brands = [
            {id: 1, name: 'Refrigerator'},
            {id: 1, name: 'Smartphone'},
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(deices) {
        this._deices = deices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}