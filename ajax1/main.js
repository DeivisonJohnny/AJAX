window.onload = function() {
    var btn = document.querySelector('#btn')
    btn.addEventListener('click', btn_click)
}


function btn_click() {
    // ajax
    // Criar objeto Request
    let pedido = new XMLHttpRequest()

    // definir a função que vai atuar quando tivermos a resposta do servidor
    pedido.onreadystatechange = function() {
        console.log(pedido.readyState, "Mudanca de estado, estado atual")
        console.log(pedido.status, "Estado")
        if (pedido.readyState == 4 && pedido.status == 200) {
            document.querySelector('#res').innerHTML = this.responseText
        } else {
            document.querySelector('#res').innerHTML = 'Volte mais tarde'
        }
        
    }
    // preparar pedido
    pedido.open("GET", "serviador.txt", true)

    //enviar pedido
    pedido.send()
}

