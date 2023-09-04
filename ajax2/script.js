function ajaxfn(url, funcao) {
    let pedido = new XMLHttpRequest();

    console.log(url, funcao)
    console.log(url, funcao+'(pedido)')
    
    //resposta 

    pedido.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            if (funcao == 'cmd1') {
                cmd1(pedido)
            } else {
                if (funcao == 'cmd2') {
                    cmd2(pedido)
                } else {
                    alert('função não foi criada')
                }
            }
        }

    }

    //enviar o pedido

    pedido.open('GET', url, true)
    pedido.send()
    
}

function cmd1(p) {
    document.querySelector('#caixa1').innerHTML += p.responseText
}
function cmd2(p) {
    document.querySelector('#caixa2').innerHTML += p.responseText
}