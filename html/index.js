function education(education){

    var ed=document.createElement("h2");
       ed.innerHTML="Educational details:";
       right.appendChild(ed);
       var ehr=document.createElement("hr");
     right.appendChild(ehr);

     
      var etable=document.createElement("table");
      etable.border="1";
      var tr1="<tr><td>s.no</td>><td>institute</td><td>percentage</td></tr>";
   var tr2="";
    for(i=0;i<education.length;i++){
     tr2=tr2+"<tr><td>"+education[i].sno+"</td><td>"+education[i].institute+"</td><td>"+education[i].percentage+"</td></tr>";
   
    }
    etable.innerHTML=tr1+tr2;
    right.appendChild(etable);
   
   }