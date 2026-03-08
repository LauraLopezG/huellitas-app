Guía paso a paso para ejecutar el proyecto Huellitas App


1. Programas necesarios

Antes de ejecutar el proyecto se deben tener instaladas las siguientes herramientas:

1.1 Editor de código

Visual Studio Code

Versión recomendada: 1.85 o superior

Extensiones recomendadas:

Angular Language Service

Prettier

ESLint

1.2 Node.js

Node.js

Versión recomendada: 18.x o 20.x LTS

Verificar instalación:

node -v
npm -v
1.3 Angular CLI

Angular CLI

Versión recomendada: 17 o superior

Instalar:

npm install -g @angular/cli

Verificar:

ng version
1.4 Servidor de base de datos (opcional dependiendo del proyecto)

Si se usa base de datos con PHP:

XAMPP

Versión recomendada: 8.2

Servicios a iniciar:

Apache

MySQL

2. Abrir el proyecto

Abrir Visual Studio Code

Ir a:

File → Open Folder

Seleccionar la carpeta:

huellitas-app
3. Verificar estructura del proyecto

En la carpeta raíz deben existir archivos como:

huellitas-app
 ├─ src
 ├─ public
 ├─ angular.json
 ├─ package.json   ← MUY IMPORTANTE
 ├─ tsconfig.json
 └─ package-lock.json

⚠️ En tu captura no aparece package.json, por eso npm genera el error.

4. Crear el archivo package.json (si no existe)

En la terminal ejecutar:

npm init -y

Esto generará automáticamente el archivo.

5. Instalar dependencias del proyecto

En la terminal ejecutar:

npm install

Esto instalará:

Angular

TypeScript

RxJS

Dependencias necesarias del proyecto

6. Ejecutar el servidor de desarrollo

Ejecutar:

ng serve

El sistema compilará la aplicación.

Salida esperada:

✔ Compiled successfully.
7. Abrir la aplicación en el navegador

Ir a:

http://localhost:4200

Aquí se visualizará la aplicación Huellitas App.

8. Ejecutar API o base de datos (si el proyecto la usa)

Si se usa API con PHP o base de datos:

Abrir XAMPP

Iniciar:

Apache

MySQL

Importar la base de datos en:

http://localhost/phpmyadmin
9. Problemas comunes
Error: ENOENT package.json

Solución:

npm init -y
npm install
Error Angular *ngFor NG8103

Importar CommonModule:

imports: [CommonModule]
Error ngModel

Agregar:

import { FormsModule } from '@angular/forms';
10. Comando completo de ejecución

Secuencia final:

npm install
ng serve
