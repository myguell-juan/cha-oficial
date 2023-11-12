// Exemplo de uso com JavaScript no frontend
const novoItem = {
    nome: 'Novo Item',
    descricao: 'Descrição do Novo Item',
};

fetch('http://localhost:3000/api/itens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoItem),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", function() {
    const presentList = document.getElementById("present-list");
    const message = document.getElementById("message");

    presentList.addEventListener("click", function(e) {
        if (e.target && e.target.matches("li.present-item")) {
            e.target.style.textDecoration = "line-through";
            e.target.classList.add("selected");
        }
    });


    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function() {
        const selectedItems = document.querySelectorAll("li.selected");
        if (selectedItems.length === 0) {
            message.textContent = "Por favor, selecione um presente antes de registrar.";
        } else {
            message.textContent = "O presente foi registrado com sucesso!";
            selectedItems.forEach(item => {
                item.style.display = "none";
            });
        }
    });
});