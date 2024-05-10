// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import database
import { coders } from '../../public/data/database.js'

import { create, index } from './operations'
import { showSmallAlertSuccess } from './alerts'


const tbody = document.querySelector("tbody")
const table = document.querySelector("table")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.getElementById("form")

index(coders, tbody)

form.addEventListener("submit", function (event) {

    if (form.checkValidity()) {
        create(coders, name, lastName, email)
        showSmallAlertSuccess("saved")
    }

    form.reset()
    event.preventDefault()
    index(coders, tbody)

})

table.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-danger")) {

        const idToDelete = event.target.getAttribute("data-id")

        coders.forEach((coder, index) => {

            if (coder.id == idToDelete) {
                coders.splice(index, 1)
            }
        })
        index(coders, tbody)
        showSmallAlertSuccess("Usuario eliminado correctamente")
    } else {
        showSmallAlertSuccess("Cuidadito Wasawsky")
    }

})

// coders.forEach(coder => {
//     if (coder.id == 1 ) {
//         coders.splice(coders.indexOf(coder), 1)
//     }
// })