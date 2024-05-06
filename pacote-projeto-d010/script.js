
var filtroInput = document.getElementById('filtroInput');


var tabela = document.getElementById('minhaTabela');


var linhas = tabela.getElementsByTagName('tr');


filtroInput.addEventListener('input', function() {
    // Obtém o valor do campo de filtro
    var filtro = filtroInput.value.toUpperCase();


    for (var i = 0; i < linhas.length; i++) {
        var celulas = linhas[i].getElementsByTagName('td');
        var mostrar = false;
        for (var j = 0; j < celulas.length; j++) {
            var textoCelula = celulas[j].innerText || celulas[j].textContent;
            if (textoCelula.toUpperCase().indexOf(filtro) > -1) {
                mostrar = true;
                break;
            }
        }
        linhas[i].style.display = mostrar ? '' : 'none';
    }
});


function copiarEmail(email) {
    // Cria um elemento de texto temporário
    var elementoTemp = document.createElement("textarea");
    // Define o valor do texto como o e-mail
    elementoTemp.value = email;
    // Adiciona o elemento ao corpo do documento
    document.body.appendChild(elementoTemp);
    // Seleciona o texto
    elementoTemp.select();
    // Copia o texto selecionado
    document.execCommand("copy");
    // Remove o elemento temporário
    document.body.removeChild(elementoTemp);
    
    // Exibe o aviso
    var aviso = document.getElementById("aviso");
    aviso.style.display = "block";
    // Esconde o aviso após 2 segundos
    setTimeout(function(){
        aviso.style.display = "none";
    }, 2000);
}
