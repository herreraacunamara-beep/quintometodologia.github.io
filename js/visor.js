/* Visor: muestra la presentación de un grupo en pantalla completa con controles discretos. */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var marco = $("marco"), barra = $("barra");
  var n = parseInt(new URLSearchParams(location.search).get("g"), 10);
  var g = GRUPOS.filter(function (x) { return x.numero === n; })[0];
  var conMotor = false; // true si la presentación usa js/diapositivas.js
  var conPuente = false; // true si la presentación incluye js/puente.js

  /* --- Casos sin presentación --- */
  if (!g || !g.lista) {
    $("pendiente").hidden = false;
    $("pantalla").hidden = true;
    $("etiqueta").hidden = true;
    if (!g) {
      $("pend-titulo").textContent = "Grupo no encontrado";
      $("pend-texto").textContent = "Ese número de grupo no existe. Vuelve al menú y elige uno de la lista.";
    } else {
      $("pend-titulo").textContent = "Grupo " + g.numero + ": presentación pendiente";
      $("pend-texto").textContent = "Este grupo todavía no entregó su presentación. Cuando esté cargada, aparecerá aquí.";
    }
    return;
  }

  /* --- Presentación disponible --- */
  document.title = "Grupo " + g.numero + (g.titulo ? " · " + g.titulo : "");
  $("etiqueta").textContent = "Grupo " + g.numero;
  marco.hidden = false;

  function enfocar() { try { marco.contentWindow.focus(); } catch (e) {} }

  function mandar(accion) {
    if (conMotor || conPuente) {
      marco.contentWindow.postMessage({ tipo: "ir", accion: accion }, "*");
    } else {
      // Presentación con su propio sistema: se simula la tecla de flecha.
      var tecla = accion === "sig" ? { key: "ArrowRight", keyCode: 39 } : { key: "ArrowLeft", keyCode: 37 };
      try {
        var d = marco.contentWindow.document;
        ["keydown", "keyup"].forEach(function (t) {
          var ev = new KeyboardEvent(t, { key: tecla.key, keyCode: tecla.keyCode, which: tecla.keyCode, bubbles: true });
          d.dispatchEvent(ev);
        });
      } catch (e) { /* si el navegador lo impide, se usan las flechas del teclado dentro de la presentación */ }
    }
    enfocar();
  }

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (e.source !== marco.contentWindow || !d) return;
    if (d.tipo === "puente") { conPuente = true; $("ant").hidden = false; $("sig").hidden = false; return; }
    if (d.tipo !== "diapositivas") return;
    conMotor = true;
    $("contador").textContent = d.actual + " / " + d.total;
    $("contador").hidden = false;
    $("ant").hidden = false;
    $("sig").hidden = false;
  });

  marco.addEventListener("load", function () {
    marco.contentWindow.postMessage({ tipo: "hola" }, "*");
    if (!conMotor) { $("ant").hidden = false; $("sig").hidden = false; }
    enfocar();
  });
  marco.src = "presentaciones/grupo" + g.numero + ".html";

  $("ant").addEventListener("click", function () { mandar("ant"); });
  $("sig").addEventListener("click", function () { mandar("sig"); });

  /* --- Pantalla completa --- */
  function enPantalla() { return document.fullscreenElement || document.webkitFullscreenElement; }
  function alternar() {
    var raiz = document.documentElement;
    if (enPantalla()) {
      (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    } else {
      var pedir = raiz.requestFullscreen || raiz.webkitRequestFullscreen;
      if (pedir) { var r = pedir.call(raiz); if (r && r.catch) r.catch(function () {}); }
      else alert("Tu navegador no permite pantalla completa. Prueba con F11.");
    }
    enfocar();
  }
  function actualizarBoton() {
    $("pantalla").textContent = enPantalla() ? "Salir de pantalla completa" : "Pantalla completa";
  }
  $("pantalla").addEventListener("click", alternar);
  document.addEventListener("fullscreenchange", actualizarBoton);
  document.addEventListener("webkitfullscreenchange", actualizarBoton);

  /* --- Teclado (cuando el foco está fuera de la presentación) --- */
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "PageDown") { mandar("sig"); e.preventDefault(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { mandar("ant"); e.preventDefault(); }
    else if (e.key === "f" || e.key === "F") { alternar(); }
    // Escape: el navegador sale de pantalla completa por sí solo.
  });
})();
