const deleteForm = document.getElementById('deleteForm');
deleteForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(deleteForm);
    fetch("/api/admin/" + formData.get("dId"), {
        method: "DELETE"
    })
        .then(() => getAllUsers());
    $("#deleteModal").modal("hide");
    deleteForm.reset();
})