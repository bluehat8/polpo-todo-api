# Polpo Todo API

Este es un API RESTful sencillo para gestionar usuarios, listas de tareas pendientes (todos) y tareas (tasks). El objetivo de este proyecto es demostrar la implementación de un API básico siguiendo los principios REST.


## Requisitos
- **Node.js** : Asegúrate de tener instalada la versión 14 o superior.
- **npm** : Administrador de paquetes de Node.js.


## Instalacion

- Clonar repositorio
```
git glone https://github.com/bluehat8/polpo-todo-api 
cd polpo-todo-api

```

- Instala las dependencias

```
npm install
```


## Endpoints Disponibles
1. Usuarios (/users)
- **GET /users**: retorna un listado de todos los usuarios.
- **GET /users/:id**: obtiene un usuario específico por su ID
- **POST /users**: Crea un nuevo usuario

2. TODO (/todos)
- **GET /users/:id/todos** : obtiene todas las listas de tareas (todos) de un usuario
- **GET /todos/:id**: obtiene una lista de tareas específica junto con sus tareas asociadas.
- **POST /todos/:id/task**: crea una nueva tarea en una lista de tareas específica.



![Logo](https://firebasestorage.googleapis.com/v0/b/agustin-52df7.appspot.com/o/users.png?alt=media&token=6ccf0e58-a72f-44dc-ba3b-a2f4e4772a2f)
