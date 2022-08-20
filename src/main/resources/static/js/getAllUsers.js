async function getAllUsers() {

    const response = await fetch("/api/admin");

    if (response.ok) {
        let json = await response.json()
            .then(data => replaceTable(data));
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    function replaceTable(data) {

        const placement = document.getElementById("usersTablePlacement");
        placement.innerHTML = "";
        data.forEach(({id, name, surname, age, username, password, roles}) => {
            let userRoles = "";
            roles.forEach((role) => {
                userRoles = userRoles + role.name + " ";
            })
            const element = document.createElement("tr");
            element.innerHTML = `
            <th scope="row">${id}</th>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${age}</td>
            <td>${username}</td>
            <td>${userRoles}</td>
            <td>
                <button type="button" class="btn btn-info text-white" data-bs-userId=${id} 
                    data-bs-userName=${name} data-bs-userSurname=${surname} data-bs-userAge=${age} 
                    data-bs-userEmail=${username} data-bs-userPassword=${password} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
            </td>
            <td>
                <button type="button" class="btn btn-danger" data-bs-userId=${id}
                    data-bs-userName=${name} data-bs-userSurname=${surname} data-bs-userAge=${age}
                    data-bs-userEmail=${username} data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
            </td>
            `
            placement.append(element);
        })
    }
}