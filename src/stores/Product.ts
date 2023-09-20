export interface ExtendedProductI {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductI extends ExtendedProductI {
    priceAfterDiscount: number | undefined;
}

export class Product implements ProductI {
    constructor(id: number, title: string, description: string, price: number, 
        discountPercentage: number, rating: number, stock: number, brand: string,
        category: string, thumbnail: string, images: string[], priceAfterDiscount?: number | undefined){
            this.id = id;
            this.title = title;
            this.description = description;
            this.price = price;
            this.discountPercentage = discountPercentage;
            this.rating = rating;
            this.stock = stock;
            this.brand = brand;
            this.category = category;
            this.thumbnail = thumbnail;
            this.images = images;
            this.priceAfterDiscount = priceAfterDiscount;
        }
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discountPercentage: number;
    public rating: number;
    public stock: number;
    public brand: string;
    public category: string;
    public thumbnail: string;
    public images: string[];
    public priceAfterDiscount: number | undefined;

}