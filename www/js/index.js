

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
        console.log(navigator.camera);
    },
    receivedEvent: function(id) {}
};

app.initialize();

var elmenu = function() {
    if( $("#content").hasClass('menuopen')) {
        $("#content").removeClass('menuopen');
        $(".lopen").removeClass('open');
        $("#menu").removeClass('menus');
        //$("#estado").html('<img src="img/maps_img.png" width="100%" height="100%">');
        /*var imageUrl="img/maps_img.png";
        $("body").css('background-image', 'url(' + imageUrl + ')');*/

    } else {
        $("#content").addClass('menuopen');
        $("#menu").addClass('menus');
        $(".lopen").addClass('open');
        //$("#estado").html('<img src="img/maps_img.png" width="100%" height="100%">');
        /*var imageUrl="img/maps_img.png";
        $("body").css('background-image', 'url(' + imageUrl + ')');*/
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
        //$("#estado").html('<img src="img/maps_img.png" width="100%" height="100%">');
        /*var imageUrl="img/maps_img.png";
        $("body").css('background-image', 'url(' + imageUrl + ')');*/
    }
    $(".lopen").removeClass('open');
};
/* cuando elige alguna opción del menu... */
var menusel = function(e) {
    $("#full-screen-background-image").remove();
    cierramenu();
    if ($(e).text()=="Messages"){
        $("#estado").html(contact());
        //location.href="index.html";
    }
    if ($(e).text()=="Food List"){
        $("#estado").html(list());
        //location.href="index.html";
    }
    if ($(e).text()=="Personal Data"){
        $("#estado").html(personal_data());
        //$("#estado").html(contact());
        //location.href="index.html";
    }
    if ($(e).text()=="Food Upload"){
        $("#estado").html(food_upload());
        //$("#estado").html(contact());
        //location.href="index.html";
    }
    //$("#estado").html($(e).text()+' Selected');
};

/*function openOptions(){
    document.getElementById("containerShare").className = "centerContent transition";
}*/

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
    ret+='<div class="filter"></select>' +
        '        <select onchange="changeFood(this)" id="zones" type="text" class="form-control sel">' +
        '<option>Select your zone</option>';
    var zones=["CBD","Blockhouse Bay","Ramuera","New Lynn","Albany","North Shore"];
    for(var i=0; i<zones.length; i++) {
        ret+='<option>'+zones[i]+'</option>';
    }
    ret+='</select>';
    ret+='</select>' +
    '        <select onchange="changeFood(this)" id="expires" type="text" class="form-control sel">' +
    '<option>Expire Date</option>';
    var expires=["Today","Tomorrow"];
    for(var i=0; i<expires.length; i++) {
        ret+='<option>'+expires[i]+'</option>';
    }
    ret+='</select>' +
        '        <select onchange="changeFood(this)" id="category" type="text" class="form-control sel">' +
        '<option>Category</option>';
    var cat=["Meet","Fruit","Fish","Cereals"];
    for(var i=0; i<cat.length; i++) {
        ret+='<option>'+cat[i]+'</option>';
    }
    ret+='</select></div>';
    ret+='<div id="tochange">';

    for (var i=1; i<11; i++){
        ret+='<div class="col-lg-3 col-md-4 col-xs-6 thumb">' +
            '<a class="thumbnail" href="#">' +
            '<img onclick="selected('+i+')" class="img-responsive" src="img/food/'+i+'.jpg" alt="">' +
            '</a>' +
            '</div>';
    }
    ret+='</div>';
    return ret;
}

function contact(){
    var ret='<div class="loginform col-xs-12">' +
        '        <form id="f1">' +
        '        <input placeholder="My Username" id="usr" type="text" class="form-control">' +
        '        <textarea placeholder="Message" id="pass" class="form-control txta"></textarea>' +
        '        <div class="form-add">' +
        '        <input class="btn btn-default form-submit" type="button" onclick="validate()" id="login" value="Send">' +
        '                    </div>' +

        '    </form>' +
        '    </div>';
    return ret;
}

function food_upload(){
    var ret='<div class="col-lg-12"><h1 class="page-header">Food Upload</h1></div>';
    ret+='<div class="loginform col-xs-12">' +
        '        <form id="f1">' +
        '<div><label>Deadline</label></div> <select id="usr" type="text" class="form-control sel">';
    for(var i=1; i<32; i++){
        ret+= '<option>'+i+'</option>';
    }


    ret+='</select>' +
        '        <select id="usr" type="text" class="form-control sel">';
    var meses=["January","February","March","April","May","June","July","August","September","October","November","December"];
    for(var i=0; i<12; i++) {
        ret+='<option>'+meses[i]+'</option>';
    }
    ret+='</select>' +
            '        <div><textarea placeholder="Description" cols="35" rows="10"></textarea></div>' +

        '        <div class="form-add">' +
        '        <input  src="img/camara.png" width="50px" height="50px" type="image" onclick="take_picture()" id="register" value="Picture">' +
       /* '                    </div>' +
        '        <div class="form-add">' +*/
        '        <input  src="img/buscar.jpg" width="40px" height="40px" type="image" onclick="take_picture()" id="register" value="Picture">' +
        '        <input  src="img/google_maps.jpg" width="55px" height="40px" type="image" onclick="take_picture()" id="register" value="Picture">' +
        '                    </div>' +
        '    </form>' +
        '    </div>' +
        '<div id="pic"></div>';
    return ret;
}


function personal_data(){
    var ret='<div class="col-lg-12"><h1 class="page-header">Personal Data</h1></div>';
    ret+='<div class="loginform col-xs-12">' +
        '        <form id="f1">' +
        '        <input placeholder="Username" id="usr" type="text" class="form-control">' +
        ' <select id="usr" type="text" class="form-control sel">';
    for(var i=1; i<32; i++){
        ret+= '<option>'+i+'</option>';
    }


        ret+='</select>' +
        '        <select id="usr" type="text" class="form-control sel">';
    var meses=["January","February","March","April","May","June","July","August","September","October","November","December"];
    for(var i=0; i<12; i++) {
        ret+='<option>'+meses[i]+'</option>';
    }
        ret+='</select>' +
        '        <select id="usr" type="text" class="form-control sel">' +
        '<option>1970</option>' +
        '<option>1971</option>' +
        '</select>' +
        '        <input id="email" placeholder="Email" type="text" class="form-control">' +
        '        <input id="phone" placeholder="Phone number" type="text" class="form-control">' +
        '        <input id="address" placeholder="Address" type="text" class="form-control">' +

        '        <div class="form-add">' +
        '        <input class="btn btn-default form-submit" type="button" onclick="validate()" id="register" value="Submit">' +
        '                    </div>' +

        '    </form>' +
        '    </div>';
    return ret;
}

function contactar(){
    $("#estado").html(contact())
}

function changeFood(e){
    var ret="";
    if ($(e).attr('id')=='category'){
        //alert($(e).attr('id'));


        for (var i=4; i<8; i++){
            ret+='<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
            ret+='<a class="thumbnail" href="#">' +
                '<img onclick="selected('+i+')" class="img-responsive" src="img/food/'+i+'.jpg" alt="">' +
                '</a>';
            ret+= '</div>';
        }

        $('#tochange').empty();

        $('#tochange').append(ret);
    }
    if ($(e).attr('id')=='expires'){
        //alert($(e).attr('id'));


        for (var i=6; i<11; i++){
            ret+='<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
            ret+='<a class="thumbnail" href="#">' +
                '<img onclick="selected('+i+')" class="img-responsive" src="img/food/'+i+'.jpg" alt="">' +
                '</a>';
            ret+= '</div>';
        }
        $('#tochange').empty();

        $('#tochange').append(ret);
    }
    if ($(e).attr('id')=='zones'){
        //alert($(e).attr('id'));


        for (var i=9; i<11; i++){
            ret+='<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
            ret+='<a class="thumbnail" href="#">' +
                '<img onclick="selected('+i+')" class="img-responsive" src="img/food/'+i+'.jpg" alt="">' +
                '</a>';
            ret+= '</div>';
        }
        $('#tochange').empty();

        $('#tochange').append(ret);
    }
}

function selected(i){
var ret='<div class="row">' +
    '        <div class="col-md-7">' +
    '        <a href="#">' +
    '        <img class="img-responsive" src="img/food/'+i+'.jpg" alt="">' +
    '        </a>' +
    '        </div>' +
    '        <div class="col-md-5">' +
    '<h3><img src="img/cucumber.png"width="20" height="30">' +
    '<img src="img/cucumber.png"width="20" height="30">' +
    '<img src="img/cucumber.png"width="20" height="30">' +
    '<img src="img/cucumber.png"width="20" height="30">' +
    '        <div onclick="userProfile(this)">Name of the user <img onclick="googlemaps()" src="img/google_maps.jpg"width="16%" height="16%">' +
    '<img onclick="contactar()" src="img/IMG_4756.JPG"width="15%" height="15%"></div></div></h3>' +

    '    <h4><div class="ranking">' +


    '        </div></h4>' +
    '    <blockquote>Description of the food. Expires date. More information. Description of the food. Expires date. More information</blockquote>' +

    '        </div>' +
    '        </div>';
    $('#tochange').empty();

    $('#tochange').append(ret);
}

function googlemaps(){
    window.open("https://www.google.co.nz/maps/dir/264+Whitney+Street,+Auckland/PAK'nSAVE+Mt+Albert,+Auckland,+Regi%C3%B3n+de+Auckland/@-36.9060588,174.6976587,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x6d0d46a1b67afffb:0x602aef6b8e46b7d7!2m2!1d174.7092177!2d-36.9194334!1m5!1m1!1s0x6d0d46c384ed334d:0x2254fe9f1fe9c0cf!2m2!1d174.706083!2d-36.8927003?hl=es-419",'_blank','location=no')
}

function take_picture(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}