window.addEventListener('DOMContentLoaded', function (event) {

    function createModal() {
        //access current instance of main content container
        mainContent = document.getElementById('main-content');
        //create modal element
        modal = document.createElement('DIV');
        modal.setAttribute('id', 'modal')
        //create modal content element
        modalContent = document.createElement('DIV');
        modalContent.setAttribute('id', 'modalContent')
        //create modal title element
        modalTitle = document.createElement('H2');
        modalTitle.textContent = 'Client Side JavaScript working!';
        //create modal close button
        closeModalButton = document.createElement('BUTTON');
        closeModalButton.setAttribute('id', 'closeModalButton');
        closeModalButton.textContent = 'OK';
        //create modal close button
        openModalButton = document.createElement('BUTTON');
        openModalButton.setAttribute('id', 'openModalButton');
        openModalButton.textContent = 'Test Javascript';
        //layer and add elements to page
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(closeModalButton);
        mainContent.appendChild(modalContent);
        mainContent.appendChild(modal);
        mainContent.appendChild(openModalButton);
        //hide modal elements
        document.getElementById('modal').style.display = 'none';
        document.getElementById('modalContent').style.display = 'none'

    }

    // this function toggles the modal's display property
    function toggleModal(e) {
        e.preventDefault();
        modalElem = document.getElementById('modal');
        modalContent = document.getElementById('modalContent');
        openModalButton = document.getElementById('openModalButton');

        if (modalElem.style.display === 'none') {
            modalElem.style.display = 'block';
            modalContent.style.display = 'block'
            openModalButton.style.display = 'none'

        } else {
            modalElem.style.display = 'none';
            modalContent.style.display = 'none'
            openModalButton.style.display = 'block'
        }
    }

    //create modal and add to page
    createModal()

    //add functionality to modal
    document.getElementById('closeModalButton').onclick = toggleModal
    document.getElementById('openModalButton').onclick = toggleModal

});