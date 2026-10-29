=====================================================================
 SITIO DE EXPOSICIONES - 14 GRUPOS
 HTML + CSS + JavaScript normales. Sin instalar nada. Gratis.
=====================================================================

CÓMO FUNCIONA (resumen)
-----------------------
- index.html muestra 14 tarjetas (Grupo 1 al 14).
- Al pulsar "Abrir presentación" se abre ver.html, que muestra la
  presentación del grupo a toda pantalla con controles discretos.
- Cada presentación es un archivo en la carpeta "presentaciones":
  grupo1.html, grupo2.html ... grupo14.html
- Para agregar o cambiar una presentación SOLO hay que:
    1) copiar su archivo a "presentaciones" con el nombre correcto, y
    2) (solo la primera vez) marcarla como cargada en js/grupos.js.
  No hay que tocar nada más.

IMPORTANTE SOBRE SUBIR ARCHIVOS
-------------------------------
La página NO tiene botón para "subir" archivos, a propósito. Un sitio
gratuito como Netlify o GitHub Pages solo muestra los archivos que tú
publicas; no puede recibir ni guardar archivos de los visitantes sin un
servidor o base de datos. Un botón de subida parecería funcionar, pero
el archivo quedaría solo en la computadora de quien lo eligió y los
demás no lo verían. Por eso la forma real y más simple es:
los grupos te envían su archivo .html y tú lo pones en la carpeta
(o los invitas a GitHub, ver paso 6).

CONTENIDO DE LA CARPETA
-----------------------
  index.html              Menú principal con las 14 tarjetas
  ver.html                Visor de presentaciones (pantalla completa)
  css/estilos.css         Diseño
  js/grupos.js            ÚNICO archivo que editas (nombres, títulos, estado)
  js/app.js               Dibuja las tarjetas (no tocar)
  js/visor.js             Controles del visor (no tocar)
  js/diapositivas.js      Motor de diapositivas para las presentaciones
  js/puente.js            Para presentaciones con sistema propio (botones ◀ ▶)
  presentaciones/         grupo1.html ... grupo14.html
  presentaciones/_plantilla.html   Modelo para que los grupos hagan la suya
  presentaciones/recursos/         Imágenes o videos extra (opcional)

---------------------------------------------------------------------
PASO 1. GUARDAR LOS ARCHIVOS
---------------------------------------------------------------------
1. Descarga el archivo ZIP.
2. Clic derecho sobre el ZIP > "Extraer todo" (Windows) o doble clic (Mac).
3. Obtendrás la carpeta "exposicion-grupos". Guárdala en un lugar fácil
   (Escritorio o Documentos). No cambies los nombres de las carpetas.

---------------------------------------------------------------------
PASO 2. PROBAR EN TU COMPUTADORA
---------------------------------------------------------------------
1. Abre la carpeta "exposicion-grupos".
2. Doble clic en index.html (se abre en tu navegador).
3. Verás 14 tarjetas. El Grupo 1 tiene una presentación de EJEMPLO.
4. Pulsa "Abrir presentación" en el Grupo 1 y prueba:
   - flechas ← y → del teclado, o los botones ◀ ▶
   - botón "Pantalla completa" (o la tecla F)
   - tecla Esc para salir de pantalla completa
   - botón "← Menú" para volver
5. Pulsa "Presentación pendiente" en cualquier otro grupo: verás el
   mensaje de que aún no entregó su presentación.
Los controles aparecen tenues abajo; acerca el mouse y se resaltan.

---------------------------------------------------------------------
PASO 3. AGREGAR LA PRESENTACIÓN DE UN GRUPO
---------------------------------------------------------------------
Ejemplo con el Grupo 5:
1. Renombra su archivo a:  grupo5.html
2. Cópialo dentro de la carpeta "presentaciones" y acepta REEMPLAZAR el
   marcador que ya existe.
3. Abre js/grupos.js con el Bloc de notas (clic derecho > Abrir con).
4. Busca la línea del grupo 5 y cámbiala así:
     { numero: 5, nombre: "Los Innovadores", titulo: "Energía solar", lista: true },
   (lista: false = pendiente, lista: true = cargada. Conserva comillas y coma.)
5. Guarda el archivo y recarga index.html (F5). La tarjeta aparece en verde.
Repite con cada grupo.

CÓMO DEBE SER LA PRESENTACIÓN DE UN GRUPO
-----------------------------------------
Opción A (recomendada): copiar presentaciones/_plantilla.html.
  - Cada diapositiva es un bloque  <section class="slide"> ... </section>
  - Se puede usar CSS y JavaScript normales dentro del archivo.
  - Deben dejar al final la línea:
      <script src="../js/diapositivas.js"></script>
  - Así el visor muestra el contador "3 / 10" y los botones ◀ ▶.
Opción B: una presentación que ya tenga su propio sistema de
  diapositivas (hecha con otra herramienta, Reveal.js, etc.). Se guarda
  igual como grupoN.html y se respeta su sistema. Para que los botones
  ◀ ▶ del visor funcionen siempre (también al abrir con doble clic),
  agrega al final del archivo, justo antes de </body>, esta línea:
      <script src="../js/puente.js"></script>
  El visor no muestra el contador en este caso. Las flechas del teclado
  funcionan igual. (No usar puente.js junto con diapositivas.js.)
Imágenes y archivos extra:
  - Lo más simple es que todo vaya dentro del mismo .html.
  - Si usan imágenes aparte, guárdenlas en presentaciones/recursos/grupoN/
    y escribe la ruta así:  recursos/grupo5/foto.jpg
  - Si una presentación carga fuentes o librerías desde Internet, ese
    material necesita conexión el día de la exposición.

---------------------------------------------------------------------
PASO 4. PUBLICAR GRATIS (OPCIÓN MÁS FÁCIL: NETLIFY)
---------------------------------------------------------------------
Netlify permite publicar arrastrando la carpeta, sin comandos.
1. Entra a  https://app.netlify.com/drop
2. Arrastra la carpeta completa "exposicion-grupos" a la zona indicada.
3. Espera unos segundos: se genera un enlace parecido a
   https://nombre-aleatorio.netlify.app
4. Crea una cuenta gratuita cuando te lo pida (con tu correo o Google).
   Hazlo en seguida: así el sitio queda guardado y no se borra.
5. Opcional: dentro de tu sitio en Netlify, busca "Site configuration"
   y "Change site name" para tener un enlace más fácil de recordar.
(Los nombres de los botones pueden cambiar un poco con el tiempo, pero
la idea es siempre la misma: arrastrar la carpeta.)

---------------------------------------------------------------------
PASO 5. OBTENER Y COMPARTIR EL ENLACE
---------------------------------------------------------------------
1. Copia el enlace que Netlify te muestra (termina en .netlify.app).
2. Ábrelo en tu navegador y verifica que se vean las 14 tarjetas.
3. Envíalo a tus compañeros por WhatsApp, correo o el grupo de la clase.

---------------------------------------------------------------------
PASO 6. ACTUALIZAR UNA PRESENTACIÓN
---------------------------------------------------------------------
1. En tu computadora, reemplaza el archivo (por ejemplo grupo5.html)
   en la carpeta "presentaciones". Si es la primera vez que se carga,
   cambia también lista: true en js/grupos.js.
2. Netlify: entra a tu sitio > pestaña "Deploys" > arrastra otra vez
   la carpeta completa "exposicion-grupos". El enlace NO cambia.
3. Espera unos segundos y recarga la página (Ctrl + F5).

---------------------------------------------------------------------
ALTERNATIVA: GITHUB PAGES (si quieres que los compañeros suban su archivo)
---------------------------------------------------------------------
1. Crea una cuenta gratis en https://github.com
2. Arriba a la derecha: "+" > "New repository". Nombre: exposiciones.
   Marca "Public" y pulsa "Create repository".
3. Pulsa "uploading an existing file", arrastra TODO el contenido de la
   carpeta "exposicion-grupos" (index.html, ver.html, css, js,
   presentaciones, README.txt) y pulsa "Commit changes".
   Comprueba que index.html quede en la raíz del repositorio.
4. Ve a "Settings" > "Pages". En "Source" elige "Deploy from a branch",
   rama "main", carpeta "/ (root)" y pulsa "Save".
5. Espera 1 o 2 minutos. El enlace será:
     https://TU-USUARIO.github.io/exposiciones/
6. Actualizar: en el repositorio abre la carpeta "presentaciones" >
   "Add file" > "Upload files", sube el archivo con el mismo nombre y
   "Commit changes". Para editar js/grupos.js, ábrelo y pulsa el lápiz.
7. Si quieres que cada grupo suba su archivo: "Settings" >
   "Collaborators" > invítalos por su usuario de GitHub (cada uno
   necesita su cuenta gratuita).

---------------------------------------------------------------------
EL DÍA DE LA EXPOSICIÓN
---------------------------------------------------------------------
- Abre el enlace unos minutos antes y prueba el proyector.
- Pulsa "Abrir presentación" y luego "Pantalla completa" (o tecla F).
- Avanza con → y retrocede con ←. Esc sale de pantalla completa.
- Plan B sin Internet: guarda la carpeta en tu computadora o en un
  USB y abre index.html con doble clic. Funciona igual.

PROBLEMAS FRECUENTES
--------------------
- Cambié un archivo y no se nota: recarga con Ctrl + F5.
- La tarjeta sigue "Pendiente": falta poner lista: true en js/grupos.js.
- Sale "Presentación pendiente" con la tarjeta en verde: el archivo no
  se llama exactamente grupoN.html o está en otra carpeta.
- Se ve en blanco: revisa que el archivo del grupo abra bien por sí solo
  (doble clic sobre él) y que sus imágenes estén en la ruta correcta.
- Las flechas no avanzan: haz clic una vez sobre la presentación y
  vuelve a probar.
