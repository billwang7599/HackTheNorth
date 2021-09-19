window.onload = function(){
  
    const menu_btn = document.querySelector(".hamb");
    const mobile_menu = document.querySelector(".mobile-nav");
    const log_bt = document.querySelector(".log")
  
    menu_btn.addEventListener('click',function(){
      mobile_menu.classList.toggle('is-active');
    });
  }