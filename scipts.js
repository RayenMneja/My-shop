
let cart = [];
let flous=[10,20,66,40,55,60,70,35,200];
let produit=["a5thar 7chich","a5tharna3ne3i","a7mar ch3chou3i","a7mar","asfar mible7","asfar","azra9","gray","kharawi"];
        let somme = 0;

       index++;

       if (index >= slideImages.length) {
           index = 0;
       }

        function addToCart(productId) {
            cart.push(productId);
            renderCart();
            var s= document.getElementById('h3');
                const v= flous[productId];
                const t = somme;
                somme=t+v;
                s.innerHTML = 'total: dt '+somme;
        }


        function finCommend(){

            let commend ='';
            cart.forEach(productId => {
                
                commend = commend + produit[productId] +' , ';
                
            });
            return commend
        }
        function envoier(){
            let ev = document.getElementById('tname');
            ev.value = finCommend() ;
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxNmOC-NG-0JrmR6YYzF9k7vlRVRfPwrtgk3vittmf3A4jtqnggd2b-lyC9RUX3kouV8g/exec'

            const form = document.forms['contact-form']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              }))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            });
        }
     function renderCart() {
      Swal.fire({
        title: "How old are you?",
        icon: "question",
        input: "range",
        inputLabel: "Your age",
        inputAttributes: {
          min: "8",
          max: "120",
          step: "1"
        },
        inputValue: 25
      });
        let cartBody = document.getElementById('cart-body');
        cartBody.innerHTML = '';
        cart.forEach(productId => {
            let row = document.createElement('tr');
            let productCell = document.createElement('td');
            productCell.textContent = produit[productId];
            cartBody.appendChild(row);
            let priceCell = document.createElement('td');
            priceCell.textContent = 'dt' + flous[productId];
            let dalite = document.createElement('button');
            dalite.textContent = 'delete';
            dalite.addEventListener('click', () => {
                cart.splice(cart.indexOf(productId), 1);
                renderCart();
                var s= document.getElementById('h3');
                const v= flous[productId];
                const t = somme;
                somme=t-v;
                s.innerHTML = 'total: dt '+somme; 
              }
            );
            row.appendChild(productCell);
            row.appendChild(priceCell);
            row.appendChild(dalite);
        });
    }
    function rechercherProduits() {
      let recherche = document.getElementById("recherche").value;
      let resultat = [];
      let compt ="";
      for (let i = 0; i < produit.length; i++) {
        let produitF = produit[i];

        if (produitF.toLowerCase().includes(recherche.toLowerCase())) {
          resultat.push(produitF);
          compt=compt+String(i);
        }
      }
      if (recherche==""){
        document.getElementById("resultat").innerHTML = '';
      }else{
        let affichage = "";
        for (let i = 0; i < resultat.length; i++) {
          affichage += `<a class="ch" href="#${compt[i]}">${resultat[i]}</a>`;
        }      
        document.getElementById("resultat").innerHTML = affichage;
        
      }
      
    };
function restall(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
          })
            let cartBody = document.getElementById('cart-body');
            cart.splice(0);
            renderCart();
            var s= document.getElementById('h3');
            somme=0
            s.innerHTML = 'total: dt '+somme;
            cartBody.innerHTML =removeChild(cartBody.lastElementChild) ; 
      }
    }); 
  }


'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})




