const getResult = (givenString: string,delimiter: string ) => {
    const listOfLetters = givenString.split(delimiter)
        let total = 0
        const negativeNumbersList: number[] = [] 
        listOfLetters.forEach((letter)=>{
            if(!isNaN(Number(letter))){
                if(Number(letter) < 0 ){
                    negativeNumbersList.push(Number(letter))
                 }
                 else if(Number(letter) <= 1000) {
                     total = total+Number(letter)
                 }
            }
            
        }) 
        if(negativeNumbersList.length > 0 ) {
            throw new Error(`negative numbers not allowed ${negativeNumbersList.join(',')}`)
        } else{
            return total
        }
}



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
        return getResult(newLineFreeString,delimiter)
    } else {
        return getResult(newLineFreeString,',')
    }
}

export default addNumbers