let amigos = [];

function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == '') {
        alert('Informe o nome de um amigo');
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo.value);

    if(listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    
    nomeAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function sortear () {
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralhar(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i ++) {
        if(i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {

    let indice = lista.length
    
    while(indice) { 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}