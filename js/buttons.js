const buttons1 = Array.from(document.getElementsByClassName('button1'))

buttons1.forEach(button => {
    button.addEventListener('click', (event) => {

        buttons1.forEach(button => {
            button.setAttribute('class', 'button1')
        })

        event.target.setAttribute('class', 'button1clicked')
    })
});


// SCRIPT DE MUDAR O LINK DO BOTAO
function changeLinkHrefM() {
    const link = document.getElementById('link');

    link.setAttribute('href', 'https://bobbyhadz.com');

    return false;
  }
  function changeLinkHrefG() {
    const link = document.getElementById('link');

    link.setAttribute('href', 'https://www.youtube.com/watch?v=0a99Pe1qZ_0');

    return false;
  }
  function changeLinkHrefGG() {
    const link = document.getElementById('link');

    link.setAttribute('href', 'https://moewalls.com/category/abstract/');

    return false;
  }


