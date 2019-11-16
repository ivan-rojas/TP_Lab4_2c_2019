export class Product 
{
    public codeID: string;
    public name: string;
    public pathImg: string;
    public price: number;

    constructor()
    {
        this.codeID = "";
        this.name = "";
        this.pathImg = "";
        this.price = -1;
    }

    public static Create(code: string, name: string, pathImg: string, price: number)
    {
        let newProd = new Product();
        newProd.codeID = code;
        newProd.name = name;
        newProd.pathImg = pathImg;
        newProd.price = price;
        return newProd;
    }
}