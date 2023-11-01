"Use strict";

let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincontainer");

let container=document.createElement("div");
container.setAttribute("class","container");

let container2=document.createElement("div");
container2.setAttribute("class","container2");

let H1_Content=document.createElement("h1");
H1_Content.innerHTML="Model Project";

let Btn=document.createElement("button");
Btn.innerText="Open Model"

document.body.append(maincontainer,container2);
maincontainer.append(container)
container.append(H1_Content,Btn);

Btn.addEventListener("click",myFunction);

var Clear_Btn=document.createElement("button");
Clear_Btn.innerText="X";
Clear_Btn.setAttribute("id","Clear_Btn");
container.append(Clear_Btn);
Clear_Btn.style.display="none"
function myFunction(){

    Clear_Btn.style.display="block"
    H1_Content.innerText="Model Content";
    Btn.style.display="none";
    // document.body.style.background=" #add8e685";
    container2.style.display="block";

}

Clear_Btn.addEventListener("click",Clear_Fun)

function Clear_Fun(){

    Clear_Btn.style.display="none";
    H1_Content.innerText="Model Project";
    Btn.style.display="block";
    // document.body.style.background.display="none";
    container2.style.display="none";
}