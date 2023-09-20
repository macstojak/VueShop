export class CartStore implements Store {
    private _cart: ProductI[] = [];
    constructor() {
        super();
    }
    public addToCart(product: ProductI): void {
        this._cart.push(product);
    }
    public removeFromCart(productId: number) {
        this._cart.splice(this._cart.findIndex(productId),1);
    } 

}