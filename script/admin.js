let hotelsformA = document.getElementById("hotelsform");



async function hotelsform(event) {
    event.preventDefault();
    let Category = document.getElementById("Category").value;
    let imgUrl = document.getElementById("img-url").value;
    Typeofroom = document.getElementById("Type-of-room").value;
    let Bedtype = document.getElementById("Bed-type").value;
    let Noofadults = document.getElementById("No-of-adults").value;
    let MaxCapacity = document.getElementById("Max-capacity").value;
    let Cost = document.getElementById("Cost").value;
    let obj = {
        "category": Category,
        "image_url": imgUrl,
        "type_of_room": Typeofroom,
        "bed_type": Bedtype,
        "no_of_persons": Noofadults,
        "capacity": MaxCapacity,
        "cost": Cost,
        "booked": false,
    }
// console.log(obj)
    let res = await fetch(`http://localhost:3000/hotels`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let data=await res.json();
    // console.log(data)
    alert("hotel aded")

}