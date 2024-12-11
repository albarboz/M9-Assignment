export async function fetchEmployees() {

    try {
        const response = await fetch('../data/employees.json')
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const employees = await response.json()
        return employees
    } catch (error) {
        console.error('Failed to fetch employee data:', error);
    }
}