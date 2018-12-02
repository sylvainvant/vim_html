$(document).ready(function () {

    var $pseudo, $mdp, $confirmation, $mail, $envoi, $reset, $erreur, $champ;
    var $erreurSaisie = false;
    $pseudo = $('#pseudo');
    $mdp = $('#mdp');
    $confirmation = $('#confirmation');
    $mail = $('#mail');
    $envoi = $('#envoi');
    $reset = $('#rafraichir');
    $erreur = $('#erreur');
    $champ = $('.champ');


    $pseudo.on('keyup', function () {
        //alert("Ceci est un message");
        if ($pseudo.val() == "") {
            //alert("Ceci est un message");
            $pseudo.css("border", "3px solid red");
        }
        else {
            $pseudo.css("border", "3px solid green");
        }
    });

    $confirmation.keyup(function () {
        if ($(this).val() != $mdp.val()) {
            //alert("Ceci est un message");
            $(this).css(
                {
                    color: 'red'
                });
        }
        else {
            $(this).css({
                borderColor: 'green',
                color: 'green'
            });
        }
    });

    function verifier(champ) {
        if (champ.val() == "") {
            $erreur.css('display', 'block');
            champ.css({
                borderColor: 'red',
                color: 'red'
            });
            $erreurSaisie = true;
        }
    }

    $envoi.click(function (e) {
        $erreurSaisie = false;
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
        if ($erreurSaisie) {
            e.preventDefault();
        }
    });

    $reset.click(function () {
        $champ.css({
            borderColor: '#ccc',
            color: '#555'
        });

        $erreur.css('display', 'none');
    });

});




