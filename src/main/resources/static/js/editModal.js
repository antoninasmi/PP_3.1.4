const editModal = document.getElementById('editModal');
editModal.addEventListener('show.bs.modal', event => {

    const editButton = event.relatedTarget

    const editUserId = editButton.getAttribute('data-bs-userId')
    const editUserName = editButton.getAttribute('data-bs-userName')
    const editUserSurname = editButton.getAttribute('data-bs-userSurname')
    const editUserAge  = editButton.getAttribute('data-bs-userAge')
    const editUserEmail = editButton.getAttribute('data-bs-userEmail')
    const editUserPassword = editButton.getAttribute('data-bs-userPassword')

    const userIdEditModal = editModal.querySelector('#eId')
    const userNameEditModal = editModal.querySelector('#eName')
    const userSurnameEditModal = editModal.querySelector('#eSurname')
    const userAgeEditModal = editModal.querySelector('#eAge')
    const userEmailEditModal = editModal.querySelector('#eEmail')
    const userPasswordEditModal = editModal.querySelector('#ePassword')

    userIdEditModal.value = editUserId
    userNameEditModal.value = editUserName
    userSurnameEditModal.value = editUserSurname
    userAgeEditModal.value = editUserAge
    userEmailEditModal.value = editUserEmail
    userPasswordEditModal.value = editUserPassword
})