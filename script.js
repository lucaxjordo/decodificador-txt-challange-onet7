// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "enter"`
// `A letra "i" é convertida para "imes"`
// `A letra "a" é convertida para "ai"`
// `A letra "o" é convertida para "ober"`
// `A letra "u" é convertida para "ufat"`

// Capturando os botões
let encrypt = document.querySelector("#btn-criptografar");
let decrypt = document.querySelector("#btn-descriptografar");
let copy = document.querySelector('#btn-copiar');

// Capturando campo de entrada e resultado
let textAreaEnter = document.querySelector("textarea");
let textAreaResult = document.getElementById("textarea-resultado");


// Função para mostrar campo resultado no lugar da imagem
function alteraTela() {
    document.querySelector('#conteudo-apresentacao').style.display = 'none';
    document.querySelector("#textarea-resultado").style.display = 'block';
    document.querySelector('#btn-copiar').style.display = 'block';

};

// Funcação para criptografar
function criptgrafar() {
    // funcao altera display 
    alteraTela();

    // guardando o valor da variável do textarea digitado
    let alterandoTexto = textAreaEnter.value;

    // guardando o texto digitado criptografado
    let textoCriptografado;

    // lógica da criptografia
    textoCriptografado = alterandoTexto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    
    // Textarea que exibe o resultado já criptografado
    textAreaResult.value = textoCriptografado;    
}; 

// Funcação para descriptografar
function descriptografar() {
    // funcao altera display 
    alteraTela();

    // guardando texto para descriptografar
    let alterandoTexto = textAreaEnter.value;

    // guardando o texto descriptografado
    let textoDescriptografado;

    // lógica de descriptografia
    textoDescriptografado = alterandoTexto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    
    // Textarea que exibe o resultado já descriptografado
    textAreaResult.value = textoDescriptografado;
};

// Funcação para copiar texto criptografado
async function copiaTextoResultado() {
    // copiando texto no textarea que mostra resultado
    await navigator.clipboard.writeText(textAreaResult.value);

    // exibindo alerta de copiado com sucesso
    alert('Texto copiado com sucesso!');

    // recarregando a página sem apagar cache do navegador
    window.location.reload();
}

// adicionando evento de click no botão
encrypt.onclick = criptgrafar;
decrypt.onclick = descriptografar;
copy.onclick = copiaTextoResultado;

