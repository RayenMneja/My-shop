function addToCart(productId) {
    // Ici, vous pouvez implémenter la logique d'ajout au panier
    alert("Produit ajouté au panier avec l'ID : " + productId);
}
const images = [
    'https://i.pinimg.com/236x/c0/f6/58/c0f658346e1bcb0e65762c29d2f51302.jpg',
    'https://i.pinimg.com/236x/1e/f1/1d/1ef11dc3c7d3a197627460911116874a.jpg',
    'https://i.pinimg.com/236x/1e/e0/8b/1ee08b113169ab11b922b7579e5abe2f.jpg',
  ];
  document.getElementById('changeAdBtn').addEventListener('click', function() {
    var adContainer = document.getElementById('ad-container');
  function selectRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomIndex];
    return randomImageUrl;
  }
  window.onload = function() {
    const randomImageElement = document.getElementById('randomimge');
    const randomImageUrl = selectRandomImage();
    randomImageElement.src = randomImageUrl;
    
  };
  adContainer.innerHTML = '<img src="randomImageUrl" alt="">';
    
  });

  // Get a random index within the images array length
  const randomIndex = Math.floor(Math.random() * images.length);
  
  // Select the image element
  const imageElement = document.getElementById('randomimge');
  
  // Set the src attribute of the image to a randomly selected URL from the array
  imageElement.src = images[randomIndex];
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhOE7rdRlMPTcdoTcz-KpQ03nlbNdpQ-xOVMMakg1-3NCTf8TJNWUbmrqqvxrH5XJe/exec'

  const form = document.forms['contact-form']
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
  let phrases = [
    "Hello, world!",
    "JavaScript is amazing!",
    "AI will change everything!",
    "Never give up learning!"
   ];
   
   let i = 0;
   
   function afficherPhrase() {
    let phrase = phrases[i];
    console.log(phrase);
   
    i = (i + 1) % phrases.length;
   }
   
   // Afficher la première phrase immédiatement
   afficherPhrase();
   
   // Changer la phrase chaque seconde après
   setInterval(afficherPhrase, 1000);