/**document.getElementById("boton_foto").onclick = function () {
    document.getElementById("foto").style.display = "block";
}
*/

document.getElementById("boton_foto").onclick = function() {
    var foto = document.getElementById("foto");
    if (foto.style.display === "none") {
      foto.style.display = "block";
    } else {
      foto.style.display = "none";
    }
  }