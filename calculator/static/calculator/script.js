function toggleDropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    const expression = document.getElementById('display').value;
    fetch('/calculate/', {
        method: 'POST',
        body: JSON.stringify({
            expression: expression
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.result !== undefined) {
            document.getElementById('display').value = data.result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    });
}
