var fadebox=document.getElementById("fade-boxC")
var fadef=document.getElementById("fadefC")
var fadeinner1=document.getElementById("fade-inner1C")
var fadeinner2=document.getElementById("fade-inner2C")
var fadeinner3=document.getElementById("fade-inner3C")
var fadeinner4=document.getElementById("fade-inner4C")
var fadeinner5=document.getElementById("fade-inner5C")
var fadeinner6=document.getElementById("fade-inner6C")
var fadeinner7=document.getElementById("fade-inner7C")
var fadeinner8=document.getElementById("fade-inner8C")
var fadeinner9=document.getElementById("fade-inner9C")
var fadeinner10=document.getElementById("fade-inner10C")
var fademain=document.getElementById("fade-mainC")
var nav1=document.getElementById("1navC")
var nav2=document.getElementById("2navC")
var nav3=document.getElementById("3navC")
var nav4=document.getElementById("4navC")
var nav5=document.getElementById("5navC")
var nav6=document.getElementById("6navC")
var nav7=document.getElementById("7navC")
var nav8=document.getElementById("8navC")
var nav9=document.getElementById("9navC")
var nav10=document.getElementById("10navC")
function fadein1(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner1.style.display="flex"
    fadebox.style.marginRight="170px"
    nav1.style.border="solid white"
}
function fadein2(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner2.style.display="flex"
    nav2.style.border="solid white"
}
function fadein3(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner3.style.display="flex"
    nav3.style.border="solid white"
}
function fadein4(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner4.style.display="flex"
    nav4.style.border="solid white"
}
function fadein5(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadeinner5.style.display="flex"
    fadebox.style.height="89%"
    nav5.style.border="solid white"
}
function fadein6(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner6.style.display="flex"
    nav6.style.border="solid white"
}
function fadein7(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner7.style.display="flex"
    nav7.style.border="solid white"
}
function fadein8(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner8.style.display="flex"
    nav8.style.border="solid white"
}
function fadein9(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner9.style.display="flex"
    nav9.style.border="solid white"
}
function fadein10(){
    fadef.style.display="flex"
    fadef.style.height="320px"
    fadebox.style.height="89%"
    fadeinner10.style.display="flex"
    fadebox.style.marginLeft="170px"
    nav10.style.border="solid white"
}
function fadeout(){
    // fadef.style.display="none"
    fadebox.style.marginRight="0px"
    fadebox.style.height="0px"
    fadef.style.height="0px"
    fadebox.style.marginLeft="0px"
    fadeinner1.style.display="none"
    fadeinner2.style.display="none"
    fadeinner3.style.display="none"
    fadeinner4.style.display="none"
    fadeinner5.style.display="none"
    fadeinner6.style.display="none"
    fadeinner7.style.display="none"
    fadeinner8.style.display="none"
    fadeinner9.style.display="none"
    fadeinner10.style.display="none"
    nav1.style.border="solid transparent"
    nav2.style.border="solid transparent"
    nav3.style.border="solid transparent"
    nav4.style.border="solid transparent"
    nav5.style.border="solid transparent"
    nav6.style.border="solid transparent"
    nav7.style.border="solid transparent"
    nav8.style.border="solid transparent"
    nav9.style.border="solid transparent"
    nav10.style.border="solid transparent"
}
var rotate=document.getElementsByClassName("rotate")
var plus=document.getElementById("visfoot")
var comef=document.getElementById("comef")
var plus=document.getElementById("plus")
var r1=document.getElementById("R1")
var r2=document.getElementById("R2")
var r3=document.getElementById("R3")
var r4=document.getElementById("R4")
function Plus(){
//    rotate.style.width="14%"
r1.style.width="14%"
r2.style.width="14%"
r3.style.width="14%"
r4.style.width="14%"
    comef.style.width="82%"
    plus.style.transform="rotate(495deg)"
    plus.style.left="273px"
}
function Plusout(){
    r1.style.width="0%"
r2.style.width="0%"
r3.style.width="0%"
r4.style.width="0%"
   comef.style.width="0%"
    plus.style.transform="rotate(0deg)"
    plus.style.left="34px"
}
var chat=document.getElementById("chatC");
var chatb=document.getElementById("chatboxC");
function chatbox(){
    chat.style.display="none";
    chatb.style.display="flex";
    chatb.style.height="300px";
}
function chatboxd(){
    chat.style.display="flex"
    chatb.style.height="0px";
}
var up=document.getElementById("up")
var upl=document.getElementById("upl")
var up2=document.getElementById("up2")
var up3=document.getElementById("up3")
var up4=document.getElementById("up4")
var up5=document.getElementById("up5")
var up6=document.getElementById("up6")
var up7=document.getElementById("up7")
var up8=document.getElementById("up8")
var up10=document.getElementById("up10")
function uptwo(){
up.style.height="80%"//inner 1
}
function upone(){
upl.style.height="80%"//inner 2
up2.style.height="80%" //this one is forinner 2
up3.style.height="80%" //this one is forinner 3
up4.style.height="80%" //this one is forinner 4
up5.style.height="80%" //this one is forinner 5
up6.style.height="80%" //this one is forinner 6
up7.style.height="80%" //this one is forinner 7
up8.style.height="80%" //this one is forinner 8
up10.style.height="80%" //this one is forinner 10
}
function down(){
    up.style.height="0%"
    upl.style.height="0%"
    up2.style.height="0%"
    up3.style.height="0%"
    up4.style.height="0%"
    up5.style.height="0%"
    up6.style.height="0%"
    up7.style.height="0%"
    up8.style.height="0%"
    up10.style.height="0%"
}
var cfade=document.getElementById("CfadeC")
var Mbox=document.getElementById("MboxC")
function contactD(){
    cfade.style.height="500px"
    Mbox.style.display="flex"
}
function contactU(){
    Mbox.style.display="none"
    cfade.style.height="0px"
}
var AMbox=document.getElementById("AMbox")
var Afade=document.getElementById("Afade")
function accountD(){
    Afade.style.height="180px"
    AMbox.style.display="flex"
}
function accountU(){
    AMbox.style.display="none"
    Afade.style.height="0px"
}
var searchall=document.getElementById("search-allC")
var nav2M=document.getElementById("nav-2MC")
window.addEventListener('scroll' , ()=>{
        const scrollable=42;
        const scrolled=positiontop=$(document).scrollTop();
        if(Math.ceil(scrolled)>scrollable ){
            searchall.style.left="50px"
            nav2M.style.display="flex"
            cfade.style.right= "54px"
            cfade.style.top= "39px"
            Afade.style.right= "6px"
            Afade.style.top= "34px"
            }
        else if(Math.ceil(scrolled)<scrollable ){
                searchall.style.left="250px"
                nav2M.style.display="none"
                cfade.style.right= "189px"
                cfade.style.top= "125px"
                Afade.style.right= "85px"
                Afade.style.top= "125px"
                }
                });
var one=document.getElementById("one")              
var two=document.getElementById("two")              
var three=document.getElementById("three")   
var onenav=document.getElementById("onenav")   
var twonav=document.getElementById("twonav")   
var threenav=document.getElementById("threenav")   
function onecome(){
    one.style.display="flex"
    two.style.display="none"
    three.style.display="none"
    onenav.style.background="linear-gradient(270deg, rgb(5 138 150), rgb(203 214 8 / 97%))"
    twonav.style.background="none"
    threenav.style.background="none"
}           
function twocome(){
    one.style.display="none"
    two.style.display="flex"
    three.style.display="none"
    onenav.style.background="none"
    twonav.style.background="linear-gradient(270deg, rgb(2, 207, 226), rgb(255 92 0 / 97%))"
    threenav.style.background="none"
}           
function threecome(){
    one.style.display="none"
    two.style.display="none"
    three.style.display="flex"
    onenav.style.background="none"
    twonav.style.background="none"
    threenav.style.background="linear-gradient(270deg, rgb(2 207 226), rgb(255 0 0 / 97%))"
}           