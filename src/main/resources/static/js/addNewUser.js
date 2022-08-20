const addNewUser = document.getElementById('addNewUser');
addNewUser.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(addNewUser);
    const object = {
        roles: []
    };

    formData.forEach((value, key) => {
        if (key === "rolesId") {
            const roleId = value.split(" ")[0];
            const roleName = value.split(" ")[1];
            const role = {
                id : roleId,
                name : roleName
            };
            object.roles.push(role);
        } else {
            object[key] = value;
        }
    });

    fetch("/api/admin", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(user = {
            name: this.nName.value,
            surname: this.nSurname.value,
            age: this.nAge.value,
            username: this.nEmail.value,
            password: this.nPassword.value,
            roles: object.roles
        })
    })
        .then(() => getAllUsers())
        .then(() => addNewUser.reset());

    return show('page1', 'page2');
})