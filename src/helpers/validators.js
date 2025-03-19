function validateUser(req, res) {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios: firstName, lastName, email' });
    }

    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') {
        return res.status(400).json({ message: 'Los campos firstName, lastName y email deben ser cadenas de texto' });
    }

    if (firstName.length < 2 || firstName.length > 50) {
        return res.status(400).json({ message: 'El campo firstName debe tener entre 2 y 50 caracteres' });
    }

    if (lastName.length < 2 || lastName.length > 50) {
        return res.status(400).json({ message: 'El campo lastName debe tener entre 2 y 50 caracteres' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'El campo email no tiene un formato válido' });
    }

    return true;
}d


function validateTask(req, res) {
    const { title, completed } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'El campo "title" es obligatorio' });
    }

    if (typeof title !== 'string') {
        return res.status(400).json({ message: 'El campo "title" debe ser una cadena de texto' });
    }

    if (title.length < 3 || title.length > 100) {
        return res.status(400).json({ message: 'El campo "title" debe tener entre 3 y 100 caracteres' });
    }

    if (completed !== 0 && completed !== 1) {
        return res.status(400).json({ message: 'El campo "completed" debe ser 0 (incompleto) o 1 (completo)' });
    }

    return true;
}

module.exports = { validateUser, validateTask };