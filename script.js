function scrollProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
})

}

function validateForm(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let msg=document.getElementById("msg").value

if(name=="" || email=="" || msg==""){
alert("Please fill all fields")
return false
}

alert("Message sent successfully!")

return true

}