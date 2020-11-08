const initialStateStudents = [
    { id: 0, first_name: 'Alejandro', surname: 'Sobko', dni: 44647702 },
    { id: 1, first_name: 'Laura', surname: 'Perez', dni: 35302288 },
    { id: 2, first_name: 'Candela', surname: 'Gomez', dni: 57490871 },
    { id: 3, first_name: 'Emiliano', surname: 'Gonzalez', dni: 66005465 },
    { id: 4, first_name: 'Camila', surname: 'Rodriguez', dni: 65212571 },
    { id: 5, first_name: 'Sebastian', surname: 'Hernandez', dni: 54101823 },
    { id: 6, first_name: 'Ezequiel', surname: 'Blabla', dni: 57238635 },
    { id: 7, first_name: 'Melina', surname: 'Foo', dni: 34251397 },
    { id: 8, first_name: 'Gustavo', surname: 'Bar', dni: 64530537 },
    { id: 9, first_name: 'José', surname: 'Baz', dni: 40073217 }
]

const students = (state = initialStateStudents, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return [...state, action.student]
        default:
            return state
    }
}

export default students;