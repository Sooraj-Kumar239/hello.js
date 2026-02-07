     function show(event){
     event.preventDefault();
    
         let text = document.getElementById("input").value; 

         document.getElementById("output").innerHTML=text;
     }