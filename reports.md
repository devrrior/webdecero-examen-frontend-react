# Reporte

## Preguntas

- **Explica con tus palabras qué es una `API`.**

  - Es una capa intermedia entre nuestro sistema y el usuario, donde podemos interactuar con el sistema mediante peticiones HTTP.

- **En caso de haber utilizado un framework de estilos, justifica su uso y por qué elegiste ese.**

  - En este proyecto, como tal, no utilicé algún framework de estilos, sino que usé una librería que permite agregar `CSS` en `JS`, llamada `styled-components`. Tomé esa decisión porque es ordenada la forma en la que se declaran los estilos. Una alternativa podría haber sido `Tailwind`, pero en mi caso no me termina de encantar tener muchas clases en mi componente, ya que puede ser difícil de leer en algún punto.

- **En caso de haber utilizado un patrón de componentes, justifica su uso y por qué elegiste ese.**

  - En el proyecto utilicé el patrón `Composition` (Composición). Este patrón sugiere construir estructuras complejas a partir de estructuras simples. Básicamente, `React` está construido para ese propósito: crear componentes y reutilizarlos. Esto lo podemos ver implementado en el proyecto con los componentes `TextField` y `Button`, los cuales reutilizamos tanto en la página de `Profile` como en la de `Login`.

- **¿Qué patrones de diseño conoces? ¿Cuáles has aplicado? Explica por qué los utilizaste y cómo te ayudaron a resolver un problema o tuvieron una ventaja sobre otros.**

  - Como tal, no he implementado patrones de diseño desde cero en proyectos, ya que los frameworks implementan patrones de diseño dentro de ellos, permitiéndonos enfocarnos en nuestra solución. Sin embargo, conozco la teoría de algunos de ellos, como `Singleton`, el cual nos ayuda a crear solo una instancia de un objeto. También está el patrón `Observer`, que observa un componente y cuando este cambia, notifica a los suscritos.

- **¿Has utilizado `Sockets`? Si es así, explica por qué los utilizaste y sus ventajas.**

  - Sí, he utilizado `Sockets`. Para ello, utilicé la librería `Socket.IO`, la cual me ayudó a implementar una web de mensajería en tiempo real. `Socket.IO` permitió que los mensajes se enviaran en tiempo real, ofreciendo una baja latencia. Una ventaja importante es su facilidad de uso en comparación con la forma tradicional de utilizar `Sockets`, lo que facilita su integración tanto en el `frontend` como en el `backend`.
    - Repositorio del Frontend: [`chat-websocket-nextjs`](https://github.com/devrrior/chat-websocket-nextjs-ts)
    - Repositorio del Backend: [`chat-websocket-nestjs`](https://github.com/devrrior/chat-websocket-nestjs)

## Justificación del uso de librerías y estrategias en el proyecto

### Librerías agregadas

- `styled-components`: El uso de dicha librería ya fue explicado en la parte de preguntas.
- `styled-normalize`: Esta librería nos sirvió para normalizar estilos, lo cual es importante para que nuestras interfaces mantengan el mismo diseño en cualquier navegador, ya que cada navegador agrega sus propios estilos.
- `formik`: La librería `formik` facilita el manejo de formularios. En este caso, nos ayudó a gestionar las validaciones y errores de nuestro formulario de `login`.
- `yup`: Esta librería nos ahorra el uso de `regex` cuando queremos validar tipos de datos (`email`, `texto`, `número`, etc.). Además, esta librería se integra bien con `formik`.
- `axios`: Nos ayudó a realizar nuestras peticiones `HTTP` a la `API` proporcionada. Se prefirió esta librería sobre `fetch` por una funcionalidad específica que ofrece: los `interceptors`. Estos nos permiten manejar ciertos casos de uso, como cuando expira el `accessToken`; en ese caso, podemos crear un `interceptor` para que, si obtenemos un estado `401`, intentemos refrescar el token y volver a hacer la petición original.
- `react-router-dom`: Esta librería la utilizamos para crear rutas dentro de nuestro `frontend` y proteger las rutas correspondientes.

### Pasos generales que se realizaron

1. Reemplazar el uso de `CSS` por `styled-components`.
2. Agregar `styled-normalize` para normalizar los estilos.
3. Agregar estilos a la página de `Login`. En este paso, se crearon los componentes `TextField` y `Button`.
4. Con los estilos listos, se agregaron las validaciones con `formik` y `yup`.
5. Con ayuda de `axios`, se creó el archivo `authServices.js`, en el cual están las acciones de autenticar, obtener información del usuario logueado y refrescar los tokens.
6. Se creó el `AuthContext`, el cual nos ayuda a saber en cualquier parte del `frontend` si el usuario está logueado y, si lo está, a tener sus tokens.
7. Teniendo todo lo anterior preparado, se terminó de realizar la lógica del `login`.
8. Con el `login` listo, tocaba generar la página de `Profile`. Antes de empezar a diseñarla, creamos rutas con `react-router-dom`, protegiendo algunas que requieren estar logueado.
9. Con las rutas configuradas, se diseñó la parte de `Profile`, reutilizando componentes como `Button`.
10. En `Profile`, se creó un hook para manejar peticiones que necesitan autenticación, utilizando la funcionalidad de `axios` llamada `interceptors`. Si la request fallaba y devolvía un `401`, se refrescaban los tokens y se volvía a hacer la petición original.
