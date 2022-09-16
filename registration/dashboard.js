const output=document.getElementById("output")
 const search=document.getElementById("search")
 let userme =JSON.parse(localStorage.getItem("userDetails"))
 output.innerHTML=userme.fullName 

 