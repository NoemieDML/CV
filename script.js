// Fonctionnalité du Bouton experience
document.getElementById('Mes-loisir'). //l'élément HTML avec l'ID experience
addEventListener('click', function() { //Cette méthode écoute un événement particulier (ici, click) sur le bouton.
    const hidden = document.getElementById('hidden'); //récupère l'élément avec l'ID hidden (l'élément à afficher ou masquer).
    
    // const experience = document.getElementById('Mes-loisir');
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
    } else {
        hidden.style.display = 'none';
    }
});

//Cette partie vérifie si la propriété CSS display de l'élément hidden est définie sur none (invisible).
//Si oui, la valeur display est changée en block pour afficher l'élément.
//Sinon, la valeur display est changée en none pour masquer l'élément.
