/**
 * 
 */
  function toggleDropdown() {
    document.getElementById("langDropdown").classList.toggle("show");
  }

  // クリック外しで閉じる
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      let dropdowns = document.getElementsByClassName("dropdown");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
  }