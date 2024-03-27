const getIpAddress = async() => {
    try{
      const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
      const data = await response.text();
      const ipMatc = data.match(
        /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/,
      );
      if (ipMatc) {
        console.log(ipMatc[0]);
      }
    }catch(err){
      console.log('err');
    }
  }
getIpAddress()
let cart = [];
let items = '';
let itemsCount = {};
let flous=[10,20,66,40,55,60,70,35,200];
let produit=["a5thar 7chich","a5tharna3ne3i","a7mar ch3chou3i","a7mar","asfar mible7","asfar","azra9","gray","kharawi"];
let somme = 0;
        function addToCart(productId) {
           Swal.fire({
            title: "Multiple inputs",
            html: `
              <input id="swal-input1" class="swal2-input">
            `,
            focusConfirm: false,
            preConfirm: () => {
                nb =document.getElementById("swal-input1").value,
                items+=nb;
                console.log(items);
                cart.push(productId);
                renderCart();
                var s= document.getElementById('h3');
                const v= flous[productId]*nb;
                const t = somme;
                somme=t+v;
                s.innerHTML = 'total: dt '+somme;
                
                
            }
          });
            
            
            
        }
        function finCommend(){
            let commend ='';
            jj=0;
            cart.forEach(productId => {
                commend = commend + produit[productId]+'x'+ items[jj] +' , ';
                jj++;
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
            let cartBody = document.getElementById('cart-body');
            cartBody.innerHTML = '';
            cart.forEach((productId,i) => {
                itemsCount[productId]=items[i];
                let row = document.createElement('tr');
                let productCell = document.createElement('td');
                productCell.textContent = produit[productId]+'x'+items[i];
                cartBody.appendChild(row);
                let priceCell = document.createElement('td');
                priceCell.textContent = 'dt' + flous[productId]*Number(items[i]);
                let dalite = document.createElement('button');
                dalite.className = "btn";
                dalite.textContent = 'delete';
                dalite.addEventListener('click', () => {
                    indexx=Number(items[cart.indexOf(productId)])
                    items=items.slice(0,i)+items.slice(i+1,items.length);  
                    cart.splice(i, 1);
                    renderCart();                
                    var s= document.getElementById('h3');
                    const v= flous[productId]*itemsCount[productId];
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
            items='';
            renderCart();
            var s= document.getElementById('h3');
            somme=0
            s.innerHTML = 'total: dt '+somme;
            cartBody.innerHTML =removeChild(cartBody.lastElementChild) ; 
      }
    }); 
  }
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});

jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
  document.getElementById('accueil').setAttribute('style', 'display: block');
  document.getElementById('shop1').setAttribute('style', 'display: none');
  document.getElementById('shop2').setAttribute('style', 'display: none');
  document.getElementById('panie').setAttribute('style', 'display: none');
});
function btn1(){

  document.getElementById('accueil').setAttribute('style', 'display: block');
  document.getElementById('shop1').setAttribute('style', 'display: none');
  document.getElementById('shop2').setAttribute('style', 'display: none');
  document.getElementById('panie').setAttribute('style', 'display: none');
}
function btn2(){

  document.getElementById('shop1').setAttribute('style', 'display: block');
  document.getElementById('accueil').setAttribute('style', 'display: none');
  document.getElementById('shop2').setAttribute('style', 'display: none');
  document.getElementById('panie').setAttribute('style', 'display: none');
}
function btn3(){

  document.getElementById('shop2').setAttribute('style', 'display: block');
  document.getElementById('accueil').setAttribute('style', 'display: none');
  document.getElementById('shop1').setAttribute('style', 'display: none');
  document.getElementById('panie').setAttribute('style', 'display: none');
}
function btn4(){

  document.getElementById('panie').setAttribute('style', 'display: block');
  document.getElementById('accueil').setAttribute('style', 'display: none');
  document.getElementById('shop1').setAttribute('style', 'display: none');
  document.getElementById('shop2').setAttribute('style', 'display: none'); 
}






