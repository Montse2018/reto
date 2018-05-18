
var name = prompt("Cual es tu nombre?");

  var element = document.getElementById("righth");
  element.innerHTML = "BIENVENIDO " + name;

  var confirmation = confirm("List@ para jugar");

  if(confirmation)
  {

    var pregunta1 = "1.¿Quien pinto a la monalisa?";
    var pregunta2 = "2.¿Quien pinto el mural \"El origen de la vida\"?";
    var pregunta3 = "3.¿Quien pinto las dos Fridas?";
    var answer1 = prompt(pregunta1);
    var answer2 = prompt(pregunta2);
    var answer3 = prompt(pregunta3);
    var element1 = document.getElementById("correct");
    var element2 = document.getElementById("incorrect");

    //Pregunta 1
    if (answer1.toUpperCase() == "DAVINCI")
    { element1.innerHTML =  element1.innerHTML + "</br>" + pregunta1 + "</br>"+ answer1; }
    else
    { element2.innerHTML =  element2.innerHTML + "</br>" + pregunta1 + "</br>"+ answer1; }

    //Pregunta 2
    if (answer2.toUpperCase() == "DIEGO RIVERA")
    { element1.innerHTML =  element1.innerHTML + "</br>" + pregunta2 + "</br>"+ answer2; }
    else
    { element2.innerHTML =  element2.innerHTML + "</br>" + pregunta2 + "</br>"+ answer2;}
    //Pregunta 3
    if (answer3.toUpperCase() == "FRIDA")
    { element1.innerHTML =  element1.innerHTML + "</br>" + pregunta3 + "</br>"+ answer3; }
    else
    { element2.innerHTML =  element2.innerHTML + "</br>" + pregunta3 + "</br>"+ answer3;}
  }
  else
  {
  var exit1 = document.getElementById("section");
  exit1.innerHTML = "<p class='no-play'>¡¡¡Jugaremos para la próxima!!!</p>";
  }
