import type { ProductI } from "./Product";

export interface ProductsI {
    products: ProductI[]
}
export type FilterT = {
    key: string;
    value: string[] | undefined;
}

export class Products implements ProductsI{
    constructor(private _products: ProductI[], private _activeFilters: FilterT[]) {}
    setProducts(products: ProductI[]){ 
        this._products = products.filter(p => {
            const discount = parseFloat(((p.price * p.discountPercentage * 0.01)).toFixed(2));
            const priceAfter = p.price - discount;
            p.priceAfterDiscount = priceAfter;
            return p;
        });
    }
    public get products() {
        return this._products;
    }
    public findProduct(id: number): ProductI {
        return this._products.filter(p => p.id === id)[0];
    }
    public get fiveBiggestDiscount() {
        return this._products.slice(0,5).sort((a,b) => a.priceAfterDiscount && b.priceAfterDiscount ? (b?.discountPercentage - a?.discountPercentage) : 0);
    }
    public get filters() {
        const forDeletion = ['description', 'price', 'id', 'thumbnail', 'priceAfterDiscount', 'discountPercentage', 'images', 'stock'];
        const f = Object.keys(this.products[0]).filter(el => !forDeletion.includes(el));
        return f.sort((a,b) => a.localeCompare(b));
    }

    public get activeFilters(): FilterT[] {
        return this._activeFilters;
    }
    public setActiveFilters(filter: FilterT) {
        console.log('filter :>> ', filter);
        const indexOfFilter = this._activeFilters.findIndex(f => f.key === filter.key);
        if(!filter.value) {
            this._activeFilters.splice(this._activeFilters.findIndex(el => el.key === filter.key && el.value === undefined),1);
            console.log('this._activeFilters :>> ', this._activeFilters);
            return;
        }
        if(indexOfFilter >= 0) {
            this._activeFilters.splice(indexOfFilter, 1, filter) ;
            console.log('this._activeFilters1111 :>> ', JSON.stringify(this._activeFilters)); 
            return;
        }
       
        this._activeFilters.push(filter);
     
    console.log('filter :>> ', filter);
    console.log('this._activeFilters2222s :>> ', JSON.stringify(this._activeFilters));
    }

}