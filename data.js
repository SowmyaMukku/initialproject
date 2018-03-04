function getfile(file, callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("data.json", function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicdata(data.basics);
});

function basicdata(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var name=document.createElement("img");
  img.src=basic.img;
  profile.appendChild(img);
  var email=document.createElement("h2");
  email.innerHTML=basic.email;
  profile.appendChild(email);
}
