function verifier() {
	var erreur = false;
	var msg = "";
	// contrôle pseudo 
	if(window.document.getElementById("pseudo").value == "")
		{ 
			erreur = true;
			msg += "\nPseudonyme obligatoire";
			window.document.getElementById("pseudo").style.borderColor = 'green';
		};
   // contrôle mdp
		if(window.document.getElementById("mdp").value == "")
		{ 
			erreur = true;
			msg += "\nMot de passe obligatoire";
			window.document.getElementById("mdp").style.borderColor = 'green';
		};
		if(window.document.getElementById("confirmation").value == "")
		{ 
			erreur = true;
			msg += "\nConfirmation mot de passe obligatoire";
			window.document.getElementById("confirmation").style.borderColor = 'green';
		};		
		// contrôle mail 
		if(window.document.getElementById("mail").value == "")
		{ erreur = true;
			msg += "\nEmail obligatoire";
			window.document.getElementById("mail").style.borderColor = 'green';
		};
		// message erreur
		if (erreur){ window.document.getElementById("erreur").style.display = 'block'; window.alert(msg);
		};
		// retour : filtrage ou non du submit
		return !erreur;
	}




