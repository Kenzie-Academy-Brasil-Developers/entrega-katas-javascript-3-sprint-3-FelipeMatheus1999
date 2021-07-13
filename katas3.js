const sampleArray = [469, 755, 244, 245, 758, 450,
                     302, 20, 712, 71, 456, 21, 398,
                      339, 882, 848, 179, 535, 940, 472];


const destination = document.getElementById('root');

function showResults(dados) {
    const paragraph = document.createElement('p');
    paragraph.innerText = dados;
    destination.appendChild(paragraph);
}

// criar função para adicionar h1 => katas1, katas2, katas3...

function kata1() {
    // implemente o código do kata 1 aqui
    let array = [];

    for (let i = 1; i < 26; i++) {
        array.push(i);
    }
    let string = array.join(', ');
    
    return string;
}

showResults(kata1());

function kata2() {
    // implemente o código do kata 2 aqui
    let array = [];

    for (let i = 25; i > 0; i--) {
        array.push(i);  
    }
    let string = array.join(', ');
    
    return string;
}

showResults(kata2());

function kata3() {
    // implemente o código do kata 3 aqui
    let array = [];

    for (let i = -1; i > -26; i--) {
        array.push(i);
    }
    let string = array.join(', ');
    
    return string;
}

showResults(kata3());

function kata4() {
    // implemente o código do kata 4 aqui
    let array = [];

    for (let i = -25; i < 0; i++) {
        array.push(i);
    }
    let string = array.join(', ');
   
    return string;
}

showResults(kata4());

function kata5() {
    // implemente o código do kata 5 aqui
    let array1 = [];
    let array2 = [];

    for (let i = 25; i > 0; i = i - 2) {
        array1.push(i);
        array2.unshift(i * (-1));
    }
    let array3 = array1.concat(array2)
    let string = array3.join(', ')

    return string;
}

showResults(kata5());

function kata6() {
    // implemente o código do kata 6 aqui
    let array = [];

    for (let i = 1; i < 101; i++) {
        
        if ( i % 3 === 0) {
            array.push(i)
        }
    }
    let string = array.join(', ')
    
    return string;
}

showResults(kata6());

function kata7() {
    // implemente o código do kata 7 aqui
    let array = [];

    for (let i = 1; i < 101; i++) {

        if (i % 7 === 0) {
            array.push(i);
        }
    }
    let string = array.join(', ');
   
    return string;
}

showResults(kata7());

function kata8() {
    // implemente o código do kata 8 aqui
    let array = [];

    for (let i = 100; i > 0; i--) {
        
        if (i % 3 === 0 || i % 7 === 0) {
            array.push(i);
        }
    }
    let string = array.join(', ');
    
    return string;
}

showResults(kata8());

function kata9() {
    // implemente o código do kata 9 aqui
    let array = [];

    for (let i = 1; i < 100; i = i + 2) {

        if (i % 5 === 0) {
            array.push(i);
        }
    }
    let string = array.join(', ');
    
    return string;
}

showResults(kata9());

function kata10() {
    // implemente o código do kata 10 aqui
    let array = [];

    for (let i = 0; i < sampleArray.length; i++) {
        array.push(sampleArray[i]);
    }
    let string = array.join(', ');

    return string;
}

showResults(kata10());

function kata11() {
    // implemente o código do kata 11 aqui
    let array = [];

    for (let i = 0; i < sampleArray.length; i ++) {

        if (sampleArray[i] % 2 === 0) {
            array.push(sampleArray[i]);
        }
    }
    let string = array.join(', ');

    return string;
}

showResults(kata11());


function kata12() {
    // implemente o código do kata 12 aqui
    let array = [];

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 !== 0) {
            array.push(sampleArray[i]);
        }
    }
    let string = array.join(', ');

    return string;
}

showResults(kata12());

function kata13() {
    // implemente o código do kata 13 aqui
    let array = [];

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 8 === 0) {
            array.push(sampleArray[i]);
        }
    }
    let string = array.join(', ');

    return string;
}

showResults(kata13());

function kata14() {
    // implemente o código do kata 14 aqui
    let array = [];

    for (let i = 0; i < sampleArray.length; i++) {
        array.push(sampleArray[i] ** 2);
    }
    let string = array.join(', ');

    return string;
}

showResults(kata14());

function kata15() {
    // implemente o código do kata 15 aqui
    let sum = 0

    for (let i = 1; i < 21; i++) {
        sum += i;
    }
    return sum;
}

showResults(kata15());

function kata16() {
    // implemente o código do kata 16 aqui
    let sum = 0;

    for (let i = 0; i < sampleArray.length; i ++) {
        sum += sampleArray[i];
    }
    return sum;
}

showResults(kata16());

function kata17() {
    // implemente o código do kata 17 aqui
    let less = [];
    less = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < less) {
            less = sampleArray[i];
        }
    }
    return less;
}

showResults(kata17());

function kata18() {
    // implemente o código do kata 18 aqui
    let major = [];
    major = sampleArray[0];

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > major) {
            major = sampleArray[i];
        }
    }
    return major;
}

showResults(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
