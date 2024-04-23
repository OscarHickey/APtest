function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
  csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
  }
  function getCol(matrix, col){
  var column = [];
  for(var i=1; i<matrix.length-1; i++){
  column.push(matrix[i][col]);
  }
  return column;
  }



var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/Most%20Followed%20Instagram%20Accounts.csv"
var rank = getColumn(url, 1);
var username = getColumn(url, 2);
var owner = getColumn(url, 3);
var followersInMillions = getColumn(url, 4);
var profession = getColumn(url, 5);
var userCountry = getColumn(url, 6);


function followersNum(){
  console.log(document.getElementById("followersNum").value);
  document.getElementById("followersNum").innerHTML = document.getElementById("followers").value + " million";
  }



function printUser(followers,job, name){
  var matches = [];
for(var i = 0; i < rank.length; i++){
  if(profession[i].includes(job) && followersInMillions[i] < followers){
      matches.push(username[i]);
  }
}
console.log(matches);

if(matches.length == 0){
  document.getElementById("outputBox").innerHTML = "";
  var text = document.createElement("p");
  text.innerHTML = name + ", no one matches your criteria!!"
  var src = document.getElementById("outputBox");
  src.appendChild(text)
}
else {
document.getElementById("outputBox").innerHTML = "";
}
}

  
