function playArray() {
    let arrColors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
    let text = "<p>";
    // comprova tots són menor a marró
    let esMenor = arrColors.every(menorQueMarro);
    text += "<strong>Comprova si tots són menors a marró: </strong>"+esMenor+"<br>";
    // retorna els colors menors que marró
    let menorsAMarro = arrColors.filter(retornaMenor);
    text += "<strong>Retorna els colors menors a marró: </strong>"+menorsAMarro+"<br>";

    // torna els darrers 2 colors
    let dosUltims = arrColors.slice(-2);
    text += "<strong>Retorna els darrers 2 colors: </strong>"+dosUltims+"<br>";

    // afegeix el color turquesa
    arrColors.push("turquesa");
    text += "<strong>Afegeix el color turquesa: </strong>"+arrColors+"<br>";

    // elimina el color verd
    arrColors.splice(arrColors.indexOf("verd"), 1);
    text += "<strong>Elimina el color verd: </strong>"+arrColors+"<br></p>";
    
    // escriu en la página web
    document.writeln(text);
}

function menorQueMarro(color) {
    return 'marró'> color; 
}
function retornaMenor(color) {
    if ('marró' > color) {
        return color;
    }
}