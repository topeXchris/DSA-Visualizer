export const insert = (arr,elem = undefined,index=undefined)=>{
    if(elem === undefined)
    {
        return -1;
    }
    if(index === undefined)
    {
        return arr[arr.length] = elem
    }else{
        const array = arr;
        if(index >= arr.length)
        {
            return -2;

        }else{
            for(var i = index ; i<array.length; i++)
            {
                array[array.length-i] = array[array.length-1];
            }
        }
    }


}

export const pop = ()=>{

}