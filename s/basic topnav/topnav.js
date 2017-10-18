var tabs= document.getElementsByClassName("nav");
clearClasses();

for(var i=0; i< tabs.length ; i++){    
        tabs[i].onclick = function(){
                clearClasses();
                this.classList.add("active");
        }
}

      

function clearClasses(){
        for(var i=0; i<tabs.length;i++){    
                        tabs[i].className = tabs[i].className.replace(" active", "");    
        }
}