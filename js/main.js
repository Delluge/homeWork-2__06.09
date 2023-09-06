
let numbers1 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0){
        console.log(numbers1[i])
    }
}

let numbers = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый']
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[numbers.length - i])
}
