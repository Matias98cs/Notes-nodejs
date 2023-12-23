# Node JS

App de Notas de texto

### Descripción

Implementar una API que permita publicar notas privadas de texto y categorizarlas.

### Anónimo:

- Login: usando email + password
- Registro: pide email + password

### Usuarios registrados

- Ver su listado de notas (en el listado solo se ven los titulos)
- Visualizar una nota
- Crear una nota: titulo, texto y categoría unica
- Modificar sus notas: titulo, texto y categoría
- Opcional:
    - Marcar una nota como publico
        - Por defecto todas las notas son privadas y solo se puede verlas el usuario que las creo, pero si es una nota que se marca como publica esta se puede ver por cualquier usuario este registrado y logueado en la aplicación o no. Las notas publicas solo se puede acceder si se conoce el URL
    - Eliminar nota
    - Crear, editar y borrar categoría
    - Imagen: poder asociar una imagen (unica) a cada nota