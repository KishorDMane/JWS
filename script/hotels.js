let container = document.getElementById('container');

async function getdata() {
   try{
    let res=await fetch("http://localhost:3000/hotels")

    data=await res.json();
    console.log(data)
    vievcart(data)
   }catch(err){
    console.log(err)
   }

}
getdata() 

function vievcart(data){
container.innerHTML=null


data.forEach((el)=>{

div=document.createElement("div");
div.className="cart"
innerdiv=document.createElement("div");
innerdiv.className="minicart"


let img=document.createElement("img")
img.src=el.image_url

let type=document.createElement("p")
type.innerText=el.category+"   Room"

let no_of_persons=document.createElement("p")
no_of_persons.innerText="Adult"+el.no_of_persons
let type_of_room=document.createElement("type_of_room");
type_of_room.innerText="Room Type:-"+el.type_of_room;

let bed_type=document.createElement('p');
bed_type.innerText="Bed Type:-    "+el.bed_type;

let cost=document.createElement('p');
cost.innerText="Price:-   "+el.cost+"/Night"
btn=document.createElement("button")
btn.innerText="Book Now"

innerdiv.append(type,no_of_persons,type_of_room,bed_type,cost,btn)
div.append(img , innerdiv)
container.append(div)
})




}