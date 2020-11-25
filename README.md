# EVALUACIÓN FINAL · REACT
### ***Alicia Colom Ortega***
------------
*Ejercicio de evaluación final de programación con el framework React para el módulo 3 de Adalab*

![Rick and Morty](./src/images/Rick-Morty_men-in-black.png)


## **OBJETIVO**
Se trata de una página web desarrollada en **React**, con un listado de personajes de la serie Rick and Morty, dónde podemosfiltrar por el nombre del personaje. 

## **DESARROLLO**
> 1. **Listado de personajes**

Petición al API de servicio de datos, a través de campo de búsqueda a través de fetch, recibiendo de vuelta un JSON con la información de los personajes. 
Endpoint del servicio de datos : https://rickandmortyapi.com/documentation/#get-all-characters

> 2. **Pintar un listado de personajes**

Recorriendo el array de datos con un método map, extrayendo y pintando información del personaje.

> 3. **Filtrado de personajes**

A través de un campo de texto se buscan personajes por su nombre. Al escribir en este, se filtran en la interfaz los personajes que contienen las letras escritas en el input. 

> 4. **Utilizar React Router**

Al hacer click sobre alguna de las tarjetas se pinta la tarjeta clicada a pantalla completa con el detalle de cada personaje. 
En los detalles aparece la siguiente información: imagen, nombre, especie, planeta de origen, género,  número de episodios en los que aparece el personaje, listado de episodios, y si está vivo o muerto.

## **Estructura de Componentes**

```
src
 ├─ public
 |  ├─ index.hmtl
 |  └─ favicon.ico
 |
 ├─ components
 |  ├─ App.js _______ comp. principal
 |  ├─ Landing.js _______ comp. de aterrizaje a la web
 |  ├─ CharacterList.js _______ listado de personajes e input de búsqueda
 |  ├─ CharacterCard.js _______ tarjeta de personaje que se renderiza en CharacterList.js
 |  ├─ CharacterDetail.js _______ comp. con información general del personaje
 |  ├─ Header.js _______ cabecera con logo y link a landing
 |  ├─ Footer.js _______ pie de página con datos de autoría
 |  ├─ Error.js _______ comp. de personaje inexistente
 |  ├─ NotResults.js _______ comp. de búsqueda fallida
 |  └─ Filters.js _______ comp. de trabajo para filtrados
 |
 ├─ images
 |  └─ ...
 |
 ├─ services
 |  └─ api.js _______ solicitud fetch a API
 |
 ├─ stylesheets
 |  ├─ CharacterList.scss
 |  ├─ CharacterCard.scss
 |  ├─ CharacterDetail.scss
 |  ├─ Error.scss
 |  └─ ...
 |
 ├─ index.js
 └─ index.scss
```

---


## Detalles de calidad
- Incluir el campo de texto dentro de una etiqueta `<form>` para cuidar la semántica.
- Impedir que el navegador envíe una petición o cambie de ruta al dar a intro sobre el campo de texto vacío aplicando un `prevent event default`.
- ***Mostrar un mensaje de error al realizar una búsqueda por un personaje que no existe.***
- ***Filtrar tanto en mayúsculas como en minúsculas desde el campo de texto aplicando un método toLowerCase.***
- ***Al entrar en detalles del personaje y volver al listado de personajes se debe poder leer el texto que se había incluido inicialmente en el campo de texto.***
 Para ello se recoge el valor del input y aplicando lifting se guarda en el estado del componente principal para bajarlo nuevamente al value del componente filters.

### *BONUS:* Mejoras visuales
- Mostrar el estado del personaje con un icono.
- Usar un sistema de grid para pintar el listado de personajes.
- Cuidar el funcionamiento del responsive en dispositivos pequeños.

### *BONUS:* URL compartible
- La URL del detalle del personaje debe ser compartible y poder acceder a ella visitándola directamente desde el navegador.
- Mostrar un mensaje de error si se introduce una ruta inexistente en el navegador.

### *BONUS:* Ordenación
- ***Ordenar alfabéticamente el listado de personajes utilizando un método sort.***
___________

# RESULTADO:
### **http://beta.adalab.es/modulo-3-evaluacion-final-alicia-colom/#/**