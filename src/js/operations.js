export function index(coders, tbody) {

  tbody.innerHTML = ``

  coders.forEach(coder => {
    tbody.innerHTML += `
    <tr>
        <th scope="row">${coder.id}</th>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td>${coder.email}</td>
        <td>
        <button type="button" data-id="${coder.id}" class="btn btn-warning">Details</button>
        <button type="button" data-id="${coder.id}" class="btn btn-primary">Edit</button>
        <button type="button" data-id="${coder.id}" class="btn btn-danger">Delete</button>
        </td>
        
  </tr>`
  });
}

export function create(coders, name, lastName, email) {
  const tempCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value
  }

  coders.push(tempCoder)
}

export function deleteItem(coders, idToDelete) {
  coders.forEach((coder, index) => {

    if (coder.id == idToDelete) {
      coders.splice(index, 1)
    }
  })
}
