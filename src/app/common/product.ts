export class Product {
    public id: number;
    public sku: string;
    public name: string;
    public description: string;
    public unitPrice: number;
    public imageUrl: string;
    public active: boolean;
    public unitsInStock: number;
    public createdOn: Date;
    public updatedOn: Date;

    constructor(
        id: number,
        sku: string,
        name: string,
        description: string,
        unitPrice: number,
        imageUrl: string,
        active: boolean,
        unitsInStock: number,
        createdOn: Date,
        updatedOn: Date
      ) {
        this.id = id;
        this.sku = sku;
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.imageUrl = imageUrl;
        this.active = active;
        this.unitsInStock = unitsInStock;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
      }


}
