//                                { Event: This }
// function addlink(anchorElement) {
//     anchorElement.style.color = "yellow"
//     anchorElement.href = "https://www.google.com"
// }


//                               { Document.getElementById() }
// document.getElementById(Heading)
// Heading.style.fontSize = "50px"
// Heading.style.color = "red"

// document.getElementById(para1)
// para1.style.color = "green"

// document.getElementById(para2)
// para2.style.color = "blue"

//                               {Trim}
// function submit() {
//     var emailElement = document.getElementById("email")

//     var passElement = document.getElementById("password")

//     if (emailElement.value.trim() && passElement.value.trim()) {
//         console.log(emailElement.value)
//         console.log(passElement.value)
//         emailElement.value = ""
//         passElement.value = ""
//     }
//     else {
//         alert("Field empty")
//     }
// }


function submit() {
    var radios = document.getElementsByClassName("genders")

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value)


        }
    }
}


// function submit(){
//     var paras=document.getElementsByClassName("para");

//     for(var i = 0; i < paras.length ;i++){
// paras[0].style.color="red"
// }


// }