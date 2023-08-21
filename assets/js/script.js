//ON LOAD 

const btnStart = document.getElementById('btn-start');
const cellsContainer = document.getElementById('cells-container');

const select = document.getElementById('select');
const easy =  document.getElementById('easy').value;
const noraml = document.getElementById('noraml').value;
const expert = document.getElementById('expert').value;

// Genero la griglia
btnStart.addEventListener('click', function () {
    generateGriglia();
})


//FUNZIONI

// Funzione che genera la griglia

function generateGriglia () {
     for (let i= 1; i <= 100; i++) {

     const cell= generateCella(i);
     cellsContainer.append(cell);
     }
}

    
function generateCella (i) {
        const cell = document.createElement('li');
        cell.classList.add('cell')
        cell.innerHTML = i;

        cell.addEventListener('click', function () {
            this.classList.add('azure');
            console.log(i);
        })

        return cell;
    }
