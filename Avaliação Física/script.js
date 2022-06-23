var idade = document.getElementById("idade")
var fsex =  document.getElementsByName("radsex")
var imc = document.getElementById("imc")
var resimc = document.getElementById("resimc")
var gord = document.getElementById("gord")
var resgord = document.getElementById("resgord")
var musc = document.getElementById("musc")
var resmusc = document.getElementById("resmusc")
var gordv = document.getElementById("gordv")
var resgordv = document.getElementById("gordv")

function calcular() {
    if (imc.value <= 18.5) {
        resimc.innerHTML = 'Abaixo do Peso'
    } else if (imc.value <= 24.9) {
        resimc.innerHTML = 'Peso Ideal'
    } else if (imc.value <= 29.9) {
        resimc.innerHTML = 'Levemente Acima do Peso'
    } else if (imc.value <= 34.9) {
        resimc.innerHTML = 'Obesidade grau I'
    } else if (imc.value <= 39.9) {
        resimc.innerHTML = 'Obesidade grau II'
    } else {
        resimc.innerHTML = 'Obesidade grau III'
    }

    if (fsex[0].checked || idade.value >= 20 || idade.value <= 29) {
        if (gord.value < 8) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 20) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 25) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 40 || idade.value <= 59) {
        if (gord.value < 11) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 22) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 28) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 60 || idade.value <= 79) {
        if (gord.value < 13) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 25) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 30) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[1].checked || idade.value >= 20 || idade.value <= 29) {
        if (gord.value < 21) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 33) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 39) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[1].checked || idade.value >= 40 || idade.value <= 59) {
        if (gord.value < 23) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 34) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 40) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[1].checked || idade.value >= 60 || idade.value <= 79) {
        if (gord.value < 24) {
            resgord.innerHTML = 'Baixo'
        } else if (gord.value < 36) {
            resgord.innerHTML = 'Normal'
        } else if (gord.value < 42) {
            resgord.innerHTML = 'Alto'
        } else {
            resgord.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 20 || idade.value <= 29) {
        if (musc.value < 33.3) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 39.4) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 44.1) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 40 || idade.value <= 59) {
        if (musc.value < 33.1) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 39.2) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 43.9) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 60 || idade.value <= 80) {
        if (musc.value < 32.9) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 39) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 43.7) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[1].checked || idade.value >= 20 || idade.value <= 29) {
        if (musc.value < 24.3) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 30.4) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 35.4) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 40 || idade.value <= 59) {
        if (musc.value < 24.1) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 30.2) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 35.2) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (fsex[0].checked || idade.value >= 60 || idade.value <= 80) {
        if (musc.value < 23.9) {
            resmusc.innerHTML = 'Baixo'
        } else if (musc.value < 30) {
            resmusc.innerHTML = 'Normal'
        } else if (musc.value < 35) {
            resmusc.innerHTML = 'Alto' 
        } else {
            resmusc.innerHTML = 'Muito Alto'
        }
    }

    if (gordv.value <= 9) {
        resgordv.innerHTML = 'Normal'
    } else if (gordv.value <=14) {
        resgordv.innerHTML = 'Alto'
    } else {
        resgordv.innerHTML = 'Muito Alto'
    }




}    