window.onload = function(){
  
  const menu_btn = document.querySelector(".hamb");
  const mobile_menu = document.querySelector(".mobile-nav");
  const log_bt = document.querySelector(".log")

  menu_btn.addEventListener('click',function(){
    mobile_menu.classList.toggle('is-active');
  });
}

function Log(){
  document.querySelector(".log").style.display = "block";
  document.querySelector(".main").style.filter = "blur(25px)";
  document.querySelector('.logsign').style.filter = "blur(25px)";
}

function Sign(){
  document.querySelector(".sign").style.display = "block";
  document.querySelector(".main").style.filter = "blur(25px)";
  document.querySelector('.logsign').style.filter = "blur(25px)";
}

function Close(){
  document.querySelector('.log').style.display = 'none';
  document.querySelector('.main').style.filter = 'none';
  document.querySelector(".logsign").style.filter = 'none';
  document.querySelector(".logsign").style.display = 'block';
}

function close2(){
  document.querySelector('.sign').style.display = 'none';
  document.querySelector('.main').style.filter = 'none';
  document.querySelector(".logsign").style.filter = 'none';
  document.querySelector(".logsign").style.display = 'block';
}

function LogIn(){
  if (document.getElementById("username").value == "Kingson") {
    if (document.getElementById("password").value == "Yang") {
      document.querySelector(".log").style.display = "none";
      document.querySelector(".main").style.filter = 'none';
      document.querySelector(".logsign").style.display = 'none';
      document.querySelector(".accountpage").style.display = "block";
      document.querySelector(".welcome").innerHTML += document.getElementById("username").value + "!";
      document.querySelector(".homepage").style.display = "block";
      document.getElementById("h4").style.display = "block";
    }
  }
}
