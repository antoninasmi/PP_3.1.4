const deleteModal = document.getElementById('deleteModal');
deleteModal.addEventListener('show.bs.modal', event => {

    const deleteButton = event.relatedTarget

    const deleteUserId = deleteButton.getAttribute('data-bs-userId')
    const deleteUserName = deleteButton.getAttribute('data-bs-userName')
    const deleteUserSurname = deleteButton.getAttribute('data-bs-userSurname')
    const deleteUserAge = deleteButton.getAttribute('data-bs-userAge')
    const deleteUserEmail = deleteButton.getAttribute('data-bs-userEmail')

    const userIdDeleteModal = deleteModal.querySelector('#dId')
    const userNameDeleteModal = deleteModal.querySelector('#dName')
    const userSurnameDeleteModal = deleteModal.querySelector('#dSurname')
    const userAgeDeleteModal = deleteModal.querySelector('#dAge')
    const userEmailDeleteModal = deleteModal.querySelector('#dEmail')

    userIdDeleteModal.value = deleteUserId
    userNameDeleteModal.value = deleteUserName
    userSurnameDeleteModal.value = deleteUserSurname
    userAgeDeleteModal.value = deleteUserAge
    userEmailDeleteModal.value = deleteUserEmail
})