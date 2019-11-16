import { Product } from './product';

export class Order 
{
    public codeID: string;
    public items: Product[];
    public tableID: string;
    public state: OrderState;
    public timeLeft: string;
    public timestamp: number;

    private constructor()
    {
        this.codeID = Order.GenerateCodeID();
        this.items = [];
        this.tableID = '';
        this.state = OrderState.pending;
        this.timeLeft = '';
        this.timestamp = Date.now();
    }

    public static Create(tableID: string): Order
    {
        let newOrder = new Order();
        newOrder.tableID = tableID;
        return newOrder;
    }

    private static GenerateCodeID(): string
    {
        let code = '';
        let now = new Date();
        code += now.getDate();
        code += now.getHours();
        code += now.getMinutes();
        let number = Math.floor((Math.random() * 5) + 1)
        switch(number)
        {
            case 1:
                code += 'A';
                break;
            case 2:
                code += 'B';
                break;
            case 3:
                code += 'C';
                break;
            case 4:
                code += 'D';
                break;
            default:
                code += 'E';
                break;
        }
        return code;
    }
}

export enum OrderState
{
    pending = 'pending',
    cooking = 'cooking',
    readyToServe = 'ready to serve'
}