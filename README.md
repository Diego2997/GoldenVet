# Proyecto Final: GoldenVet - Back-end (Servidor)

Este proyecto final ha sido desarrollado como parte del programa de la Escuela de Programación [Rolling Code](https://rollingcodeschool.com/). Golden Vet es una aplicación web construida utilizando Node.js y Express para el desarrollo del back-end, diseñada para la administración de una veterinaria. El servidor proporciona servicios de API para la gestión de usuarios, pacientes, productos, servicios, turnos y comentarios relacionados con la veterinaria.

## Características

* Autenticación: Los usuarios pueden registrarse e iniciar sesión en la plataforma utilizando JSON Web Tokens (JWT).

* Gestión de Usuarios: Los administradores pueden gestionar usuarios, sus datos y roles. Los usuarios pueden agregar mascotas a sus perfiles después de iniciar sesión.

* Gestión de Pacientes: Los usuarios pueden registrar y ver la información de sus mascotas, incluyendo detalles médicos y fechas importantes.

* Gestión de Productos y Servicios: La plataforma permite la administración de productos y servicios ofrecidos por la veterinaria.

* Gestión de Turnos: Los usuarios pueden solicitar turnos en línea, seleccionando la fecha y hora preferida para la cita.

* Comentarios : Los clientes pueden dejar comentarios sobre la atención y servicios brindados por la veterinaria.

## Dependencias Utilizadas

A continuación se enumeran las principales dependencias utilizadas en el back-end:

* Babel CLI: Permite utilizar las últimas características de JavaScript en el entorno de desarrollo.
* Babel Preset Env: Configura Babel para convertir el código a JavaScript compatible con versiones de Node.js.
* Bcrypt: Utilizado para el cifrado seguro de contraseñas de usuarios.
* CORS: Middleware que habilita la política de mismo origen cruzado para permitir peticiones desde el front-end.
* Dotenv: Carga variables de entorno desde un archivo `.env` para la configuración de la aplicación.
* Express: Framework para crear aplicaciones web y servicios API en Node.js.
* Express Validator: Proporciona funciones de validación para los datos enviados por los clientes.
* JSON Web Token (jsonwebtoken): Utilizado para generar y verificar tokens de autenticación JWT.
* Mongoose: ODM (Object-Document Mapper) para interactuar con MongoDB de manera sencilla.
* Morgan: Middleware para el registro de solicitudes HTTP en la consola.

## Instalación y uso

Para utilizar el servidor, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/Diego2997/GoldenVet.git`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` en el directorio raíz del servidor y configura las variables de entorno necesarias.
4. Inicia el servidor: `npm start`
5. El servidor estará en funcionamiento en el puerto especificado en el archivo `.env`.

## Equipo de desarrollo

* Carabajal Facundo
* Mercado Diego
* Monachesi Ezequiel
* Rodriguez Nahuel
* Ruiz Silvio
