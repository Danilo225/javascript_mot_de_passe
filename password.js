var myInput = Document.getElementById('pwd');
var letter = Document.getElementById('letter');
var capital = Document.getElementById('capital');
var number = Document.getElementById('number');
var length = Document.getElementById('length');

//lorsque l'utilisateur clique en dehors du champs du mot de passe, afficher la boite de message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}

//lorsque l'utilisateur clique en dehors du champs du mot de passe, afficher la boite de message

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}