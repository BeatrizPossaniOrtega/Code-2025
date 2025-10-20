// Capturamos os elementos do HTML
const formulario = document.getElementById('formulario-imc');
const divMensagem = document.getElementById('mensagemResultado');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

// Adicionamos o "ouvinte" para o clique no botão
formulario.addEventListener('submit', function(evento) {

  evento.preventDefault();
  
  const valorPeso = parseFloat(peso.value);
  
  // --- MUDANÇA 1 ---
  // Pegamos a altura e JÁ DIVIDIMOS POR 100 para converter para metros
  const valorAlturaEmMetros = parseFloat(altura.value) / 100;

  // --- MUDANÇA 2 ---
  // A validação agora usa a nova variável 'valorAlturaEmMetros'
  if (isNaN(valorPeso) || isNaN(valorAlturaEmMetros) || valorPeso <= 0 || valorAlturaEmMetros <= 0) {
    
    divMensagem.textContent = "Por favor, preencha peso e altura com valores válidos.";
    divMensagem.style.color = "red";
    
  } else {
    
    // --- MUDANÇA 3 ---
    // O cálculo agora usa a nova variável 'valorAlturaEmMetros'
    const imc = valorPeso / (valorAlturaEmMetros * valorAlturaEmMetros);
    
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
    
    // E mostramos o resultado final
    divMensagem.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong> (${classificacao})`;
    divMensagem.style.color = "black";
  }
  
});