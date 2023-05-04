//exercise 1
//tell if a number can be divided by ten
function divisiblebyten(number){
    return number%10==0;

}
//define a number and the function will tell you if a number can be divided by ten
let number=2
let divisiblebyten2 =divisiblebyten(number)
console.log(divisiblebyten(number))

let number2=50
console.log(divisiblebyten(number2))


//execrcise 2
//In JavaScript, the dollar sign ($) is used as a special character  to enable embedding expressions inside a string

function tellFortune2(n,z,y,x){
    let sentence=`Vei fi un ${x} în ${y} căsătorit cu ${z} și vei avea ${n} copii.`
    console.log(sentence)
}

tellFortune2(3,"Emanuel","Italia","Programator")
//This was an exercise using the dollar sign


//exercise 3

function tellmethemonth(month){

    switch(month){
        case 1:
            console.log("It is January")
            break
        
        case 2:
            console.log("It is February")
            break

        case 3:
            console.log("It is March")
            break

        case 4:
            console.log("It is April")
            break
        
        case 5:

            console.log("It is May")
            break
        
        case 6:
            console.log("It is June")
            break
        
        case 7:
            console.log("It is July")
            break

        case 8:
            console.log("It is August")
            break

        case 9:
            console.log("It is September")
            break
        case 10:
            console.log("It is October")
            break

        case 11:
            console.log("It is November")
            break

        case 12:
            console.log("It is December")
            break
        default:
            console.log("Insert the number of the month")
            
    }
}

//insert the number of the month and it will tell you the month
tellmethemonth(12)

