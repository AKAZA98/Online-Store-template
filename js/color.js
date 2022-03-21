var dmode=document.getElementById("darkmode")
// var cborder=document.getElementById("cborder")
// var aborder=document.getElementById("aborder")
var darkb=document.getElementById("darkb")
var image=document.getElementById("darkimg")
var search=document.getElementById("search-all")
var searchin=document.getElementById("search")
var nav1ul = document.getElementById("nav1ul");
var lione = nav1ul.getElementsByTagName("li");
var navthree = document.getElementById('nav-3');
var inav2d = document.getElementById('img-nav2-d');
var inav2 = document.getElementById('img-nav2');
var sevenul = document.getElementById('sevenul');
var sidediv1 = document.getElementById('side-div1');
var sidediv5 = document.getElementById('side-div5');
var sevenul = document.getElementById('sevenul');
var zencolor = document.getElementById('zencolor');
var btnz = document.getElementById('btn-z');
var footer1 = document.getElementById('footer1');
var plus = document.getElementById('plus');
var chat = document.getElementById('feedback');
var chatimg = document.getElementById('chatimg');
// var aone = lione.getElementsByTagName("a");
function Darkmode(){
    // dmode.style.backgroundColor="black"
    if (image.src.match("img/black/sun.png")) {
                image.src = "img/black/moon.png";
                dmode.style.backgroundColor="black"
                darkb.style.backgroundColor="#bcb0b0"
                image.style.filter="none" 
                document.body.style.backgroundColor = 'white';
                search.style.border="2px solid black"
                search.style.backgroundColor="white"
                searchin.style.color="black"
                zencolor.style.color="black"
                footer1.style.color="black"
                footer1.style.fontWeight="bold"
                // footer1.style.backgroundColor="#baadad"
                footer1.style.background="linear-gradient(189deg, black, transparent)"
                plus.style.filter="none"
                // cborder.style.color="black"
                // searchin.ariaPlaceholder.style.color="black"
                nav1ul.style.backgroundColor="white"
                navthree.style.backgroundColor="white"
                inav2d.style.boxShadow="black 0px 0px 10px 3px"
                inav2.style.boxShadow="black 0px 0px 10px 3px"
                sevenul.style.boxShadow = "rgb(0 0 0) 0px 0px 13px 6px";
                sidediv1.style.borderTop="3px solid black"
                btnz.style.filter="drop-shadow(-5px 0px 5px black)"
                chat.style.backgroundColor="rgb(36, 52, 54)"
                chat.style.color="white"
                chat.style.boxShadow="black 0px 0px 7px 3px"
                chatimg.style.filter="invert(1)"
                // chat.style.fontWeight="600"
                // sidediv5.style.borderBottom="3px solid black"
                colorforlight();
                Threeimg();
                // threeimg.style.filter="none"
                // navthree.style.backgroundColor="#949494"
                // lione.style.backgroundColor="black"
                // function colorchange
                // document.querySelector("a[id=nav1ul]").style.color = "black";
                
            }
            else if(image.src.match("img/black/moon.png")) {
                image.src = "img/black/sun.png";
                dmode.style.backgroundColor="#bcb0b0"
                darkb.style.backgroundColor="black"
                image.style.filter="invert()"
                document.body.style.backgroundColor = '#140019';
                nav1ul.style.backgroundColor="#140019"
                search.style.border="1px solid white"
                search.style.backgroundColor="#140019"
                searchin.style.color="white"
                zencolor.style.color="yellow"
                footer1.style.color="white"
                footer1.style.backgroundColor="black"
                footer1.style.fontWeight="normal"
                plus.style.filter="invert()"
                // cborder.style.color="white"
                navthree.style.backgroundColor="rgb(20 0 25)"
                sevenul.style.boxShadow = "rgb(0 247 224) 0px 0px 10px 3px";
                // threeimg.style.filter="invert()"
                chat.style.backgroundColor="#c0fdff"
                chat.style.boxShadow="#c0fdff 0px 0px 7px 3px"
                chat.style.color="black"
                chatimg.style.filter="none"
                sidediv1.style.borderTop="3px solid white"
                btnz.style.filter="drop-shadow(-5px 0px 5px white)"
                // sidediv5.style.borderBottom="3px solid white"
                inav2d.style.boxShadow="none"
                inav2.style.boxShadow="none"
                colorfordark();
                Threeimgrev();
            }
        }
var firsta = document.getElementsByClassName('1sta');
var seconda = document.getElementsByClassName('2nda');
var threea = document.getElementsByClassName('3rda');
var foura = document.getElementsByClassName('foura');
var fivea = document.getElementsByClassName('a5th');
var sevena = document.getElementsByClassName('7tha');
var sidediv = document.getElementsByClassName('side-div');
var container = document.getElementsByClassName('container');

var more = document.getElementsByClassName('more');
function colorforlight(){
    for(var i = 0; i < firsta.length; i++){
    firsta[i].style.color = "black";
    }
    for(var i = 0; i < seconda.length; i++){
        seconda[i].style.color = "black";
    }
    for(var i = 0; i < threea.length; i++){
        threea[i].style.color = "black";
    }
    for(var i = 0; i < foura.length; i++){
        foura[i].style.color = "black";
    }
    for(var i = 0; i < fivea.length; i++){
        fivea[i].style.color = "black";
        fivea[i].style.fontWeight = "600";
    }
    for(var i = 0; i < sevena.length; i++){
        sevena[i].style.color = "black";
    }
    for(var i = 0; i < sidediv.length; i++){
        sidediv[i].style.borderBottom = "3px solid black";
    }
    for(var i = 0; i < container.length; i++){
        container[i].style.backgroundColor = "black";
        container[i].style.boxShadow = "rgb(0 0 0) 0px 0px 10px 3px";
    }
    for(var i = 0; i < more.length; i++){
        more[i].style.boxShadow = "rgb(4 5 5) 0px 0px 12px 3px";
    }
}
function colorfordark(){
    for(var i = 0; i < firsta.length; i++){
        firsta[i].style.color = "white";
    }
    for(var i = 0; i < seconda.length; i++){
        seconda[i].style.color = "white";
    }
    for(var i = 0; i < threea.length; i++){
        threea[i].style.color = "white";
    }
    for(var i = 0; i < foura.length; i++){
        foura[i].style.color = "white";
    }
    for(var i = 0; i < fivea.length; i++){
        fivea[i].style.color = "white";
        fivea[i].style.fontWeight = "100";
    }
    for(var i = 0; i < sevena.length; i++){
        sevena[i].style.color = "white";
    }
    for(var i = 0; i < sidediv.length; i++){
        sidediv[i].style.borderBottom = "3px solid white";
    }
    for(var i = 0; i < container.length; i++){
        container[i].style.backgroundColor = "white";
        container[i].style.boxShadow = "rgb(0 247 224) 0px 0px 10px 3px";
    }
    for(var i = 0; i < more.length; i++){
        more[i].style.boxShadow = "rgb(0 247 224) 0px 0px 10px 3px";
    }
}
var threeimg = document.getElementsByClassName('nav-3-img');
function Threeimg(){
    for(var i = 0; i < threeimg.length; i++){
        threeimg[i].style.filter = "contrast(0.5)";
    }
}
function Threeimgrev(){
    for(var i = 0; i < threeimg.length; i++){
        threeimg[i].style.filter = "invert()";
    }
}
