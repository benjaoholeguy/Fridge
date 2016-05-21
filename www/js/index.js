

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        new FastClick(document.body);
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {}
};

app.initialize();

var elmenu = function() {
    if( $("#content").hasClass('menuopen')) {
        $("#content").removeClass('menuopen');
        $(".lopen").removeClass('open');
        $("#menu").removeClass('menus');
        $("#estado").html('cierra menu');
    } else {
        $("#content").addClass('menuopen');
        $("#menu").addClass('menus');
        $(".lopen").addClass('open');
        $("#estado").html('abre menu');
    }
}
/* cuando da click en un área diferente al menú */
$(".lopen").tap(function() { cierramenu(); }); //para móviles
$(".lopen").click(function() { cierramenu(); }); //para navegador web
var cierramenu = function() {
    if( $("#content").hasClass('menuopen') ) {
        $("#content").removeClass('menuopen');
        $(".lopen").removeClass('open');
        $("#menu").removeClass('menus');
        $("#estado").html('cierra menu');
    }
    $(".lopen").removeClass('open');
};
/* cuando elige alguna opción del menu... */
var menusel = function(e) {
    cierramenu();
    if ($(e).text()=="Food List"){
        $("#estado").html(list());
        //location.href="list.html";
    }
    //$("#estado").html($(e).text()+' Selected');
};

function openOptions(){
    document.getElementById("containerShare").className = "centerContent transition";
}

function closeOptions(){
    document.getElementById("containerShare").className = "bottomContent transition";
}

function share(expr){ 
    switch (expr) {
      case "Twitter":
        window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.phonegapspain.com');
            closeOptions();
        break;
      case "Facebook":
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
            closeOptions();
        break;
      case "WhatsApp":
            window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
            closeOptions();
        break;
      default:
        console.log("");
    }
}

function list(){

    var ret='<div class="col-lg-12"><h1 class="page-header">Food</h1></div>';
    for (var i=1; i<11; i++){
        ret+='<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
            '<a class="thumbnail" href="#">' +
            '<img class="img-responsive" src="img/food/2.jpg" alt="">' +
            '</a>' +
            '</div>';
    }
    return ret;
}