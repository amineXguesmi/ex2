
var btn=document.querySelector("button");
function color(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
return("#"+randomColor);
}
btn.addEventListener("click",(e)=>{
    var Nom=document.querySelector(".Nom").value;
    var content=document.querySelector(".content").value;
    if((Nom!="")&&(content!="")){
        var newchild=document.createElement("div");
        newchild.textContent=Nom+" "+content;
        document.querySelector(".ToDo ").appendChild(newchild);;
        newchild.addEventListener("click",(e)=>{
            newchild.style.color=color();
        })
        var newNode2=document.createElement("button");
        newNode2.style.backgroundColor = "transparent" ;
        newNode2.style.outline = "transparent";
        newNode2.className = "btn"
        newchild.appendChild(newNode2);
      
        var newNode3 = document.createElement("img")
        newNode3.src="delete.jpg";
        newNode3.width="20";
        newNode3.height="15";
        newNode2.appendChild(newNode3);

        newNode3.addEventListener("click",(e)=>{
            document.querySelector(".ToDo").removeChild(newchild);
             
        })
        
    }})