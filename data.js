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
  // eduinfo(data.education);
  skills(data.skills);
});

var main=document.getElementById("sowmya");
var right=document.createElement("div");
 right.classList.add("content-child");
 main.appendChild(right);

// var main=document.queryselector(".flex-parent");
function basicdata(basic){
  var profile=document.getElementById("basics");
  var img=document.createElement("img");
  img.classList.add("profile_img","profile_circle");
  img.src=basic.photo;
  profile.appendChild(img);
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
//
//
//
//  //educationdiv
//  var e1=document.createElement("div");
//  e1.classList.add("edu");
//  right.appendChild(e1);
//  var h1=document.createElement("h1");
//  h1.setAttribute("id","heading");
//  h1.textContent="EducationDetails";
//  h1.appendchild(document.createElement("HR"));
//  //appendChild
//  e1.appendChild("h1");
//  function eduinfo(education){
//    for(i in education){
//      //course creation
//      var h2=document.createElement("h2");
//      h2.classList.add("edu1");
//      h2.textContent=education[i].course;
//      //appendChild
//      h1.appendChild("h2");
//      var h3=document.createElement("h3");
//      h3.classList.add("edu1");
//      h3.textContent=education[i].college;
//      h2.appendChild(h3);
//      //for data getting
//      var u1=document.createElement("ul");
//      ul.classList.add("edu3");
//      h3.appendChild(ul);
//      for(j in education.data){
//        var li=document.crateElement("li");
//        li.textContent=education[i].data[j];
//        ul.appendChild(li);
//      }
function skills(food){
  var table=document.createElement("table");
  var row="";
for(var k=0;k<food.length;k++){
  row+="<tr><td>"+food[k].name +"</td><td>"+food[k].info+"</td></tr>";

}
   table.innerHTML=row;
   right.appendChild(table);
 }
