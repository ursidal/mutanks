
var listJoueur = [];
var listTank = [];
var listMissile = [];

Tank.prototype

function verifJoueur(joueur){
	var listeFiltree = listJoueur.filter(function(item){
		return (item.id == joueur.id)&&(item.pwd == joueur.pwd);
		}
    if(listeFiltree.length==0){nouveauJoueur(joueur);}
}

function nouveauJoueur(joueur){
	if(!joueur.numtank){joueur.numtank=1;}
	joueur.score = 0;
	listJoueur.push(joueur);
	var tank = new Tank({nom: joueur.id, numtank: joueur.numtank});
	listTank.push(tank);
}

