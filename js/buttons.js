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

    link.setAttribute('href', 'https://nowaysp.pay.yampi.com.br/r/9EO0MRQXUA');

    return false;
  }
  function changeLinkHrefG() {
    const link = document.getElementById('link');

    link.setAttribute('href', 'https://nowaysp.pay.yampi.com.br/r/9A1JEOUUA0');

    return false;
  }
  function changeLinkHrefGG() {
    const link = document.getElementById('link');

    link.setAttribute('href', 'https://nowaysp.pay.yampi.com.br/r/AL7AASAA8Y');

    return false;
  }


