$(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
var el = document.querySelectorAll('.tr1Createtive td');
var el1 = document.querySelectorAll('.tr2Createtive td');
var eltr1Consumer = document.querySelectorAll('.tr1Consumer td');
var eltr1ConsumerS = document.querySelectorAll('.tr1ConsumerServices td');
var eltr1IT = document.querySelectorAll('.tr1IT td');
var eltr1Commercial = document.querySelectorAll('.tr1Commercial td');
var eltr1Health = document.querySelectorAll('.tr1Health td');
var eltr1Industrials = document.querySelectorAll('.tr1Industrials td');
var eltr1Materials = document.querySelectorAll('.tr1Materials td');
var eltr1Energy = document.querySelectorAll('.tr1Energy td');
var eltr1Transport = document.querySelectorAll('.tr1Transport td');
var eltr1Role = document.querySelectorAll('.tr1Role td');
var eltr1Funded = document.querySelectorAll('.tr1Funded td');
var eltr1Gender = document.querySelectorAll('.trGender td');
var eltr1Region = document.querySelectorAll('.trRegion td');
for (let i = 0; i < eltr1Gender.length; i++) {
    eltr1Gender[i].onclick = function () {
        var c = 0;
        while (c < eltr1Gender.length) {
            eltr1Gender[c++].className = 'border-IPE';
        }
        eltr1Gender[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Region.length; i++) {
    eltr1Region[i].onclick = function () {
        var c = 0;
        while (c < eltr1Region.length) {
            eltr1Region[c++].className = 'border-IPE';
        }
        eltr1Region[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Role.length; i++) {
    eltr1Role[i].onclick = function () {
        var c = 0;
        while (c < eltr1Role.length) {
            eltr1Role[c++].className = 'border-IPE1';
        }
        eltr1Role[i].className = 'border-IPE1 active';
    };
}
for (let i = 0; i < eltr1Funded.length; i++) {
    eltr1Funded[i].onclick = function () {
        var c = 0;
        while (c < eltr1Funded.length) {
            eltr1Funded[c++].className = 'border-IPE1';
        }
        eltr1Funded[i].className = 'border-IPE1 active';
    };
}
for (let i = 0; i < eltr1Commercial.length; i++) {
    eltr1Commercial[i].onclick = function () {
        var c = 0;
        while (c < eltr1Commercial.length) {
            eltr1Commercial[c++].className = 'border-IPE';
        }
        eltr1Commercial[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Health.length; i++) {
    eltr1Health[i].onclick = function () {
        var c = 0;
        while (c < eltr1Health.length) {
            eltr1Health[c++].className = 'border-IPE';
        }
        eltr1Health[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Industrials.length; i++) {
    eltr1Industrials[i].onclick = function () {
        var c = 0;
        while (c < eltr1Industrials.length) {
            eltr1Industrials[c++].className = 'border-IPE';
        }
        eltr1Industrials[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Materials.length; i++) {
    eltr1Materials[i].onclick = function () {
        var c = 0;
        while (c < eltr1Materials.length) {
            eltr1Materials[c++].className = 'border-IPE';
        }
        eltr1Materials[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Energy.length; i++) {
    eltr1Energy[i].onclick = function () {
        var c = 0;
        while (c < eltr1Energy.length) {
            eltr1Energy[c++].className = 'border-IPE';
        }
        eltr1Energy[i].className = 'border-IPE active';
    };
}

for (let i = 0; i < eltr1Transport.length; i++) {
    eltr1Transport[i].onclick = function () {
        var c = 0;
        while (c < eltr1Transport.length) {
            eltr1Transport[c++].className = 'border-IPE';
        }
        eltr1Transport[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1Consumer.length; i++) {
    eltr1Consumer[i].onclick = function () {
        var c = 0;
        while (c < eltr1Consumer.length) {
            eltr1Consumer[c++].className = 'border-IPE';
        }
        eltr1Consumer[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1IT.length; i++) {
    eltr1IT[i].onclick = function () {
        var c = 0;
        while (c < eltr1IT.length) {
            eltr1IT[c++].className = 'border-IPE';
        }
        eltr1IT[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < eltr1ConsumerS.length; i++) {
    eltr1ConsumerS[i].onclick = function () {
        var c = 0;
        while (c < eltr1ConsumerS.length) {
            eltr1ConsumerS[c++].className = 'border-IPE';
        }
        eltr1ConsumerS[i].className = 'border-IPE active';
    };
}
for (let i = 0; i < el.length; i++) {
    el[i].onclick = function () {
        var c = 0;
        while (c < el.length) {
            el[c++].className = 'border-IPE';
        }
        el[i].className = 'border-IPE active';
    };
    el1[i].onclick = function () {
        var c = 0;
        while (c < el1.length) {
            el1[c++].className = 'border-IPE';
        }
        el1[i].className = 'border-IPE active';
    };
}
$(".btnHealth").click(function () {
    
    $(".tableHealth").toggle();
});
$(".btnIndustrials").click(function () {
 
    $(".tableIndustrials").toggle();
});
$(".btnMaterials").click(function () {
    
    $(".tableMaterials").toggle();
});
$(".btnEnergy").click(function () {
   
    $(".tableEnergy").toggle();
});
$(".btnTransport").click(function () {
   
    $(".tableTransport").toggle();
});
$(".btnIT").click(function () {
  
    $(".tableIT").toggle();
});
$(".btnCreate").click(function () {
 
    $(".tableCreative").toggle();
});
$(".btnConsumer").click(function () {
  
    $(".tableConsumer").toggle();
});
$(".btnConsumerServices").click(function () {
   
    $(".tableConsumerServices").toggle();
});
$(".btnCommercial").click(function () {

    $(".tableCommercial").toggle();
});

$(document).ready(function () {

   
    // make sure we dont have any crazy long numbers...
    function kThousandFormat(num) {
        // check if numer is greater than 999 - add k if so
        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    jQuery(document).ready(function ($) {
        // setup rangerslider
        var $element = $('input[type="range"]');
        $element
            .rangeslider({
                polyfill: false,
                onInit: function () {
                    var $handle = $('.rangeslider__handle', this.$range);
                    updateHandle($handle[0], this.value);
                }
            })
            .on('input', function (e) {
                var $handle = $('.rangeslider__handle', e.target.nextSibling);
                updateHandle($handle[0], this.value);
            });
        function updateHandle(el, val) {
            // update handle and add pound sign before
            el.textContent = '£' + kThousandFormat(val);
        }
    });
   

});