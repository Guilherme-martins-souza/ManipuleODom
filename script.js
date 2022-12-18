//aponta para o botão do html
const botao = document.querySelector('[data-botao]');

//informa ao navegador que caso seja clicado no botão executura uma função anonima
botao.addEventListener('click', (evento) =>{

    // faz com que o botão de submit não atualize a pagina
    evento.preventDefault()

    // pega o que está escrito no input de texto
    const inputTexto = document.querySelector('[data-texto]');

    // esta linha selecionamos a UL do html
    const listaTarefas = document.querySelector('[data-lista]');
    //const itemTarefa = document.querySelector('[data-item]')

    // criando um elemento LI
    const itemLista = document.createElement('li');
    // criando um elemento P para adicionarmos dentro da LI
    const alteracao = `<p class="tarefas">${inputTexto.value}</p> <button>arroz</button`

    // adicionando o elemento P dentro da LI
    itemLista.innerHTML = alteracao;

    // itemTarefa.innerHTML = alteracao;

    //adicionando o elemento LI que criamos dentro da UL.
    listaTarefas.appendChild(itemLista);

})