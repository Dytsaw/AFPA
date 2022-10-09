// Exercice 1 Réaliser des scripts simple avec JavaScript

/* let userName = prompt("Entrez votre prénom")
console.log(`Bonjour ${userName}`); */

// Exercice 2 Somme de deux nombres

// let nombreUn = Number(prompt("Entrez un nombre"))
// let nombreDeux = Number(prompt("Entrez un deuxieme nombre"))
// alert(nombreUn + nombreDeux);



// Exercice 3 Réaliser des conditions (if/else)

/* let ageUser = 0;
while (ageUser <= 0 || ageUser > 100) {
    ageUser = parseInt(prompt("Entrez votre age"));
    if (ageUser <=0 || ageUser > 100){
        alert("Impossible d'être âgé de cet age, veuillez recommencer svp.");
    } else {
        alert(`Vous êtes âgé de ${ageUser} ans`)
    }
} */

// Exercice 4 do while dans une boucle for, en utilisant 3 variables
/* let b,c;

for(let a=2; a<=100; a++){
    c=1;
    do{
        c++;
    } while(a%c !=0);
    if(c>a/2){
        b=a++
    }
    console.log(b)
}
 */

// Exerice 5 

/* document.open()

for (let a=1; a<11; a++){
        document.write('<table border>')
        document.write("<h4> Table de "+ a +"</h4>")
        // document.write('<table border/>')
    for(let b=1; b<11; b++){
        document.write("<tr>");
        document.write("<td>" + a + " x " + b + " =</td>");
    	document.write("<td>"+ a*b +"</td>");
    	document.write("</tr>");
    }
    document.write("<table/>")
}

document.close() */


//Exercice 6
/* let element = document.getElementById('form')
let button = document.getElementById('btn');
button.addEventListener('click' , function(){
    element.style.backgroundColor = 'pink'
},false);

let buttonInitial = document.getElementById('btn');
button.addEventListener('dblclick' , function(){
    element.style.backgroundColor = '#fff'
},false);
 */
