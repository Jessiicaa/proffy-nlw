// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botaõ
.addEventListener("click", cloneField)
// Executar uma ação de
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
