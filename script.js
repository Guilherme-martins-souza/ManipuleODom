( () => {
//aponta para o botão do html
const botao = document.querySelector('[data-botao]');

//informa ao navegador que caso seja clicado no botão executura uma função anonima
botao.addEventListener('click', (evento) =>{

    // faz com que o botão de submit não atualize a pagina
    evento.preventDefault();

    // pega o que está escrito no input de texto
    const inputTexto = document.querySelector('[data-texto]');

    // esta linha selecionamos a UL do html
    const listaTarefas = document.querySelector('[data-lista]');
    //const itemTarefa = document.querySelector('[data-item]')

    // criando um elemento LI
    const itemLista = document.createElement('li');
    // adicionando classe tarefas no nosso elemento LI
    itemLista.classList.add('tarefas');

    // adicionando um P e --- um BUTTON dentro da classe LI.
    // infelizmente como nosso buton vai precisar de um eventlistener será necessario
    // criar uma function que cria esse botao e logo depois adiciona o eventlistener
    const alteracao = `<p>${inputTexto.value}</p>`;

    // Reescrevendo a LI que criamos pela que escrevemos
    itemLista.innerHTML = alteracao;

    // adicionando o botão dentro da LI que criamos
    itemLista.appendChild(botaoConcluir());

    //adicionando o elemento LI que criamos dentro da UL.
    listaTarefas.appendChild(itemLista);

    inputTexto.value = ' '
})

    // Function para criar o botão
    const botaoConcluir = () => {
        const botaoConcluir = document.createElement('button');

        botaoConcluir.classList.add('botao-concluir');
        botaoConcluir.innerHTML = 'concluir';

        botaoConcluir.addEventListener('click', concluirTarefa);

        return botaoConcluir;
    }

    const concluirTarefa = (evento) => {
        evento.preventDefault();

        const botaoConcluir = evento.target;
        const tarefaCompleta = botaoConcluir.parentElement;

        tarefaCompleta.classList.toggle('done');
    }
})()