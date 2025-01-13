document.getElementById('Réseaux-sociaux').
addEventListener('click', function() {
    arrow1.classList.toggle('arrow')
    const Button3 = document.getElementById('Button3');
    Button3.classList.toggle('displayNone')
    
});

// Fonctionnalité du Bouton experience
document.getElementById('Mes-loisir'). //l'élément HTML avec l'ID experience
addEventListener('click', function() { //Cette méthode écoute un événement particulier (ici, click) sur le bouton.
    arrow2.classList.toggle('arrow')
    const hidden = document.getElementById('hidden'); //récupère l'élément avec l'ID hidden (l'élément à afficher ou masquer).
    // const experience = document.getElementById('Mes-loisir');
    hidden.classList.toggle('displayNone')
});
//Cette partie vérifie si la propriété CSS display de l'élément hidden est définie sur none (invisible).
//Si oui, la valeur display est changée en block pour afficher l'élément.
//Sinon, la valeur display est changée en none pour masquer l'élément.

document.getElementById('Mode-de-transport').
addEventListener('click', function() {
    arrow3.classList.toggle('arrow')
    const button2 = document.getElementById('button2');
    button2.classList.toggle('displayNone')
});

document.getElementById('Mes-dépot-github').
addEventListener('click', function() {
    arrow4.classList.toggle('arrow')
    const button4 = document.getElementById('button4');
    button4.classList.toggle('displayNone')
    
});

// Sélectionner les éléments HTML pour afficher le profil et les dépôts

const reposDiv = document.getElementById("repos");
const display = document.querySelector("#display");



// Fonction pour récupérer et afficher les dépôts publics GitHub
async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error(`GitHub repos not found: ${response.statusText}`);
        }
        const repos = await response.json();

        console.log(repos)

        // Construire le contenu HTML pour chaque dépôt
        const reposHTML = repos
            .map(repo => `
                <div style="margin-bottom: 10px; border: 0px solid #ddd; padding: 10px; border-radius: 5px;">
                    <h3 style="margin: 0;"><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: #8f6f3f;">${repo.name}</a></h3>
                    <p style="margin: 5px 0;">${repo.description || "No description available."}</p>
                
                </div>
            `)
            .join("");

        // Insérer le contenu dans la div
        reposDiv.innerHTML = reposHTML;
    } catch (error) {
        reposDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fonction pour afficher les dépots au clic
display.addEventListener("click", async () => {
    display.textContent = "Loading...";
    await fetchGitHubRepos(username);
    // Faire disparaître le bouton après avoir cliqué dessus
    display.style.display = "none";
});

// Appeler les fonctions avec votre nom d'utilisateur GitHub
const username = "NoemieDML"; // Remplacez par votre nom d'utilisateur GitHub
fetchGitHubRepos(username);
