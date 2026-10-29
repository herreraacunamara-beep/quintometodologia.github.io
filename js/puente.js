/* Puente para presentaciones con SISTEMA PROPIO de diapositivas.
   Permite que los botones ◀ ▶ del visor funcionen siempre (también al abrir
   el sitio con doble clic). Se añade al final del <body> de grupoN.html:
     <script src="../js/puente.js"></script>
   No usar junto con diapositivas.js (esa ya incluye esta función). */
(function () {
  function tecla(k, c) {
    ["keydown", "keyup"].forEach(function (t) {
      document.dispatchEvent(new KeyboardEvent(t, { key: k, keyCode: c, which: c, bubbles: true, cancelable: true }));
    });
  }
  function avisar() { try { parent.postMessage({ tipo: "puente" }, "*"); } catch (e) {} }
  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d) return;
    if (d.tipo === "hola") avisar();
    else if (d.tipo === "ir") {
      if (d.accion === "sig") tecla("ArrowRight", 39);
      else if (d.accion === "ant") tecla("ArrowLeft", 37);
    }
  });
  avisar();
})();
