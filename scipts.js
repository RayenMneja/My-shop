let cart = [];
let flous=[10,20,66,40,55,60,70,35,200];
let produit=["a5thar 7chich","a5tharna3ne3i","a7mar ch3chou3i","a7mar","asfar mible7","asfar","azra9","gray","kharawi"];
        let somme = 0;

       index++;

       if (index >= slideImages.length) {
           index = 0;
       }
        function rest(){   
            let slide = document.getElementById('cart-body');
            

            var s= document.getElementById('h3');
            s.innerHTML = ''
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
              .then(response => alert("Thank you! your form is submitted successfully." ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            });
        }
     function renderCart() {
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
            });
    
            row.appendChild(productCell);
            row.appendChild(priceCell);
            row.appendChild(dalite);
        });
    }

