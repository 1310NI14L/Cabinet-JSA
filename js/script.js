//Défilement fluide pour les liens de naviguations 
document.querySelectorAll ('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollintoView({
            behavior:'smooth'
        });
    });
});

//Gestionnaire de soumission de contact(exemple)

document.getElementById('contact-form')?.addEventListener('submit',function(event) {
    event.preventDefault();

    //Récupérer les donnés du formulaire

    const formData = new FormData(this);
    
    //Créer un objet pour stocker les données

    let data = {};
    formData.forEach((value, Key) =>data[Key]=value);

    //Afficher les données dans la console (pour le développement) 
    console.log(data);

    //simuler une réponse de soumission réussie 
    alert('Merci pour votre message ! Nous vous répondrons sous peu.');

    //Rénitialiser le formulaire
    this.requestFullscreen();
});