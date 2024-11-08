function converter(){

    var valorfinal = document.getElementById("valorfinal")
    var select = document.getElementById("select")
    var real = parseFloat(document.getElementById("real").value)

    var valorSelecionado = select.value

    let dolar = real/5.64
    let euro = real/6.25
    let libra = real/7.41
    let kwanza = real/0.0062

    console.log(valorSelecionado)

    if(valorSelecionado == "Dolar"){
        valorfinal.innerHTML = `R$ ${real} reais equivalem a ${dolar.toFixed(2)} Dolar`
    }
    else if(valorSelecionado == "Euro"){
        valorfinal.innerHTML = `R$ ${real} reais equivalem a ${euro.toFixed(2)} Euro`
    }
    else if(valorSelecionado == "Libra"){
        valorfinal.innerHTML = `R$ ${real} reais equivalem a ${libra.toFixed(2)} Libra`
    }
    else if(valorSelecionado == "Kwanza"){
        valorfinal.innerHTML = `R$ ${real} reais equivalem a ${kwanza.toFixed(2)} Kwanza`
    }

}
