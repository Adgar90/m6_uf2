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

/* 
Crea una funció JavaScript que mostri per pantalla un exemple de cada una de les funcions de Arrays
amb:
Array inicial → còpia del mètode i els paràmetres utilitzats → resultat al executar-lo
*/

function executaFuncionsArray() {
    let arrColors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

    // funció at()
    document.write(`<strong>1. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.at('0')<strong> → Resultat:</strong> ${arrColors.at('0')}<br>`);
    // funció concat()
    document.write(`<strong>2. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.concat('marro')<strong> → Resultat:</strong> ${arrColors.concat('marro')}<br>`);
    // funció constructor
    document.write(`<strong>3. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors = new Array("gris", "violeta", "turquesa")<strong> → Resultat:</strong> ${arrColors = new Array("gris", "violeta", "turquesa")}<br>`);
    // funció copyWithin()
    document.write(`<strong>4. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.copyWithin(0, 2)<strong> → Resultat:</strong> ${arrColors.copyWithin(0, 2)}<br>`);
    // funció entries()
    let iterador = arrColors.entries();
    document.write(`<strong>5. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> let iterador = arrColors.entries() && iterador.next().value per cada value<strong> → Resultat:</strong> ${iterador.next().value} ${iterador.next().value} ${iterador.next().value}<br>`);
    // funció every()
    document.write(`<strong>6. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció fill()
    document.write(`<strong>7. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.fill(2, 1, 2)<strong> → Resultat:</strong> ${arrColors.fill(2, 1, 2)}<br>`);
    // funció filter()
    document.write(`<strong>8. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.filter((color) => color.length > 6))<strong> → Resultat:</strong> ${arrColors.filter((color) => color.length > 6)}<br>`);
    // funció find()
    document.write(`<strong>9. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.find((color) => color === "turquesa")<strong> → Resultat:</strong> ${arrColors.find((color) => color === "turquesa")}<br>`);
    // funció findIndex()
    document.write(`<strong>10. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.findIndex((color) => color === "turquesa")<strong> → Resultat:</strong> ${arrColors.findIndex((color) => color === "turquesa")}<br>`);
    // funció flat()
    let arrNumbers = ["1", "2", ["3", "4"]];
    document.write(`<strong>11. Array inicial:</strong> let arrNumbers = ["1", "2", ["3", "4"]];<strong> → Mètode i paràmetres:</strong> arrNumbers.flat()<strong> → Resultat:</strong> ${arrNumbers.flat()}<br>`);
    // funció flatMap()
    arrColors = ["verd", "vermell", "groc", "blau"];
    document.write(`<strong>12. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.flatMap((color) => (color === "verd" ? ["key", "value"] : color))<strong> → Resultat:</strong> ${arrColors.flatMap((color) => (color === "groc" ? ["key", "value"] : color))}<br>`);
    // funció forEach()
    arrNumbers = ["1", "2", "3", "4"];
    document.write(`<strong>13. Array inicial:</strong> ${arrNumbers}<strong> → Mètode i paràmetres:</strong> arrNumbers.forEach((num) => document.write(num))<strong> → Resultat:</strong>`);
    arrNumbers.forEach((num) => document.write(num));
    // funció from()
    document.write(`<br><strong>14. Array inicial:</strong> ${arrNumbers}<strong> → Mètode i paràmetres:</strong> Array.from(arrNumbers, (num) => (num*10))<strong> → Resultat:</strong> ${Array.from(arrNumbers, (num) => (num*10))}<br>`);
    // funció includes()
    document.write(`<strong>15. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.includes("groc")<strong> → Resultat:</strong> ${arrColors.includes("groc")}<br>`);
    // funció indexOf()
    document.write(`<strong>16. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.indexOf("blau")<strong> → Resultat:</strong> ${arrColors.indexOf("blau")}<br>`);
    // funció isArray()
    document.write(`<strong>17. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> Array.isArray(arrColors)<strong> → Resultat:</strong> ${Array.isArray(arrColors)}<br>`);
    // funció join()
    let arrAsString = arrColors.join();
    document.write(`<strong>18. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> let arrAsString = arrColors.join();<strong> → Resultat:</strong> ${arrAsString}<br>`);
    // funció keys()
    let keyIterator = arrNumbers.keys();
    document.write(`<strong>19. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> let keyIterator = arrNumbers.keys() && for (let key of keyIterator) { document.write(key); }<strong> → Resultat: </strong>`);
    for (let key of keyIterator) {
        document.write(key);
    }
    // funció lastIndexOf()
    arrColors.push("verd");
    document.write(`<br><strong>20. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.lastIndexOf("verd")<strong> → Resultat:</strong> ${arrColors.lastIndexOf("verd")}<br>`);
    // funció length
    document.write(`<strong>21. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.length<strong> → Resultat:</strong> ${arrColors.length}<br>`);
    // funció map()
    let arrDobles = arrNumbers.map(function (num) { return num * 2 });
    document.write(`<strong>22. Array inicial:</strong> ${arrNumbers}<strong> → Mètode i paràmetres:</strong> let arrDobles = arrNumbers.map(function (num) { return num * 2 })<strong> → Resultat:</strong> ${arrDobles}<br>`);
    // funció pop()
    document.write(`<strong>23. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.pop()<strong> → Resultat:</strong> ${arrColors.pop()}<br>`);
    // funció prototype
    document.write(`<strong>24. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong>  Array.prototype.enMajuscules = function() {
        for (let i = 0; i < this.length; i++) {
          this[i] = this[i].toUpperCase();
        }
      };
      <strong> → Resultat:</strong>`);
    arrColors.enMajuscules();
    document.write(arrColors+"<br>");
    // funció push()
    document.write(`<strong>25. Array inicial:</strong> ${arrNumbers} && length: ${arrNumbers.length}<strong> → Mètode i paràmetres:</strong> arrNumbers.push(5)<strong> → Resultat:</strong> length: ${arrNumbers.push(5)} array: ${arrNumbers}<br>`);
    // funció reduce()
    document.write(`<strong>26. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.reduce()<strong> → Resultat:</strong> ${arrColors.reduce()}<br>`);
    // funció reduceRight()
    document.write(`<strong>27. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció reverse()
    document.write(`<strong>28. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció shift()
    document.write(`<strong>29. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció slice()
    document.write(`<strong>30. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció some()
    document.write(`<strong>31. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció sort()
    document.write(`<strong>32. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció splice()
    document.write(`<strong>33. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció toString()
    document.write(`<strong>34 Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció unshift()
    document.write(`<strong>35. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
    // funció valueOf()
    document.write(`<strong>36. Array inicial:</strong> ${arrColors}<strong> → Mètode i paràmetres:</strong> arrColors.every(menorQueMarro)<strong> → Resultat:</strong> ${arrColors.every(menorQueMarro)}<br>`);
}

Array.prototype.enMajuscules = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
};