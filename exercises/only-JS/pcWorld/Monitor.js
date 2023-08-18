class Monitor{

    static monitorCount = 0;

    constructor(brand, size){
        this._idMonitor = ++ Monitor.monitorCount;
        this._brand = brand;
        this._size = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }

    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return  this.idMonitor + ' ' +
        this.brand  + ' ' +
        this.size;
    }
}