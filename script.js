function randomnumber(min, max) {
    return Math.trunc(Math.random() * (max - min + 1) + min);
}

if (confirm("Сыграй в игру!")) {
    let num = randomnumber(1, 10);
    let result;
    let k = 0;

    while (k < 5) {
        result = prompt('Угадай число от 1 до 10');
        
        if (result === null) {
            break;
        }

        if (parseInt(result) === num) {
            k++;
            alert('Поздравляем! Ваш ответ ' + num + ' - верный. Число ваших попыток составило ' + k + '.');
            break;
        } else if (parseInt(result) < num) {
            k++;
            alert('Загаданное число больше ' + result + '!');
        } else if (parseInt(result) > num) {
            k++;
            alert('Загаданное число меньше ' + result + '!');
        } else {
            alert('"' + result + '" - это не число! Попробуй ввести еще раз.');
        }
    }

    if (k >= 5) {
        alert('Попытки закончились. Это было число ' + num + '! Попробовать еще раз?');
    }
}