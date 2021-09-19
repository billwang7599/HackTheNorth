window.onload = function(){
  
    const menu_btn = document.querySelector(".hamb");
    const mobile_menu = document.querySelector(".mobile-nav");
    const log_bt = document.querySelector(".log")
  
    menu_btn.addEventListener('click',function(){
      mobile_menu.classList.toggle('is-active');
    });
  }

food = [{"img": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg", "d": "This is a burger"},
{"img": "https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2020/04/Katsu_Curry_0858sq.jpg", "d": "Katsu Curry"},
{"img": "https://www.kitchensanctuary.com/wp-content/uploads/2020/10/Lasagne-square-FS-79.jpg", "d": "This is lasagne"},
{"img": "https://www.jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg", "d": "This is chicken alfredo pasta"}]

function randomize(){
  var x = Math.floor((Math.random() * food.length));
  $("#card-image").attr("src", food[x].img)
  $("#card-d").text(food[x].d)
}