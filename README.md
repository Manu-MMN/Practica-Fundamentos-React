# React + Vite


# Wallapop Clone

Este proyecto es una réplica básica de Wallapop, una plataforma online para comprar y vender artículos de segunda mano. He desarrollado esta aplicación como parte de un ejercicio práctico para reforzar mis habilidades con React, consumiendo datos de una API RESTful y gestionando el estado de la aplicación con Context API.

## Funcionalidades principales

*   **Visualización de anuncios:** Se muestran los anuncios obtenidos del backend, incluyendo su nombre, tipo (venta/compra), descripción y precio.
*   **Creación de anuncios:** Los usuarios pueden crear nuevos anuncios a través de un formulario, especificando el nombre, tipo, precio y (opcionalmente) una descripción.
*   **Página de detalle de anuncio:** Al hacer clic en un anuncio, se muestra una página con los detalles completos del mismo.
*   **Filtrado de anuncios:** Los usuarios pueden filtrar los anuncios por nombre y tipo (venta/compra) para encontrar más fácilmente lo que buscan.
*   **Eliminación de anuncios:** Los usuarios pueden eliminar sus propios anuncios desde la página de detalle del anuncio.
*   **Autenticación:** Se implementó un sistema de autenticación básico para proteger la creación y eliminación de anuncios. Los usuarios deben iniciar sesión para realizar estas acciones.

## Tecnologías utilizadas

*   **React:** Librería de JavaScript para construir interfaces de usuario.
*   **React Router:** Para la gestión de rutas y navegación en la aplicación.
*   **Axios:** Para realizar peticiones HTTP al backend.
*   **Context API:** Para la gestión global del estado de la aplicación.
*   **CSS:** Para los estilos de la aplicación.

## Instalación

1.  Clona este repositorio: `git clone https://github.com/TuNombreDeUsuario/Wallapop-Clone.git`
2.  Instala las dependencias: `npm install`
3.  Inicia la aplicación: `npm start`

## Próximos pasos (opcional)

*   **Mejorar la interfaz de usuario:** Me gustaría dedicar tiempo a mejorar el diseño y la experiencia de usuario de la aplicación.
*   **Implementar funcionalidades adicionales:** Podría añadir funcionalidades como la búsqueda por categorías, el envío de mensajes entre usuarios o la gestión de favoritos.

## Agradecimientos

Agradezco a [Nombre del profesor o institución] por la guía y el apoyo durante el desarrollo de este proyecto.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


npm run dev to run

  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

 run `npm fund` for details