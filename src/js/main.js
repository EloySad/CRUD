// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import database
import { coders } from '../../public/data/database.js'

import { create, deleteItem, index } from './operations'
import { showSmallAlertSuccess } from './alerts'


const tbody = document.querySelector("tbody")
const table = document.querySelector("table")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.getElementById("form")
let idToEdit

index(coders, tbody)

form.addEventListener("submit", function (event) {

    if (idToEdit === undefined) {
        create(coders, name, lastName, email)
        showSmallAlertSuccess("saved")
    }
    else {
        for (const coder of coders) {
            if (coder.id == idToEdit) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }
        showSmallAlertSuccess("User Update")
    }

    form.reset()
    index(coders, tbody)
    event.preventDefault()

})

table.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-danger")) {
        const idToDelete = event.target.getAttribute("data-id")
        deleteItem(coders, idToDelete)
        showSmallAlertSuccess("User Delete")
        index(coders, tbody)
    }

    if (event.target.classList.contains("btn-primary")) {
        idToEdit = event.target.getAttribute("data-id")
        showSmallAlertSuccess("You Can Edit User")

        //Se busca al usuario en la base de datos
        const userFound = coders.find(coder => coder.id == idToEdit)

        //retornar los datos al formulario
        name.value = userFound.name
        lastName.value = userFound.lastName
        email.value = userFound.email
    }

})
