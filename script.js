function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
   
    
    function findAccounts(userProfession, userFollowersinMil){
        var matches = [];

    }

console.log(matches);


function followersNum(){
    document.getElementById("followersShow").innerHTML = document.getElementById("followers").value + " million";
    console.log(document.getElementById("followers").value);
}





var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/Most%20Followed%20Instagram%20Accounts.csv"
var rank = getColumn(url, 1);
var username = getColumn(url, 2);
var owner = getColumn(url, 3);
var followersInMillions = getColumn(url, 4);
var profession = getColumn(url, 5);
var userCountry = getColumn(url, 6);





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
