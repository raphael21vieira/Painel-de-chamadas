const vSenha=document.querySelector("#senha")
let senhaNormal=localStorage.getItem("senhaNormal");
let senhaPreferencial=localStorage.getItem("senhaPreferencial")
let ultimaSenha=localStorage.getItem("ultimaSenha")

if (!senhaNormal) {
  senhaNormal=0;
}
if (!senhaPreferencial) {
  senhaPreferencial=0;
}
if (!ultimaSenha) {
  ultimaSenha="N";
}
mostrarSenha()

window.addEventListener('keydown',function(e){
  if (e.key=="n"|| e.key=="N") {
    senhaNormal++;
    ultimaSenha="N";  
  }else if (e.key=="p"|| e.key=="P") {
    senhaPreferencial++;
    ultimaSenha="P"; 
  }else if(e.key=="R"||e.key=="r"){
    ultimaSenha="N"
    senhaNormal=0;
    senhaPreferencial=0

  }

  localStorage.setItem('senhaNormal',senhaNormal)
  localStorage.setItem('senhaPreferencial',senhaPreferencial)
  localStorage.setItem('ultimaSenha',ultimaSenha)

  mostrarSenha();

})

function mostrarSenha() {
  if (ultimaSenha=="N") {
    vSenha.innerHTML = "N"+parseInt(senhaNormal).toLocaleString('pt-br',{minimumIntegerDigits:3})
  
  }else{
    vSenha.innerHTML = "P"+parseInt(senhaPreferencial).toLocaleString('pt-br',{minimumIntegerDigits:3})

  }
  
}