var tabs= document.getElementsByClassName("nav");

for(var i=0; i<tabs.length;i++){    
        tabs[i].className = tabs[i].className.replace(" active", "");    
}