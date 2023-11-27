const buttons1 = Array.from(document.getElementsByClassName('button1'))

buttons1.forEach(button => {
    button.addEventListener('click', (event) => {

        buttons1.forEach(button => {
            button.setAttribute('class', 'button1')
        })

        event.target.setAttribute('class', 'button1clicked')
    })
});

