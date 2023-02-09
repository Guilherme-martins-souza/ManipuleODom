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

export default botaoDeleta;