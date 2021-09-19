function postJson() {
    $.getJSON("../db/cards.json", function(data){
        for (var i = 0; i < data.cards.length; i++) {
            cards = data.cards
            console.log(cards)
            $("#recipe-cards-container").append("<div class='card'>"+ "<b>" + cards[i].title +"</b> <br>"+ cards[i].text + "</div");
        }
    })
}

postJson();

$("#form").on("submit", e => {
    e.preventDefault();
    const text = $("#text-input").val();
    const title = $("#title-input").val();

    fetch("/send-card", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({title: title, text: text})});
})

$("#close-form").click(function(){
    $("#recipe-cards-container").empty();
    postJson();

});

$("#img-scan").on("submit", e => {
    e.preventDefault();
    fetch("/scan-image", {method: "GET", headers: {"Content-Type": "application/json"}})
    .then(result => result.json())
    .then(result => $("#text-input").val(result.text))
})

function add(){
    document.querySelector(".form-container").style.display = "flex";
}
