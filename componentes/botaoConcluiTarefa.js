/* 
   Function para criar o botão tarefa
   Aparentemente quando queremos criar um botão com eventlistener
   é nessário criar uma function que crie ele
*/
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


export default botaoConcluir;

