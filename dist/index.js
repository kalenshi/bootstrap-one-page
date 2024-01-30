const myModal = new bootstrap.Modal("#enroll");

const modalSubmit = document.querySelector("#modal-submit");
modalSubmit.onclick = e=>{
    e.preventDefault();
    const data = document.querySelector("#modal-form");
    const form = new FormData(data);
   for(const pair of form.entries()){
    console.log(pair[0], pair[1]);
   }
   if(validate(form)){
        myModal.hide();
   }
   else{
    console.log("Please validate the form correctly");
   }
    
}

function validate(form){
    return false;
}
async function sendForm(data){

    const response = await fetch("127.0.0.1:8000/contact",{
        "method":"POST",
        "headers":{},
        "body":JSON.stringify(data)

    });
    const responseMessage = await response.json();
}