export class Table 
{
    public id: string;
    public state: TableState;
}

export enum TableState
{
    waitingOrder = 'client waiting for order',
    eating = 'client eating',
    paying = 'client paying',
    closed = 'closed'
}