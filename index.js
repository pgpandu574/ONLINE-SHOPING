let container=document.getElementById('container')

let data;

async function getData(){
  try{
    let  res = await fetch('https://fakestoreapi.com/products');
     data=await res.json();
      appendProducts(data);
  }
  catch (err) {
    console.log('err:',err); 
  }
  
  
}
getData();


// we need to append

function appendProducts(data){
    container.innerHTML = null;
         
  //data -array of object
  data.forEach(function (el) {
    

    let div=document.createElement('div')
    
    let img=document.createElement('img')
    
    img.src=el.image;
    
    let title =document.createElement('p')

        title.innerText=el.title;
    
    let price=document.createElement('p')
      price.innerText=el.price;

    div.append(img, title, price);
    
    container.append(div);
  
    
  });


}
function sortLH(){


  let copy_data=data;
  data=data.sort(function (a,b){
   return a.price-b.price;


  });

  appendProducts(data);

}
function sortHL(){
    data=data.sort(function (a,b){
     return b.price-a.price;
  
  
    });
  
    appendProducts(data);
  
  }
  // how to keep orginal data ?

  //dynamic filtering 


  function filter(){
    
    let query=document.getElementById('query').value
    let copy_data= data;

     copy_data =copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query);
       });
       appendProducts(copy_data);
  }



  //.sort

  //.filter

  //create a copy of array which does not change orginal array


  //let copy_data=[...data] //speard operataor



