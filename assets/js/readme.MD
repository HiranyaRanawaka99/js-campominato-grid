## Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


### Svolgimento

1. definire in HTML un pulsante, a cui assegnamo un ID
2. all'evento click associamo un docide che genera la griglia

##### Generazione griglia quadrata
1. Creare un container con dimensioni fisse 
2. contiamo da 1 a 100 e per ogni ciclo:
    - creiamo un cella con dimensioni fisse
        - la larghezza le valutiamo con il calc 100% / 10
        - l'altezza con aspect ratio: 1; 
    - associamo l'indice alla singola cella
##### AddEventListener
3. Associamo all'evento click sulla cella 
    - usiamo una classe per cambiare il colore alla cella
    - usiamo console.log

##### Bonus
1. Creare select e portare i valori nel 