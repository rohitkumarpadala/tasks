(function(){
    function loadJson(file,callback){
        var xhrobject = new XMLHttpRequest();
        xhrobject.overrideMimeType('application/json');
        xhrobject.open('GET',file,true);
        xhrobject.onreadystatechange=function(){
            if(xhrobject.readyState==4 && xhrobject.status=='200'){
                callback(xhrobject.responseText);
            }
        }
        xhrobject.send();
    }
    
loadJson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    profile(data);
    // education(data.EducationDetails);
    pskills(data);
})

function profile(data){
    console.log(data.name);
    var main = document.getElementById("main");
    var left = document.getElementById("left");

    var card = document.createElement('div');
    card.classList.add('card');

    var pic = document.createElement("img");
    pic.src='logo512.png';
    pic.classList.add('logoimg');
    card.appendChild(pic);

    var ename = document.createElement("h2");
    ename.textContent=data.name;
    card.appendChild(ename);

    var email = document.createElement("h4");
    email.textContent=data.email;
    card.appendChild(email);

    
    left.appendChild(card);
    main.appendChild(left);

}

function pskills(data){
    var right=document.getElementById('right');

    var pskills=document.createElement("b");
    pskills.textContent="Carrier :"+data.carrier;
    right.appendChild(pskills);


    
    main.appendChild(right);
}



//     function education(education){

//     var ed=document.createElement("h2");
//        ed.innerHTML="Educational details:";
//        right.appendChild(ed);
//        var ehr=document.createElement("hr");
//      right.appendChild(ehr);

     
//       var etable=document.createElement("table");
//       var tr1="<tr><td>S.No</td><td>Institute</td><td>CGP/PER</td><td>Duration</td></tr>";
//    var tr2="";
//     for(i=0;i<education.length;i++){
//      tr2=tr2+"<tr><td>"+education[i].sno+"</td><td>"+education[i].institute+"</td><td>"+education[i].percentage+"</td><td>"+education[i].duration+"</td></tr>";
   
//     }
//     etable.innerHTML=tr1+tr2;
//     right.appendChild(etable);
   
//    }
   
   
}())

