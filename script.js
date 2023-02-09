import botaoDeleta from "./componentes/botaoDeletaTarefa.js";
import botaoConcluir from "./componentes/botaoConcluiTarefa.js"

// IIFE (Immediately Invoked Function Expression)
(function () {
    let listaTarefas = [];

    // function responsável por visualizar/capturar os inputs do usuário
    const novaTarefa = (evento) => {

        // faz com que o botão de submit não atualize a pagina
        evento.preventDefault();

        // esta linha selecionamos a UL do html
        const listaTarefas = document.querySelector('[data-lista]');
        //const itemTarefa = document.querySelector('[data-item]')

        // pega o que está escrito no input de texto
        const inputTexto = document.querySelector('[data-texto]');
        const valor = inputTexto.value;

        // selecionando o input de data do html
        const calendario = document.querySelector('[data-form-date]');
        // utiliza a API moment para formatar o elemante date
        const dataFormatada = moment(calendario.value).format('L')

        //criando um object 
        const dados = {
            valor,
            dataFormatada
        }

        const tarefa = criarTarefa(dados)

        //adicionando o elemento LI que criamos dentro da UL.
        listaTarefas.appendChild(tarefa);

        sessionStorage.setItem('tarefas', dados )
        inputTexto.value = ' '


    }

    //function responsável por criar a tarefa
    const criarTarefa = ({ valor, dataFormatada }) => {

        // criando um elemento LI
        const itemLista = document.createElement('li');

        // adicionando classe tarefas no nosso elemento LI
        itemLista.classList.add('tarefas');

        // adicionando um P e dentro da LI.
        const alteracao = `<p>${valor} * ${dataFormatada}</p>`;

        // Reescrevendo a LI que criamos pela que escrevemos
        itemLista.innerHTML = alteracao;

        // adicionando o botão dentro da LI que criamos
        itemLista.appendChild(botaoConcluir());
        itemLista.appendChild(botaoDeleta());

        return itemLista;
    }

    //aponta para o botão do html
    const botao = document.querySelector('[data-botao]');
    botao.addEventListener('click', novaTarefa);
})();

    