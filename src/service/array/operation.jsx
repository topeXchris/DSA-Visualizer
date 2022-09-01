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
        if(index > arr.length)
        {
            return -2;

        }else{
            var j = 0;
            const len = array.length
            for(var i = len-1 ; i>=index; i--)
            {
                  array[len - j] = array[i]
                  console.log(array[len- j])
                  j++
            }
            return array[index] = elem;
        }
    }


}

export const pop = ()=>{


}