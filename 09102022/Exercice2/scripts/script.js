'use strict'

//Exercice du tableau avec le changement de titre 
/* function update(atrr){
    let p1 =document.getElementById("p1");
    if(atrr.getAttribute("name")==="color"){
         p1.style.color="rgb("+atrr.value+","+atrr.value+","+atrr.value+")";
         let c= 255-atrr.value;
         p1.style.color="rgb("+c+","+c+","+c+")";
    }
    else if(atrr.getAttribute("name")==="padding"){
            p1.style.padding=atrr.value+"px";	
    }
    else if(atrr.getAttribute("name")==="height"){
            p1.style.height=atrr.value+"px";	
    }
    else if(atrr.getAttribute("name")==="width"){
            p1.style.width=atrr.value+"px";	
    }
    else if(atrr.getAttribute("name")==="radius"){
            p1.style.borderRadius=atrr.value+"px";	
    }
    else if(atrr.getAttribute("name")==="rotation"){
            p1.style.transform="rotate("+atrr.value+"deg)";	
    }
        
} */

// Exercice du chronometre

/*  let sp = document.getElementsByTagName("span");
 let btn_start=document.getElementById("start");
 let btn_stop=document.getElementById("stop");
 let t;
 let ms=0,s=0,mn=0,h=0;
  
//function qui determine l'intervale a 100ms
 function start(){
  t =setInterval(update_chrono,100);
  btn_start.disabled=true;
 
 }

 //function qui permet d'incrementer le nombre de milisecondes secondes minutes et heures
 function update_chrono(){
   ms+=1;
      if(ms==10){
       ms=1;
       s+=1;
      }

      if(s==60){
       s=0;
       mn+=1;
      }
      if(mn==60){
       mn=0;
       h+=1;
      }

      sp[0].innerHTML=h+" h";
      sp[1].innerHTML=mn+" min";
      sp[2].innerHTML=s+" s";
      sp[3].innerHTML=ms+" ms";

 }
 
//function qui arrete le chrono en stoppant set interval
 function stop(){
   clearInterval(t);
   btn_start.disabled=false;
               
       }
// function qui permet de remettre les valeurs et l'afficahge à zero
function reset(){
  clearInterval(t);
   btn_start.disabled=false;
   ms=0,s=0,mn=0,h=0;

   sp[0].innerHTML=h+" h";
   sp[1].innerHTML=mn+" min";
   sp[2].innerHTML=s+" s";
   sp[3].innerHTML=ms+" ms";
     } */


//Exercice d'algorithmie 

/*  let a = Number(prompt("Entrez un chiffre/nombre"))
 let b = Number(prompt("Entrez un deuxieme chiffre/nombre"))

 if(a*b < 0){
        console.log(`Le nombre ${a*b} est negatif`)
 }else if(a*b == 0 ){
        console.log("Le nombre est égal à 0");
 }else{
        console.log(`Le nombre ${a*b} est positif`);
 }

let userNombre = parseInt(prompt("Entrez un nombre"));

while(userNombre>0){
        console.log(userNombre);
        userNombre = userNombre - 1
} */

//Exercice 2 

// let originP = document.getElementById('p2')
// console.log(originP.innerHTML);

/* function changerStyle(){
        let para = document.getElementById('p2')
                para.style.backgroundColor = 'red';
                para.style.color ='#fff'
                para.style.border = 'dashed 2px black'
                para.style.padding = '5px'
                para.style.display = 'flex'
                para.style.justifyContent = 'center'
                para.style.alignItems = 'center' 

        }

function changerStyle(){
        let para = document.getElementById('p2')
        para.classList.add("active")
}
 */

let newTab = new Array()
function add_name(){
        newTab.push(prompt("Enter a name"))
}

function tirage(){
        if(newTab.lenght>0){
        let rand = Math.floor(Math.random()*newTab.lenght)
        console.log("The winner is : " + newTab[rand]);
}else{
        console.log(`Please add name`);
}
}
