import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerators'},
            {id: 2, name: 'Smartphones'},
            {id: 3, name: 'Iphones'},
            {id: 4, name: 'TVs'},
            {id: 5, name: 'Freezers'},
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Meizu'},
            {id: 5, name: 'Huawei'},
            {id: 6, name: 'OnePlus'}
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 2, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 3, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
            {id: 4, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://www.ixbt.com/img/n1/news/2021/8/0/swappie-product-iphone-12-black_large.png'},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}