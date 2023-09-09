# Client

Nombre: Jorge Valero Martín

Preguntas:
  - El objeto que devuelve la Api contiene el número de página y las páginas totales con esos datos ya puedes mandar al back la página que quieres cargar y controlar que si es la última no aparezca el botón para seguir cargando.
  - const filtered = films.filter(vote_average => vote_average > 6); es una de las opciones más comunes. Pero este tipo de filtros es más óptimo hacerlo en la query a base de datos.
Librerías:
  - Sólo he usado ng-lazyload-image para la carga de imágenes de forma perezosa.
Documentación:
  -La estructura de archivos está pensada para manejar sesiones de usuarios, se han creado todas las carpetas y archivos de la parte de auth pero no se ha llegado a implementar en la parte cliente. Por otro lado la parte del dashboard tiene la carpta de components con componentes reutilizables como el navbar y las cards, el layout del dashboard y los servicios que requiere para poblar de datos la página.