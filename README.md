# challenge-amigo-secreto
Se realiza desafio de Oracle ONE
# Sorteo Amigo Secreto 🎁

Este es un sencillo pero divertido proyecto desarrollado en JavaScript, HTML y CSS que te permite realizar el sorteo del "Amigo Secreto" de forma rápida y fácil.

## ✨ Características Principales

* **Añadir participantes**: Puedes agregar los nombres de todos tus amigos a una lista.
* **Validación de nombres**: El sistema evita que se ingresen nombres en blanco o repetidos para asegurar un sorteo justo.
* **Visualización en tiempo real**: Los nombres añadidos se muestran inmediatamente en pantalla.
* **Sorteo aleatorio**: Con un solo clic, la aplicación selecciona un amigo secreto de forma totalmente aleatoria entre los participantes ingresados.
* **Reinicio fácil**: La aplicación se reinicia automáticamente después de realizar el sorteo, preparándose para un nuevo juego.

## 🚀 Cómo Funciona

El flujo del juego es muy intuitivo:

1.  **Añadir Amigos**: Escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir". El nombre aparecerá en la lista de "Amigos Ingresados".
2.  **Sortear**: Una vez que hayas añadido a todos los participantes, presiona el botón "Sortear Amigo Secreto".
3.  **¡Descubre a tu amigo!**: El nombre de tu amigo secreto se mostrará en pantalla.
4.  **Jugar de nuevo**: Para comenzar un nuevo sorteo, simplemente presiona el botón "Sortear" una segunda vez y el juego se reiniciará a su estado inicial.
   
## 🛠️ Vista Rápida del Código

El proyecto se estructura principalmente en las siguientes funciones de JavaScript:

* `agregarAmigo()`: Se encarga de recibir el nombre del `input`, validarlo y añadirlo a la variable `listaDeAmigos`.
* `sortearAmigo()`: Realiza la lógica principal del sorteo. Genera un número aleatorio basado en el total de amigos en la lista (`cantidadLista`) y lo usa para seleccionar un ganador.
* `condicionesIniciales()`: Restablece todas las variables y los elementos en pantalla a su estado original para permitir un nuevo juego.
* `añadirAmigoTexto()`: Es una función auxiliar que actualiza el contenido HTML para mostrar tanto la lista de amigos como el resultado final.

## 💻 Tecnologías Utilizadas

* HTML
* CSS
* JavaScript
