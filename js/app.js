/* Dibuja las tarjetas de la página principal a partir de js/grupos.js */
(function () {
  function crear(etiqueta, clase, texto) {
    var e = document.createElement(etiqueta);
    if (clase) e.className = clase;
    if (texto) e.textContent = texto;
    return e;
  }

  document.getElementById("titulo-pagina").textContent = CLASE.titulo;
  document.getElementById("subtitulo-pagina").textContent = CLASE.subtitulo;
  document.title = CLASE.titulo;

  var rejilla = document.getElementById("rejilla");
  var cargadas = 0;

  GRUPOS.forEach(function (g) {
    if (g.lista) cargadas++;
    var tarjeta = crear("article", "tarjeta" + (g.lista ? " lista" : ""));
    tarjeta.appendChild(crear("div", "num", String(g.numero)));
    tarjeta.appendChild(crear("h2", "", "Grupo " + g.numero + (g.nombre ? ": " + g.nombre : "")));
    tarjeta.appendChild(crear("p", "tema", g.titulo || "Título por definir"));
    tarjeta.appendChild(crear("span", "estado", g.lista ? "Presentación cargada" : "Pendiente"));
    var boton = crear("a", "boton" + (g.lista ? "" : " suave"),
                      g.lista ? "Abrir presentación" : "Presentación pendiente");
    boton.href = "ver.html?g=" + g.numero;
    tarjeta.appendChild(boton);
    rejilla.appendChild(tarjeta);
  });

  document.getElementById("resumen").textContent =
    cargadas + " de " + GRUPOS.length + " presentaciones cargadas";
})();
