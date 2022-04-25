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
    texto.value = '';
    element.addEventListener('click', function(){
      element.style.backgroundColor = 'rgb(128, 128, 128)';
     
    })
    element.addEventListener('dblclick', function(){
      element.className = 'task-items completed';
      element.style.textDecoration = `line-through solid rgb(0, 0, 0)`;
      element.addEventListener('dblclick', function(){
        element.className = 'task-items';
        element.style.textDecoration = 'none';
      })
    })

  })
  const limpar = document.createElement('button');
  limpar.innerHTML = 'Clear';
  limpar.id = 'apaga-tudo';
  main.appendChild(limpar);
  limpar.addEventListener('click', function(){
    let elementos = document.getElementsByClassName('task-items');
    let elementosCompletos = document.getElementsByClassName('task-items completed');
    while (elementos.length > 0) {
      elementos[0].parentNode.removeChild(elementos[0]);
    }
    while (elementosCompletos.length > 0){
      elementosCompletos[0].parentNode.removeChild(elementosCompletos[0]);
    }
  })
}



