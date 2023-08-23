//ON LOAD 

const btnStart = document.getElementById('btn-start');
const cellsContainer = document.getElementById('cells-container');
const difficultySelect = document.getElementById('difficulty');

// Genero la griglia
btnStart.addEventListener('click', function () {
    generateGriglia();
})


//FUNZIONI

// Funzione che genera la griglia

function generateGriglia () {
    cellsContainer.innerHTML = '';

    let cellsTotal = parseInt(difficultySelect.value);

     for (let i = 1; i <= cellsTotal ; i++) { //i è il numero delle celle
     const generatedcell= generateCell(i, cellsTotal); 
     cellsContainer.append(generatedcell);
     }
}


// Funzione che genera una cella
function generateCell (cellText, cellsTotal) {
        const cell = document.createElement('li');
        cell.innerHTML = cellText;
        cell.classList.add('cell')
        cell.classList.add('cell-' + cellsTotal);

        // cell click
        cell.addEventListener('click', function () {
            this.classList.add('azure');
            console.log(this.innerText);
        });

        return cell;
}
