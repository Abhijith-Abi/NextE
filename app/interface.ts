export interface simplifiedProduct {
    _id: string;
    ImageUrl: string;
    price: number;
    name: string;
    Slug: string;
    CategoryName: string;
}

export interface fullProduct {
    _id: string;
    image: any;
    price: number;
    name: string;
    Slug: string;
    CategoryName: string;
    discription: string;
}
