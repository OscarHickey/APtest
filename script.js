
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
  var username = [ "@instagram",
  "@cristiano",
  "@arianagrande",
  "@therock",
  "@kyliejenner",
  "@selenagomez",
  "@kimkardashian",
  "@leomessi",
  "@beyonce",
  "@neymarjr",
  "@justinbieber",
  "@natgeo",
  "@taylorswift",
  "@kendalljenner",
  "@jlo",
  "@nickiminaj",
  "@nike",
  "@khloekardashian",
  "@mileycyrus",
  "@katyperry",
  "@kourtneykardash",
  "@kevinhart4real",
  "@theellenshow",
  "@realmadrid",
  "@fcbarcelona",
  "@ddlovato",
  "@badgalriri",
  "@zendaya",
  "@victoriassecret",
  "@iamcardib",
  "@champagnepapi",
  "@shakira",
  "@chrisbrownofficial",
  "@kingjames",
  "@billieeilish",
  "@vindiesel",
  "@virat.kohli",
  "@davidbeckham",
  "@championsleague",
  "@nasa",
  "@justintimberlake",
  "@emmawatson",
  "@shawnmendes",
  "@gigihadid",
  "@priyankachopra",
  "@9gag",
  "@ronaldinho",
  "@maluma",
  "@camila_cabello",
  "@deepikapadukone",
  ]
  var followersInMillions = getColumn(url, 4);
  var profession = getColumn(url, 5);

  
  
  function printUser(followers,job){
    var matches = [];
  for(var i = 0; i < rank.length; i++){
    if(profession[i].includes(job) && parseFloat(followersInMillions[i]) >= parseFloat(followers)){
        matches.push(username[i]);
    }
  }
 if (matches.length == 0){
    document.getElementById("output").innerHTML = "No one in fits that criteria!!"
    }

    else{
document.getElementById("output").innerHTML = matches.join("<br><br>");
  }
}

  
  
  
  function followersNum(){
  console.log(document.getElementById("followers").value);
  var followersInput = document.getElementById("followers").value;
  document.getElementById("followersNum").innerHTML =  followersInput + " million";
  
  }

