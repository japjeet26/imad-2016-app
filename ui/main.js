console.log('Loaded!');
alert("hello@");
var maadi= document.getElementById('maadi');
maadi.onclick = function(){
    var x = setInterval(moveRight, 100);
};
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    maadi.style.marginLeft= marginLeft + 'px' ;
}