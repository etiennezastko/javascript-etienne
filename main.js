const idSquare = document.getElementById('animSquare');
var count = 0;
console.log(idSquare);
idSquare.addEventListener('click',function(){
    if (count == 0) {
        idSquare.style.backgroundColor = 'red';
        count = 1;
    } else if (count == 1){
        idSquare.style.backgroundColor = 'green';
        count = 2;
    } else {
        idSquare.style.backgroungColor = 'blue' ;
        count = 0;
    } 
    
});