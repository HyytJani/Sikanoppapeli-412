let yhteensa=0
let pelaaja1=0


var face0=new Image()
face0.src="img/d1.gif"
var face1=new Image()
face1.src="img/d2.gif"
var face2=new Image()
face2.src="img/d3.gif"
var face3=new Image()
face3.src="img/d4.gif"
var face4=new Image()
face4.src="img/d5.gif"
var face5=new Image()
face5.src="img/d6.gif"

function heita(){
    //create a random integer between 0 and 5
    var nopanluku=Math.round(Math.random()*5)
    document.images["mydice"].src=eval("face"+nopanluku+".src")
    
    var oikeanopanluku=nopanluku+1
    yhteensa= yhteensa+oikeanopanluku
    
    document.querySelector('#pisteet').innerHTML='';
    
    //let pisteet=document.createElement('p');
    let uusipisteet=document.createTextNode(yhteensa);
    pisteet.appendChild(uusipisteet);
    //pisteet.className=('nimilista'); 
    document.querySelector('#pisteet').appendChild(pisteet);    
}

let lomake=document.forms['syota'];
lomake.addEventListener('submit',tulostaPelaajat)
const pelaajat = new Array  ();
const pelaajapisteet = new Array();


function tulostaPelaajat(event){
    event.preventDefault()
     nimi=document.querySelector('#syota input[type="text"]').value;   
    pelaajat.push(nimi);
    document.getElementById('syota').reset();
    if(pelaajat.length<=10){ 
        document.querySelector('#pelaajat').innerHTML='';
        for(let i=0;i<pelaajat.length;i++) {
        let uusinimi=document.createElement('li');
        let uusinimiteksti=document.createTextNode(pelaajat[i]+"  "+pelaaja1+" pistettä");
        uusinimi.appendChild(uusinimiteksti);
        uusinimi.className=('pelaajalista'); 
        document.querySelector('#pelaajat').appendChild(uusinimi);}}}
        
    
    function lopeta(){
          
        if(pelaajat.length<=10){ 
            document.querySelector('#pelaajat').innerHTML='';
            for(let i=0;i<pelaajat.length;i++) {
            let uusinimi=document.createElement('li');
            let uusinimiteksti=document.createTextNode(pelaajat[i]+"  "+pelaaja1+" pistettä");
            uusinimi.appendChild(uusinimiteksti);
            uusinimi.className=('pelaajalista'); 
            document.querySelector('#pelaajat').appendChild(uusinimi);
            
            }
            yhteensa=0;}

    }