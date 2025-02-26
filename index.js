function btnClick(n){
    let getInput = document.getElementById('inp')
    getInput.value += n
}

function equalsTo(){
    let getInput = document.getElementById('inp')
    try {
        getInput.value = eval(getInput.value)
    } catch (error) {
        getInput.value = "Syntax Error"
    }

}

function allClear() {
    let getInput = document.getElementById('inp')
    getInput.value = ''
}

function Clear(){
    let getInput = document.getElementById('inp')
    getInput.value = getInput.value.slice(0, -1)
}

