const btnSubmit = document.getElementById('btn-submit');
const btnSelection = document.querySelectorAll('.btn-selection');
const sectionRating = document.getElementById('rating')
const sectionSelected = document.getElementById('selected')
const selectedText = document.getElementById('selected__text')
let election = ''


function numberSelection() {
    btnSelection.forEach(btn => {
        btn.addEventListener('click', function() {
            const valueBtnSelection = btn.value;
            election = valueBtnSelection;
            btnSelection.forEach(b => b.classList.remove('btn-selected'));
            btn.classList.add('btn-selected');
           
            console.log('Número seleccionado:', election); // Verificar el valor de election
        });
    });
}

numberSelection();

function submitElection() {
    btnSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Elección enviada:', election);
        sectionRating.setAttribute('style', 'display:none')
        sectionSelected.setAttribute('style', 'display:flex')
        selectedText.innerHTML =`You selected ${election} out of 5`
    });
}

submitElection();

