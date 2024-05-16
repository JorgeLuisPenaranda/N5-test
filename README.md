
# Documentación de Despliegue de Aplicación Web

Este documento describe los pasos para configurar y desplegar una aplicación web en AWS ECS utilizando GitHub Actions para CI/CD. El proceso de despliegue incluye el envío de la imagen del contenedor Docker a Amazon ECR y la actualización de un servicio ECS para reflejar los cambios automáticamente.

Requisitos previos
* AWS Account: Se necesita una cuenta de AWS para crear y administrar recursos como ECS, ECR, IAM, etc.
* GitHub Account: Se necesita una cuenta de GitHub para la gestión del código fuente y para utilizar GitHub Actions.
* Docker Instalado: Su entorno de desarrollo local debe tener Docker instalado para el manejo de la contenedorización.

Configuración de AWS
* ECR (Elastic Container Registry)
Crear un Repositorio:
Acceda al servicio ECR en la Consola de Administración de AWS.
Haga clic en "Crear repositorio".
Proporcione un nombre para el repositorio y seleccione la configuración de visibilidad.
Haga clic en "Crear repositorio".
ECS (Elastic Container Service)

* Crear un Clúster:
Vaya a la sección de ECS en la Consola de AWS.
Seleccione "Clusters" y haga clic en "Crear Cluster".
Elija la plantilla de clúster (por ejemplo, Fargate).
Siga las indicaciones para definir la configuración de red y otras configuraciones.
Cree el clúster.

* Crear Definición de Tarea:
En ECS, vaya a "Definiciones de Tarea" y haga clic en "Crear nueva definición de tarea".
Seleccione "Fargate" como tipo de inicio.
Configure las definiciones de tarea y contenedor, especificando la URL de la imagen Docker de ECR, CPU, memoria y variables de entorno.

* Crear un Servicio:
En su clúster, seleccione la pestaña "Servicios", luego "Crear".
Elija la definición de tarea y el tipo de servicio.
Configure el recuento deseado y otros parámetros del servicio.
Lance el servicio.

* IAM (Identity and Access Management)
Crear Usuario IAM:
Vaya a IAM en la Consola de AWS.
Vaya a "Usuarios" y haga clic en "Agregar usuario".
Ingrese un nombre de usuario y seleccione "Acceso programático".
Adjunte políticas directamente (AmazonEC2ContainerRegistryFullAccess, AmazonECS_FullAccess).
Cree el usuario y anote el AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY.

Configuración de GitHub
1. Configuración del Archivo .github/workflows
El archivo gh-actions.yml en la carpeta .github/workflows contiene la definición del flujo de trabajo de CI/CD. Este archivo especifica qué acciones se realizan en respuesta a eventos específicos en el repositorio de GitHub.

Este archivo se encarga de:
* Detectar cambios en los branches main, develop y testing.
* Ejecutar el flujo de trabajo en una instancia.
* Realizar los pasos necesarios para construir la imagen Docker, empujarla a ECR y actualizar el servicio ECS.

2. Configuración del Dockerfile
El Dockerfile especifica cómo construir la imagen del contenedor Docker para su aplicación. Este archivo define el entorno de ejecución y las dependencias necesarias para ejecutar la aplicación en un contenedor.

Este archivo:
* Utiliza la imagen base de Node.js.
* Establece la variable de entorno para el nombre del ambiente
* Establece el directorio de trabajo y copia los archivos de la aplicación.
* Instala las dependencias necesarias y define el comando para ejecutar la aplicación.

Proceso de Despliegue

* Pipeline de CI/CD
Con cada envío al repositorio, GitHub Actions activará el flujo de trabajo.
El flujo de trabajo construye la imagen Docker, la envía a ECR y actualiza el servicio ECS para desplegar los cambios.

* Monitoreo y Registro
Consola ECS: Monitoree los servicios, tareas y contenedores en ejecución.
CloudWatch: Utilice AWS CloudWatch para registros y métricas.

* Actualización de la Aplicación
Realice cambios en su aplicación usando las ramas de main, develop y testing y envíelos al repositorio de GitHub. GitHub Actions se encargará de la construcción y despliegue automáticamente usando los servicios de ECR y ECS en AWS Cloud.
