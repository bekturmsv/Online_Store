import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor(){
        this._types = [
            {id:1,name:"Холодильники"},
            {id:2,name:"Смартфоны"}
        ]
        this._brands = [
            {id:1,name:"Samsung"},
            {id:2,name:"Apple"}
        ]
        this._devices = [
            {id:1,name:"Iphone 12 Pro",price:25000,rating: 5, img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
            {id:2,name:"Iphone 12 Pro",price:25000,rating: 5, img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
            {id:3,name:"Iphone 12 Pro",price:25000,rating: 5, img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
            {id:4,name:"Iphone 12 Pro",price:25000,rating: 5, img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}