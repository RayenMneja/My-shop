function addToCart(productId) {
    // Ici, vous pouvez implémenter la logique d'ajout au panier
    alert("Produit ajouté au panier avec l'ID : " + productId);
}


  function test() {
    
    var adContainer = document.getElementById('ad-container');
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    const randomImageElement = document.getElementById('randomimge');
    randomImageElement.src = randomImageUrl;
    adContainer.innerHTML = '<img src="randomImageElement.src" alt="">';
  };







  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhOE7rdRlMPTcdoTcz-KpQ03nlbNdpQ-xOVMMakg1-3NCTf8TJNWUbmrqqvxrH5XJe/exec'

  const form = document.forms['contact-form']
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })

   
   let i = 0;
   
   function afficherPhrase() {
    let phrase = images[i];
    console.log(phrase);
   
    i = (i + 1) % phrases.length;
   }
   
   // Afficher la première phrase immédiatement
   afficherPhrase();
   
   // Changer la phrase chaque seconde après
   




    var images = [
    'https://i.pinimg.com/236x/c0/f6/58/c0f658346e1bcb0e65762c29d2f51302.jpg',
    'https://i.pinimg.com/236x/1e/f1/1d/1ef11dc3c7d3a197627460911116874a.jpg',
    'https://i.pinimg.com/236x/1e/e0/8b/1ee08b113169ab11b922b7579e5abe2f.jpg',
  ];

   let slideImages = document.querySelectorAll('ad-container');
   let index = 0;

   function changeImage() {
       
       setInterval(slideImages[index].style.display = 'block', 1000);
       slideImages[index].style.display = 'none';
       index++;

       if (index >= slideImages.length) {
           index = 0;
       }
   }
