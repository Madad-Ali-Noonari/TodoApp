var myList= document.getElementsByClassName("li");
var index;

for(index=0; index<myList.length; index++)
{
    var aSpanTag=document.createElement("SPAN");
    var someText=document.createTextNode("\u00D7");
    aSpanTag.className="close";
    aSpanTag.appendChild(someText);
    myList[index].appendChild(aSpanTag);
}

var closeButton=document.getElementsByClassName("close");
function createNewElement(){
    var li=document.createElement("li");
    var theinputValue=document.getElementById("the-input").value;
    var textNode=document.createTextNode(theinputValue);
    li.appendChild(textNode);
    if(theinputValue==='')
    {
        alert("the text input is empty")
    }else
    {
        document.getElementById("the-ul").appendChild(li);
    }
    document.getElementById("the-input").value="";

    var theSpantag= document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    theSpantag.className="close";
    theSpantag.appendChild(txt);
    li.appendChild(theSpantag);

    //Removing items when clicking on the x
    for(var i=0; i< closeButton.length; i++)
    {
        closeButton[i].onclick= function (){
            var theDid= this.parentElement;
            theDid.style.display="none"
        }
    }
}


var ullist= document.querySelector('ul');
ullist.addEventListener('click',function(event){

    if(event.target.tagName==="LI"){
        event.target.classList.toggle('checked');
    }
});