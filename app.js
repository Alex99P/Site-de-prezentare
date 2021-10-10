let nume=document.getElementById("nume");
let mail=document.getElementById("mail");
let buton=document.getElementById("buton");



  function validare(){
  if(nume.value=="" || mail.value==""){
    alert("Toate campurile trebuie completate");
    return false;
  }
}

document.querySelectorAll(".inputs").forEach (item=>{ 
  item.addEventListener("keyup",function(e){
  if(e.keyCode==13){
    buton.click();
  }
})
})



