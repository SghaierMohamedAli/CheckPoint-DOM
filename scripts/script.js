var products = [
    {
        nom : "Logitek Mouse",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 150,
        quantity : 0,
        img : "assets/souris.jpg"
    },
    {
        nom : "Logitek Keyboard",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 250,
        quantity : 0,
        img : "assets/keyboard.jpg"
    },
    {
        nom : "LG Monitor",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 450,
        quantity : 0,
        img : "assets/monitor.jpg"
    },
    {
        nom : "Logitek Mic",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 50,
        quantity : 0,
        img : "assets/mic.jpg"
    },
    {
        nom : "Logitek Headset",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 150,
        quantity : 0,
        img : "assets/headset.jpg"
    },
    {
        nom : "Logitek Screen",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 250,
        quantity : 0,
        img : "assets/screen.jpg"
    },
    {
        nom : "Logitek Mouse Pad",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quod.",
        prix : 50,
        quantity : 0,
        img : "assets/pad.jpg"
    }
]

window.onload = function Dom(){
    let productsListHtmlElement = document.getElementsByClassName('products-list')[0];
    for(let product of products){
        let productElement = document.createElement("div");
        productElement.setAttribute("class","product");
        productElement.innerHTML = `
            <img src="${product.img}" alt="">
            <h3>${product.nom}</h3>
            <p>${product.description}</p>
            <h4>${product.prix}DT</h4>
            <button>Add to card</button>
            <h2 hidden>${product.quantity}</h2>

        `;
        productsListHtmlElement.appendChild(productElement);
       
        let btn = productElement.getElementsByTagName("button")[0];
        btn.addEventListener('click',ClickButton);

    }
    
    

    
}

function ClickButton(e){
    let button = e.target;
    let ProductName=button.parentElement.getElementsByTagName("h3")[0]
    let ProductImage=button.parentElement.getElementsByTagName("img")[0]
    let ProductPrice=button.parentElement.getElementsByTagName("h4")[0]
    let ProductQuantity=button.parentElement.getElementsByTagName("h2")[0]
    let PanierListHtmlElement=document.getElementsByClassName('cart-elements')[0];
    if (ProductQuantity.innerText==0)
    {
        ProductQuantity.innerText++
    let PanierElement=document.createElement("div");
    PanierElement.setAttribute("class","cartproduct");
    PanierElement.innerHTML=`<img src="${ProductImage.getAttribute("src")}" alt="">
    <h3>${ProductName.innerText}</h3>
    <h3>${ProductPrice.innerText}</h3>
    <button class="quantitycontrol minus">-</button>
    <h3>${ProductQuantity.innerText}</h3>
    <button class="quantitycontrol plus">+</button>
    <button class=removebutton>remove</button>

    `;
    PanierListHtmlElement.appendChild(PanierElement);
    let btn=PanierElement.getElementsByTagName("button")[2]
    let btnminus=PanierElement.getElementsByTagName("button")[0]
    let btnplus=PanierElement.getElementsByTagName("button")[1]
    btn.addEventListener('click',RemoveProductCompletly)
    btnminus.addEventListener('click',RemoveProduct)
    btnplus.addEventListener('click',AddProduct)

    }
    else
    {
        ProductQuantity.innerText++
        let CartProducts=PanierListHtmlElement.getElementsByClassName("cartproduct")
        for (let i=0;i<CartProducts.length;i++)
        {
            if (CartProducts[i].getElementsByTagName("h3")[0].innerText==ProductName.innerText)
            {
                CartProducts[i].getElementsByTagName("h3")[2].innerText=ProductQuantity.innerText
            }
        }
    }
    console.log(ProductQuantity.innerText)
    
    
    UpdateTotal()
    RemoveAllShow()
    ShowPurchase()



}

function UpdateTotal()
{
let cartelements=document.getElementsByClassName('cartproduct')
console.log(cartelements)
let totalhtml=document.getElementsByClassName('total')[0]
let total=0;
for (let i=0; i<cartelements.length;i++)
{
let productpricefortotal=cartelements[i].getElementsByTagName("h3")[1]
total=total+(parseFloat(productpricefortotal.innerText.replace('DT',''))*cartelements[i].getElementsByTagName("h3")[2].innerText)
}
totalhtml.innerText=total+' DT'



}



function RemoveProduct(e)
{


    let button=e.target 
    let Product=button.parentElement
    let ProductName=Product.getElementsByTagName("h3")[0]
    let ProductQuantity=Product.getElementsByTagName("h3")[2]
    let Products=document.getElementsByClassName("product")
    console.log(Products.length)
    
    for(let i=0;i<Products.length;i++)
     {

        if (Products[i].getElementsByTagName("h3")[0].innerText==ProductName.innerText)
        {

            Products[i].getElementsByTagName("h2")[0].innerText=Products[i].getElementsByTagName("h2")[0].innerText-1
            ProductQuantity.innerText= Products[i].getElementsByTagName("h2")[0].innerText
        }
       
     }
     if ( ProductQuantity.innerText==0)
     {
        Product.remove()
     }
    UpdateTotal()
    RemoveAllShow()
    ShowPurchase()


}


function AddProduct(e)
{


    let button=e.target 
    let Product=button.parentElement
    let ProductName=Product.getElementsByTagName("h3")[0]
    let ProductQuantity=Product.getElementsByTagName("h3")[2]
    let Products=document.getElementsByClassName("product")
    console.log(Products.length)
    
    for(let i=0;i<Products.length;i++)
     {

        if (Products[i].getElementsByTagName("h3")[0].innerText==ProductName.innerText)
        {

            Products[i].getElementsByTagName("h2")[0].innerText++
            ProductQuantity.innerText= Products[i].getElementsByTagName("h2")[0].innerText
        }
       
     }

    UpdateTotal()


}


function RemoveProductCompletly(e)
{

    let button=e.target 
    let Product=button.parentElement
    let ProductName=Product.getElementsByTagName("h3")[0]
    let ProductQuantity=Product.getElementsByTagName("h3")[2]
    let Products=document.getElementsByClassName("product")
    console.log(Products.length)
    
    for(let i=0;i<Products.length;i++)
     {

        if (Products[i].getElementsByTagName("h3")[0].innerText==ProductName.innerText)
        {

            Products[i].getElementsByTagName("h2")[0].innerText=0
            ProductQuantity.innerText= Products[i].getElementsByTagName("h2")[0].innerText
        }
       
     }
     Product.remove()

    UpdateTotal()
    RemoveAllShow()
    ShowPurchase()



}


function RemoveAllShow()
{

   let CartProducts=document.getElementsByClassName("cartproduct")
   let cart=document.getElementsByClassName("cart")[0]
   let RemoveAll=cart.getElementsByTagName("h4")[0]
    if (CartProducts.length>0)
    {
     RemoveAll.innerText="Remove All"
     RemoveAll.addEventListener('click',RemoveAllProducts)


    }
    else 
    {
        RemoveAll.innerText=""
    }
}


function RemoveAllProducts(e)
{
    let CartProducts=document.getElementsByClassName("cartproduct")
    let Products=document.getElementsByClassName("product")    
    for(let i=0;i<Products.length;i++)
     {


            Products[i].getElementsByTagName("h2")[0].innerText=0
        
       
     }
    do
    {
        
        CartProducts[0].remove()
    }
    while(CartProducts[0]!=undefined)
    
    UpdateTotal()
    RemoveAllShow()
    ShowPurchase()




}


function ShowPurchase()
{

    
    let PurchaseSection=document.getElementsByClassName("total-purchase")[0]
    let PurchaseButton=PurchaseSection.getElementsByTagName("button")[0]
    let CartProducts=document.getElementsByClassName("cartproduct")
    console.log(CartProducts.length)
    if (CartProducts.length>0)
    {
     
        PurchaseButton.innerText="Purchase"
        PurchaseButton.removeAttribute("hidden"); 
        PurchaseButton.addEventListener('click',PurchaseAlert)







    }
    else
    {

        PurchaseButton.setAttribute("hidden", true);

    }

}

function PurchaseAlert()
{

    alert("Purchase Completed!");
    RemoveAllProducts()

}



