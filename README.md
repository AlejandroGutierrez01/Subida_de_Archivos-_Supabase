# Aplicación basica para subida de archivos a Supabase - Deber de consulta

### Implementar una aplicación básica en ionic que me permita subir un archivo a Supabase.

--- 

## Herramientas usadas

- Ionic Framework
- Supabase
- Typescript

---

## Desarrollo

### 1. Configurar Supabase

Seleccionar la opcion **Storage** dentro del dashboard del proyecto de Supabase

![Storage](https://github.com/user-attachments/assets/c1f6d7c0-fdfe-47f5-9850-4d10302c86ad)

Dentro de esta, crear un Bucket. Seleccionar **New Bucket** y configurar la creacion del bucket

![BucketConfig](https://github.com/user-attachments/assets/5ff37e4f-4863-4e4a-84ff-09e829d860df)

Luego, seleccionar el bucket, ir a la opcion **Connect** ubicada en la parte superior y seleccionar **Movile Frameworks** -> **Ionic Angular**. Finalmente copiar las credenciales para tu proyecto 

![image](https://github.com/user-attachments/assets/4addef6e-1a5d-442f-bd66-884606c0a09c)
  
### 2. Crear un proyecto con Ionic `ionic serve DocumentsSupabase --type=angular blank`

Una vez creado el proyecto con Ionic, instala las librerias para conectar Supabase con tu proyecto

Configura el archivo **`enviroments.ts`** con las credenciales copiadas anteriormente

![Variables](https://github.com/user-attachments/assets/dc969fab-d919-4bbc-8569-13a6c8487fe5)

Luego, genera un servicio con: 

```ts
ionic g service services/supabaseupload
```

![Service](https://github.com/user-attachments/assets/e093230f-6538-419e-a345-ef6ab9ab51a4)

### 3. Configurar el homepage y el servicio 

Configura el servicio: 
- Crea un cliente con una función propia de la libreria de Supabase
- Crea una función para subir archivos apuntando al bucket creado antes

Despues, en el archivo home.page.ts, importa el servicio y usalo para la subida de archivos

Finalmente, modifica el archivo home.page.html a tu gusto

---

## Vista de la app

App sin archivos subidos

![image](https://github.com/user-attachments/assets/27f79cbe-1550-429e-b972-a74700029f74)

Archivo Cargado

![image](https://github.com/user-attachments/assets/c1f2ff49-6b4e-4f6a-8d2c-c35b175b4bbf)

Notificacion de archivo subido

![image](https://github.com/user-attachments/assets/50237059-0e82-4549-9505-5128e6dfc44d)

Archivo almacenado en Supabase con éxito

![image](https://github.com/user-attachments/assets/a5db9b25-8f0b-4d05-9bfe-186bd4a96003)

