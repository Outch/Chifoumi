function getRandomInt(max)
{
  return Math.floor(Math.random() * Math.floor(max));
}

function pierre_feuille_ciseaux(i)
{
	if (i == 0)
		return ("Pierre");
	if (i == 1)
		return ("Feuille");
	if (i == 2)
		return ("Ciseaux");
}

function Chifoumi()
{
	var user;
	var computer = getRandomInt(3);

	while (user != "pierre" && user != "feuille" && user != "ciseaux")
	{
		user = window.prompt("Pierre... Feuille... Ciseaux...").toLowerCase();
	}

	if (user == "pierre")
		user = 0;
	else if (user == "feuille")
		user = 1;
	else
		user = 2;

	if (user == computer)
		document.write("<p> Egalité ! :/");
	else if ((user == 1 && computer == 2) || (user == 0 && computer == 1) || (user == 2 && computer == 0))
		document.write("<p> Perdu ! :(");
	else
		document.write("<p> Gagné ! :D");

	document.write("<p>Vous avez joué: " + pierre_feuille_ciseaux(user) + " contre: " + pierre_feuille_ciseaux(computer) + "</p>");
}

Chifoumi();