let users = [
    { id: 1, firstName: "Daniel", lastName: "Calvo", email: "dcalvo@polpocr.com" },
    { id: 2, firstName: "Katherine", lastName: "Calvo", email: "kcalvo@polpocr.com" }
];

let todos = [
    { id: 1, title: "Universidad", keywords: ["estudios", "importante", "academia"], userId: 1 },
    { id: 2, title: "Casa", keywords: ["oficio", "necesario", "orden"], userId: 1 }
];

let tasks = [
    { id: 1, title: "Estudiar para el examen de programación", completed: 0, todoId: 1, userId: 1 },
    { id: 2, title: "Ir a clases", completed: 1, todoId: 1, userId: 1 }
];

module.exports = {
    users,
    todos,
    tasks
};