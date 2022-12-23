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
    itemLista.appendChild(botaoDeleta());

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

    // Quando clicado no botão concluir essa function é chamada,
    // esta functin adiciona a classe "done" na tarafe
    const concluirTarefa = (evento) => {
        evento.preventDefault();

        const botaoConcluir = evento.target;
        const tarefaCompleta = botaoConcluir.parentElement;

        tarefaCompleta.classList.toggle('done');
    }

    //function que cria o botão deletar
    const botaoDeleta = () => {
        //cria a tag html do button atraves do createElement
        const botaoDeleta = document.createElement('button');

        //Adiciona o texto que desejarmos dentro da tag button no html
        botaoDeleta.innerText = 'deletar';

        //Escuta o button para sempre que for clicado realizar esta função
        botaoDeleta.addEventListener('click', deletarTarefa);
        return botaoDeleta
    }

    //Function que vai deletar a tarefa
    const deletarTarefa = (evento) => {
        evento.preventDefault();
        const botaoDeleta = evento.target;

        //parentElement seleciona o elemento pai do elemento que passarmos
        //neste caso seleciona a LI inteira.
        const tarefaCompleta = botaoDeleta.parentElement;

        tarefaCompleta.remove();

        // podemos utilizar este console.log para verificarmos qual elemento está sendo selecionado
        // console.log(tarefaCompleta);

        return botaoDeleta;
    }

})()