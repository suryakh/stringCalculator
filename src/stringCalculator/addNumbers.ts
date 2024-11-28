const addNumbers = (inputString: string)  => {
    //removed \n from given string 
    let  newLineFreeString = inputString.replace(/[\n\r\t]/gm,'')
    if(newLineFreeString.slice(0,2) == '//'){
        let delimiter = ''; 
        for(let i = 2; i<newLineFreeString.length ; i++){
            if(isNaN(Number(newLineFreeString[i]))){
                delimiter = newLineFreeString[i]
            }else {
                break;
            }
        }
        const listOfLetters = newLineFreeString.split(delimiter)
        let total = 0
        listOfLetters.forEach((ele)=>{
            if(!isNaN(Number(ele))){
                total = total+Number(ele)
            }
            
        }) 
        return total
    } else {

        const listOfLetters = newLineFreeString.split(',')
        let total = 0
        listOfLetters.forEach((ele)=>{
            if(!isNaN(Number(ele))){
                total = total+Number(ele)
            }
            
        }) 
        return total
    }
}

export default addNumbers