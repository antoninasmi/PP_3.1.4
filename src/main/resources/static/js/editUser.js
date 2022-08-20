const editForm = document.getElementById("editForm");
editForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(editForm);
    const object = {
        roles: []
    };

    formData.forEach((value, key) => {
        console.log(value)
        if (key === "rolesId") {
            const roleId = value.split(" ")[0];
            const roleName = value.split(" ")[1];
            const role = {
                id: roleId,
                name: roleName
            };
            object.roles.push(role);
        } else {
            object[key] = value;
        }
    });
    fetch("/api/admin", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(object)
    })
        .then(() => getAllUsers());
    $('#editModal').modal("hide");
    editForm.reset();
})