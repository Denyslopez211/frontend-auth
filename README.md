# AuthFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Prueba BCI
*Por Omar Alfredo Cantuarias Saleh*

## DescripciÃ³n

Esta es una API RESTFul simple que permite agregar usuarios a una base de datos en memoria H2.

La aplicaciÃ³n recibe un objeto JSON y realiza una serie de validaciones para permitir la creacion de usuarios: 
1. Verificar que el nombre sea valido (*Primera letra Mayuscula, sin caracteres especiales ni numeros y no mas de 30 de largo*)
2. Verificar que el correo sea un correo electronico valido
3. Verificar que el correo no exista en la base de datos

- Si no se logra validar el usuario se responde un mensaje de error como por ejemplo:
```json
{
    "mensaje": "Error al crear usuario...",
    "code": 500
}
```

Una vez cumplidos estos requisitos, se crea un token JWT simple para el usuario y se ingresan sus datos a la base de datos
con una id (*UUID*) auto-generada. Luego de esto la API responde con un objeto JSON de respuesta conteniendo algunos de los datos del usuario
confirmando la creacion exitosa de un nuevo usuario.

```json
{
    "mensaje": "Exito",
    "code": 200,
    "usuario": {
        "id": "UUID id",
        "created": "2023-03-14T00:00:00.000+00:00",
        "modified": "2023-03-14T00:00:00.000+00:00",
        "token": "JWT TOKEN...",
        "active": true,
        "last_login": "2023-03-14T00:00:00.000+00:00"
    }
}
```

## Dependencias y requerimientos

- Este projecto requiere Java 11, Spring Boot, Lombok y Maven para ser ejecutado.
- Para hacer una solicitud a las API se recomienda utilizar Postman (*Una coleccion .json esta incluida en la raiz del proyecto que incluye la request pre-construida*)
- La solicitud de la API recibe un objeto de text JSON con la siguiente estructura:

```json
{
  "name": "Usuario",
  "email": "persona@email.com",
  "password": "password",
  "phones": [
    {
      "number": "124567",
      "citycode": "1",
      "contrycode": "57"
    }
  ]
}
```

## Modo de uso

### Levantar la API
- Para levantar la API se debe ejecutar el siguiente comando desde la raiz del proyecto.

    ```java -jar resources/demojar/demo-1.0.0-SNAPSHOT.jar```


- Igualmente puede ejecutarse con Maven con el siguiente comando.

    ```./mvnw spring-boot:run```  


- Para crear un nuevo .jar puede construirse utilizando Maven con el siguiente comando y se ubicarÃ¡ en target.

    ```./mvnw clean package```

### Base de Datos
- Al ejecutarse el proyecto se generarÃ¡ un archivo en la carpeta /data (*./data/testDB.mv.db*) este archivo persistÃ© la BD cuando no esta activa la API.
- Las Id de cada Usuario se genera automÃ¡ticamente como UUID y los passwords son encriptadas a md5.
- Las credenciales de conexion se encuentran en *application.properties*, solo es posible conectarse por url si la aplicacion no esta corriendo.

### Realizar una solicitud para aÃ±adir un usuario usando Postman
 **Para esta explicacion se asume que se esta utilizando una herramienta como Postman para realizar la solicitud POST al API**
1. Importar la coleccion de postman *BciTest.postman_collection.json*.
2. En la pestaÃ±a *"Body"* seleccionar *"raw"*, ahi se mostrarÃ¡ el objeto JSON de entrada, modifique los datos del usuario que desee ingresar a la bd.
3. Hacer click sobre *"Send"*, de tener exito se responde con el objeto JSON de exito y codigo http 200.

## Modelo
Modelo de proceso del API

![Model](src/main/resources/model/BciTest Model.png)