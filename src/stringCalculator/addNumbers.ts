const addNumbers = (inputString: string)  => {
    //removed \n from given string 
    let  newLineFreeString = inputString.replace(/[\n\r\t]/gm,'')

    const listOfLetters = newLineFreeString.split(',')
    let total = 0
    listOfLetters.forEach((ele)=>{
        if(!isNaN(Number(ele))){
            total = total+Number(ele)
        }

    }) 
    return total
}

export default addNumbers