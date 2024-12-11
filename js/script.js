import { fetchEmployees } from "./modules/init.js"


// Get DOM elements
let empTable = document.querySelector('#employees')
let empCount = document.querySelector('#empCount')

// Fetch data asynchronously
document.addEventListener('DOMContentLoaded', async () => {
    const employees = await fetchEmployees()
    if (employees) {
        buildGrid(employees)
    }
})

// Delete employee
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            empTable.deleteRow(rowIndex)
        }
    }
})

// Build the employee grid 
function buildGrid(employees) {
    empTable.lastElementChild.remove()
    let tbody = document.createElement('tbody')
    for (let employee of employees) {
        tbody.innerHTML +=
            `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    empTable.appendChild(tbody)
    empCount.value = `(${employees.length})`
}