const addNumbers = (inputstring: string)  => {
    const listOfLetters = inputstring.split(',')
    let total = 0
    listOfLetters.forEach((ele)=>{
        if(!isNaN(Number(ele))){
            total = total+Number(ele)
        }

    }) 
    return total
}

export default addNumbers