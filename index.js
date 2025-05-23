num1 = 10
num2 = 11
const button1 = document.querySelector('#temp')
button1.addEventListener('click', value)
function value(){
    numb1 = document.querySelector("#num1")
    numb2 = document.querySelector("#num2")
    num1 = numb1.value
    num2 = numb2.value
    symb = document.querySelector("#destvie")
    symbl = symb.value
    if(symbl == 1){
        Symbol = "*"
    }else if(symbl == 2){
        Symbol = '/'
    }else if(symbl == 3){
        Symbol = "+"
    }else if(symbl == 4){
        Symbol = "-"
    }
    schet()
}
function schet(){
if (Symbol == '*'){
   rezultat = parseInt(num1) * parseInt(num2) 
   console.log(`Сумма ${num1} * ${num2} = ${rezultat}`)
}else if (Symbol =='/'){
    rezultat = parseInt(num1) / parseInt(num2)
    console.log(`Сумма ${num1} / ${num2} = ${rezultat}`)
}else if (Symbol == '+'){
    rezultat = parseInt(num1) + parseInt(num2)
    console.log(`Сумма ${num1} + ${num2} = ${rezultat}`)
}else if (Symbol == '-'){
    rezultat = parseInt(num1) - parseInt(num2)
    console.log(`Сумма ${num1} - ${num2} = ${rezultat}`)
}}
