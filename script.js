<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>replit</title>
	<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<center>
		<header>Which Famous Instagram Accounts Should You Follow?</header>

	
    Name: <input type="text" id="name" >

    <br> <br> <br> <br> <br>
    
    <label>Professions/Activities You Enjoy:</label>
    <br>
    <br>
    <select id="enjoyProfessionActivity" >
      <option value="Options">Options</option>
      <option value="footballer">Footballer</option>
      <option value="musician">Musician</option>
      <option value="actor">Actor</option>
      <option value="actress">Actress</option>
      <option value="proWrestler">Professional Wrestler</option>
      <option value="tvPersonality">Televison Personality</option>
      <option value="businessWomen">Businesswomen</option>
      <option value="magazine">Magazine</option>
      <option value="model">Model</option>
      <option value="tvPersonality">TV Personality</option>
      
    </select>


<br>
<br>
<br>
 <br>

  <label> Followers(in Millions): </label>
        <input type="range" min="49" max="353" value="25" class="slider" oninput= "followersNum()" id="followers"><br><br>
        <p id="followersNum"></p>

     </select>
     <br>
     <br>
     <br>
    
     <div class="outputBox" id="outputBox">
			<p id="output"> </p>
		</div>
   
    <br>
    <br>
    <button onclick = "printUser(document.getElementById('followers').value, document.getElementById('job').value)" >PRESS TO SEE WHAT INSTAGRAM ACCOUNTS YOU MATCHED WITH!</button>

    <p id feedback> </p>
  
   
    <script src="utils.js"></script>
    <script src="script.js"></script>

</center>
 
</body>
</html>
