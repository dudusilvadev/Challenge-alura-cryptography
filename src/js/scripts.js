var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//recuperando os valores

var entrada = document.getElementById("tx-criptografia");
var btnCriptografia = document.getElementById("btn-criptografia");
var btnDescriptografia = document.getElementById("btn-descriptografia");
var copyElement = document.getElementById("btn-copyElement");

var txDescriptografia = document.getElementById("tx-descriptografia");


const chave = 'eiaou';
const cripto = ['enter', 'imes','ai','ober','ufat'];
var displayLine = document.getElementById('comMsg').style.display = "none";
var displayLinePast = document.getElementById('btn-pastElement').style.display = "none"; 


function atualizaBackgroundResultado(){
  txDescriptografia.classList.add('remove-background');
}
//função para criptografar a mensagen
function criptografar(texto){
  for (let i = 0; i < chave.length; i++) texto = texto.replaceAll(chave[i], cripto[i]);
  
  return texto;
}
//função para descriptografar a mensagen
function descriptografar(texto){
  for (let i = 0; i < chave.length; i++) texto = texto.replaceAll(cripto[i], chave[i]);
  return texto;
}
//função para mostrar ou esconder um elemento
function mostraElement(id,style) {

  var displayLine = document.getElementById(id).style.display = style;
}

btnCriptografia.addEventListener('click', function(){
  if (entrada.value != ''){
    txDescriptografia.textContent = criptografar(entrada.value);
      atualizaBackgroundResultado();
      //elemento sem conteudo ativo
      mostraElement('noneMsg', "none");
      mostraElement('comMsg', "block");
      //botão cpy e past
      mostraElement('btn-copyElement', "block");
      mostraElement('btn-pastElement', "none");

    
  
        
  }else{
    alert('Digite um valor!');
  }

});
btnDescriptografia.addEventListener('click', function(){
  if (entrada.value != ''){
    txDescriptografia.textContent = descriptografar(entrada.value);
      atualizaBackgroundResultado();
      //elemento sem conteudo oculto
      mostraElement('noneMsg', "none");
      mostraElement('comMsg', "block");
      //botão cpy e past
      mostraElement('btn-copyElement', "block");
      mostraElement('btn-pastElement', "none");
      
  }else{
    alert('Digite um valor!');
  }
});

copyElement.addEventListener('click', function(){
  
    var text = txDescriptografia.textContent;
    navigator.clipboard.writeText(text);
    //botão cpy e past
    mostraElement('btn-copyElement', "none");
    mostraElement('btn-pastElement', "block");
  
});








