export class Movie{
    constructor(public title:string,
     public duration:string,
     public year:Date)
    {

    }
    get Date(): string{
        let retDate='';
        let tmp=this.year.getDate()+1;
        tmp<10?retDate='0'+tmp:retDate+=tmp;
        tmp=this.year.getMonth()+1;
        tmp<10?retDate+='-0'+tmp:retDate+='-'+tmp;
        retDate+='-'+this.year.getFullYear();
        return retDate;
    }
    getReqContent(reqLengh:number):string{
        return this.title.substring(0, reqLengh)+'...';
    }
}