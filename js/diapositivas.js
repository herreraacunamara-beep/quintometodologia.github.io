/* Motor de diapositivas para las presentaciones del grupo.
   Uso: poner cada diapositiva dentro de <section class="slide"> ... </section>
   y añadir al final del <body>:  <script src="../js/diapositivas.js"></script>
   Teclas: ← → (también AvPág/RePág, Inicio, Fin). */
(function () {
  var estilo = document.createElement("style");
  estilo.textContent =
    "html,body{margin:0;height:100%;overflow:hidden}" +
    ".slide{display:none!important;position:fixed;top:0;left:0;right:0;bottom:0;box-sizing:border-box;overflow:auto}" +
    ".slide.activa{display:flex!important;flex-direction:column;justify-content:center}";
  document.head.appendChild(estilo);

  var diap = [], actual = 0;

  function avisar() {
    try { parent.postMessage({ tipo: "diapositivas", actual: actual + 1, total: diap.length }, "*"); } catch (e) {}
  }
  function ir(i) {
    if (!diap.length) return;
    actual = Math.max(0, Math.min(diap.length - 1, i));
    diap.forEach(function (d, k) { d.classList.toggle("activa", k === actual); });
    avisar();
    try { history.replaceState(null, "", "#" + (actual + 1)); } catch (e) {}
  }
  function accion(a) {
    if (a === "sig") ir(actual + 1);
    else if (a === "ant") ir(actual - 1);
    else if (a === "inicio") ir(0);
    else if (a === "fin") ir(diap.length - 1);
  }

  document.addEventListener("keydown", function (e) {
    var t = (e.target.tagName || "").toUpperCase();
    if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
    var k = e.key;
    if (k === "ArrowRight" || k === "PageDown") accion("sig");
    else if (k === "ArrowLeft" || k === "PageUp") accion("ant");
    else if (k === "Home") accion("inicio");
    else if (k === "End") accion("fin");
    else return;
    e.preventDefault();
  });

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d) return;
    if (d.tipo === "ir") accion(d.accion);
    else if (d.tipo === "hola") avisar();
  });

  function iniciar() {
    diap = [].slice.call(document.querySelectorAll(".slide"));
    var h = parseInt(location.hash.slice(1), 10);
    ir(h ? h - 1 : 0);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
