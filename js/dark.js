var estado = false;
function altera() {
  if (estado) {
    //fica claro
    document.getElementsByClassName("corpo")[0].classList.remove("dark");
    document.getElementsByTagName("body")[0].classList.remove("dark");
    document.getElementsByClassName("porta-botoes")[0].classList.remove("dark");
    document.getElementsByClassName("secundaryButton")[0].classList.remove("dark");
    estado = false;
  } else {
    //fica escuro
    document.getElementsByTagName("body")[0].classList.add("dark");
    document.getElementsByClassName("porta-botoes")[0].classList.add("dark");
    document.getElementsByClassName("corpo")[0].classList.add("dark");
    document.getElementsByClassName("secundaryButton")[0].classList.add("dark");
    estado = true;
  }
}
