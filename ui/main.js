console.log('Loaded!');
alert("hello@");
var maadi= document.getElementById('maadi');
maadi.onclick = function(){
    var x = setInterval(moveRight, 5);
};
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    maadi.style.marginLeft= marginLeft + 'px' ;
}