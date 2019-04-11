$(document).ready(function(){
    var flecha_1=$("#flecha_1").click(function(){
        flecha_1.hide();
        var flecha_11=$("#flecha_11");
        flecha_11.show();
        $("#inductivos").show();
    });

     var flecha_11=$("#flecha_11").click(function(){
        flecha_11.hide();
        var flecha_1=$("#flecha_1");
        flecha_1.show();
        $("#inductivos").hide();
    });

    var flecha_2=$("#flecha_2").click(function(){
        flecha_2.hide();
        var flecha_22=$("#flecha_22");
        flecha_22.show();
        $("#capacitivos").show();
    });

      var flecha_22=$("#flecha_22").click(function(){
        flecha_22.hide();
        var flecha_2=$("#flecha_2");
        flecha_2.show();
        $("#capacitivos").hide();
    });

    var flecha_3=$("#flecha_3").click(function(){
        flecha_3.hide();
        var flecha_33=$("#flecha_33");
        flecha_33.show();
        $("#resistivos").show();
    });

    var flecha_33=$("#flecha_33").click(function(){
        flecha_33.hide();
        var flecha_3=$("#flecha_3");
        flecha_3.show();
        $("#resistivos").hide();
    });

    var flecha_4=$("#flecha_4").click(function(){
        flecha_4.hide();
        var flecha_44=$("#flecha_44");
        flecha_44.show();
        $("#uso").show();
    });

    var flecha_44=$("#flecha_44").click(function(){
        flecha_44.hide();
        var flecha_4=$("#flecha_4");
        flecha_4.show();
        $("#uso").hide();
    });

    var flecha_5=$("#flecha_5").click(function(){
        flecha_5.hide();
        var flecha_44=$("#flecha_55");
        flecha_55.show();
        $("#informacion_personal").show();
    });

    var flecha_55=$("#flecha_55").click(function(){
        flecha_55.hide();
        var flecha_5=$("#flecha_5");
        flecha_5.show();
        $("#informacion_personal").hide();
    });

});