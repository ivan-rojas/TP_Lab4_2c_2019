export class CommonHelper 
{
    public static ConvertToObject(obj: any): Object
    {
        return JSON.parse(JSON.stringify(obj));
    }
}
