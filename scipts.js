let cart = [];
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
                const v= productId * 10;
                const t = somme;
                somme=t+v;
                s.innerHTML = 'total: dt '+somme;
        }


        function envoier(){
            let ev = document.getElementById('tname');
            let commend ='';
            cart.forEach(productId => {
                
                commend = commend + 'Product ' + productId;
                return commend
                
            });
            ev.value = commend ;
        }
        function renderCart() {
            let cartBody = document.getElementById('cart-body');
            cartBody.innerHTML = '';
            cart.forEach(productId => {
                
                let row = document.createElement('tr');
                let productCell = document.createElement('td');
                productCell.textContent = 'praduit '+productId;

                
                cartBody.appendChild(row);
                
                let priceCell = document.createElement('td');
                priceCell.textContent = 'dt' + productId * 10;
                row.appendChild(productCell);
                row.appendChild(priceCell);
            });
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxNmOC-NG-0JrmR6YYzF9k7vlRVRfPwrtgk3vittmf3A4jtqnggd2b-lyC9RUX3kouV8g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
        }