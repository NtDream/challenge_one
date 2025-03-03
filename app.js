//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// Array para armazenar os nomes dos amigos

let amigos = []





// Função para adicionar amigos e armazenar em lista

function adicionarAmigo() {

    // Capturar o valor do campo de entrada
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim(); // Remove espaços em branco no início e no fim


    // Validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; // Sai da função se o nome estiver vazio
    }




    // Função para atualizar lista de amigos
    amigos.push(nome);


    // Limpar o campo de entrada
    inputNome.value = '';


    // Atualizar a exibição da lista de amigos (opcional)
        atualizarListaAmigos();

        console.log('Amigo adicionado:', nome);
        console.log('Lista atual de amigos:', amigos);

}



// Função para atualizar a exibição da lista de amigos (opcional)
function atualizarListaAmigos() {
    let listaEl = document.getElementById('listaAmigos');
    listaEl.innerHTML = ''; // Limpa a lista atual
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaEl.appendChild(li);
    });
}




// Função para sortear amigo aleatoriamente

function sortearAmigo() {
    
    // Validar se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de realizar o sorteio.');
        return; // Sai da função se não houver amigos
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado no elemento HTML
    let resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

    console.log('Amigo sorteado:', amigoSorteado);
}
