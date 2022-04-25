window.onload = function(){
  lista();
}


function lista(){
  const main = document.querySelector('#main');
  let list = document.createElement('ol');
  list.id = 'lista-tarefas';
  main.appendChild(list);
  let add = document.querySelector('#criar-tarefa');
  let texto = document.querySelector('#texto-tarefa');
  add.addEventListener('click', function(){
    let element = document.createElement('li');
    element.className = 'task-items';
    list.appendChild(element);
    element.innerHTML = texto.value;
    texto.innerHTML = '';
    element.addEventListener('click', function(){
      element.style.backgroundColor = 'grey';
      //element.className = 'tasks-items selected';
    })
  })
  const limpar = document.createElement('button');
  limpar.innerHTML = 'Clear';
  limpar.id = 'apaga-tudo';
  main.appendChild(limpar);
  limpar.addEventListener('click', function(){
    let elementos = document.getElementsByClassName('task-items');
    while (elementos.length > 0) {
      elementos[0].parentNode.removeChild(elementos[0]);
    }
  })
}



