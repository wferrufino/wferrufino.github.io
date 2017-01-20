"use strict";function setCookie(e,t,i){var a=new Date;a.setTime(a.getTime()+24*i*60*60*1e3);var n="expires="+a.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}function getCookie(e){for(var t=e+"=",i=document.cookie.split(";"),a=0;a<i.length;a++){for(var n=i[a];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}function checkCookie(e){var t=getCookie(e);return""!==t}function setCookiesFor(e,t){var i=document.getElementById(e).value;null!=i&&setCookie("SWFirstName",i,7);var a=document.getElementById(t).value;null!=a&&setCookie("SWLastName",a,7)}function hideElement(e){null!==document.getElementById&&(document.getElementById(e).style.visibility="hidden")}function checkForCookieHideInputs(){var e=checkCookie("SWFirstName");e===!0&&(hideElement("CTAFirstName"),hideElement("CTALastName"),hideElement("CTATFirstName"),hideElement("CTATLastName"),hideElement("SNFirstName"),hideElement("SNLastName"),hideElement("CTAFirstNameM"),hideElement("CTALastNameM"),hideElement("CTATFirstNameM"),hideElement("CTATLastNameM"),hideElement("SNFirstNameM"),hideElement("SNLastNameM"))}function featuresTab(){var e=function(e,t){$(e).addClass("inactive").removeClass("active"),t&&t()},t=function(t){var i=t.index();e($(".tab-content .active")),$(".tab-legend .active").removeClass("active").addClass("inactive"),$(".tab-legend > li").eq(i).removeClass("inactive").addClass("active"),$(".tab-content > li").eq(i).addClass("active").not(".nextFeature")},i=function(i){var a=$(i).find(".tab-content > li");$.each(a,function(){e(this)});var n=$(".tab-legend .active").length?$(".tab-legend .active"):$(".tab-legend > li:first-child");t(n)},a=function(e){var i=$(e).find(".tab-legend li");$.each(i,function(){$(this).on("click",function(){var e=$(this);t(e)})})},n=function(){var e=$(".tab");$.each(e,function(){i(this),a(this)});var t=$(".tab-legend").find("li").first().text(),n=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(n),$(".tab-legend").click(function(){n=$(".tab-legend").find("li.active").next("li").text(),$(".tab-legend").find("li:last-child").hasClass("active")?$(".nextFeature a").text(t):$(".nextFeature a").text(n)}),$(".tab-legend").find("li:last-child").hasClass("active")&&$(".nextFeature a").text(t);var s=$(".tab-legend").find("li"),l=$(".tab-content").find("li");$("#nextFeature").click(function(e){e.preventDefault();var i=s.filter(".active").removeClass("active"),a=i.next();a.length||(a=s.first()),a.addClass("active");var n=l.filter(".active").removeClass("active"),o=n.next();o.length||(o=l.first()),o.addClass("active");var c=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(c),$(".tab-legend").find("li:last-child").hasClass("active")?$(".nextFeature a").text(t):$(".nextFeature a").text(c)}),$("ul.tab-legend.features").each(function(){var e=$(this),t=e.find("li:gt(4)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),t.length>0&&($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>"),$(".keyFeatures .tabLegendWrapper").append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),e.toggleClass("expanded"),t.slideToggle()})))})},s={init:n};s.init(),$(".tabAccordion .tab").find("i").addClass("fa-plus"),$(".tabAccordion .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordion .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(".tabAccordion .tab:first-child").trigger("click"),$(".closeFeature").click(function(){var e=$(this).closest(".tabPanel");$(this).closest(".tabPanel").slideUp(),$(e).prev(".tabAccordion .tab").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus")})}function outerTabsFunction(){jQuery("ul.tabs").each(function(){var e,t,i=jQuery(this).find("a");e=jQuery(i.filter('[href="'+location.hash+'"]')[0]||i[0]),e.parent().addClass("active"),e[0]&&(t=$(e[0].hash)),i.not(e).each(function(){jQuery(this.hash).hide()}),jQuery(this).on("click","a",function(i){e.parent().removeClass("active"),event.target.hash.indexOf("-")!==-1&&$(".tab-legend-bundle:visible li.active").removeClass("active"),t.hide(),e=jQuery(this),t=jQuery(this.hash),$("ul.tab-content-bundle").find("li.active").hide().removeClass("active"),e.parent().addClass("active"),t.show(),i.preventDefault()})}),$("ul.tab-legend-bundle").each(function(){var e=$(this),t=e.find("li:gt(4)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),t.length>0&&e.append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),e.toggleClass("expanded"),t.slideToggle()}))}),$(".tabAccordionBundle").each(function(){var e=$(this),t=e.find("a.tab:gt(2)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),t.length>0&&e.append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),e.toggleClass("expanded"),t.slideToggle()}))});var e=$(".tab-link .active a").attr("href"),t=e+" .tab-legend-bundle",i=$(t).find("li.active").next("li").text();$(".tab-bundles").on("click","a",function(){e=$(".tab-link .active a").attr("href"),t=e+" .tab-legend-bundle",i=$(t).find("li.active").next("li").text(),$(".nextFeatureBundle a").text(i)}),$(".nextFeatureBundle a").text(i),$(".tab-legend-bundle").click(function(){i=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active").next("li").text(),$(".nextFeatureBundle a").text(i)}),$("a#nextFeatureBundle").click(function(e){e.preventDefault();var t=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active");$(t).removeClass("active").next("li").addClass("active");var i=$(".contentBundleWrap:visible .tab-content-bundle").find("li:visible");$(i).hide().removeClass("active").next("li").show().addClass("active");var a=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active").next("li").text();$(".nextFeatureBundle a").text(a)}),$(".tabAccordionBundle .tab").find("i").addClass("fa-plus"),$(".tabAccordionBundle .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordionBundle .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(function(){var e,t={"font-size":".9em","line-height":"1.2em","padding-top":".5em"};$(".tab-link div a").each(function(){e=$(this),$(this).text().length>30&&e.css(t)})}),$(".tabAccordionBundle .tab:first-child").trigger("click")}function faqFunction(){var e=function(e,t){$(e).addClass("inactive").removeClass("active"),t&&t()},t=function(t){var i=t.index();e($(".tab-content-faq .active")),$(".tab-legend-faq .active").removeClass("active").addClass("inactive"),$(".tab-legend-faq > li").eq(i).removeClass("inactive").addClass("active"),$(".tab-content-faq > li").eq(i).addClass("active").not(".nextFAQ")},i=function(i){var a=$(i).find(".tab-content-faq > li");$.each(a,function(){e(this)});var n=$(".tab-legend-faq .active").length?$(".tab-legend-faq .active"):$(".tab-legend-faq > li:first-child");t(n)},a=function(e){var i=$(e).find(".tab-legend-faq li");$.each(i,function(){$(this).on("click",function(){var e=$(this);t(e)})})},n=function(){var e=$(".tab");$.each(e,function(){i(this),a(this)});var t=$(".tab-legend-faq").find("li").first().text(),n=$(".tab-legend-faq").find("li.active").next("li").text();$(".nextFAQ a").text(n),$(".tab-legend-faq").click(function(){n=$(".tab-legend-faq").find("li.active").next("li").text(),$(".tab-legend-faq").find("li:last-child").hasClass("active")?$(".nextFAQ a").text(t):$(".nextFAQ a").text(n)}),$(".tab-legend-faq").find("li:last-child").hasClass("active")&&$(".nextFAQ a").text(t);var s=$(".tab-legend-faq").find("li"),l=$(".tab-content-faq").find("li");$("#nextFeatureFaq").click(function(e){e.preventDefault();var i=s.filter(".active").removeClass("active"),a=i.next();a.length||(a=s.first()),a.addClass("active");var n=l.filter(".active").removeClass("active"),o=n.next();o.length||(o=l.first()),o.addClass("active");var c=$(".tab-legend-faq").find("li.active").next("li").text();$(".nextFAQ a").text(c),$(".tab-legend-faq").find("li:last-child").hasClass("active")?$(".nextFAQ a").text(t):$(".nextFAQ a").text(c)}),$("ul.tab-legend-faq").each(function(){var e=$(this),t=e.find("li:gt(3)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),$(".faqSection .seeLess").hide(),$(".tab-legend-faq > li").length<5&&$(".faqSection .seeMore").hide(),t.length>0&&(e.find($(".faqSection .seeMore").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tab-legend-faq").hasClass("expanded")?($(".faqSection .seeMore").hide(),$(".faqSection .seeLess").show()):($(".faqSection .seeMore").show(),$(".faqSection .seeLess").hide())})),e.find($(".faqSection .seeLess").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".faqSection").hasClass("expanded")?($(".faqSection .seeMore").hide(),$(".faqSection .seeLess").show()):($(".faqSection .seeMore").show(),$(".faqSection .seeLess").hide())})))}),$(".tabAccordion-faq").each(function(){var e=$(this),t=e.find("a.tab:gt(2)"),i=e.hasClass("mSeeMore");t[i?"show":"hide"](),$(".mSeeLess").hide(),t.length>0&&(e.find($(".mSeeMore").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tabAccordion-faq").hasClass("expanded")?($(".mSeeMore").hide(),$(".mSeeLess").show()):($(".mSeeMore").show(),$(".mSeeLess").hide())})),e.find($(".mSeeLess").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tabAccordion-faq").hasClass("expanded")?($(".mSeeMore").hide(),$(".mSeeLess").show()):($(".mSeeMore").show(),$(".mSeeLess").hide())})))})},s={init:n};s.init(),$(".tabAccordion-faq .tab").find("i").addClass("fa-plus"),$(".tabAccordion-faq .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordion-faq .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(".tabAccordion-faq .tab:first-child").trigger("click"),$(".closeFAQ").click(function(){var e=$(this).closest(".tabPanel");$(this).closest(".tabPanel").slideUp(),$(e).prev(".tabAccordion-faq .tab").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus")})}var $modallightbox={},ModalLightbox={updateModal:function(e){$modallightbox.find(".overlay-title h4").html(e.title),void 0!==e.captionTitle?$modallightbox.find(".caption-content h3").html(e.captionTitle).show():$modallightbox.find(".caption-content h3").hide(),void 0!==e.captionDescription?$modallightbox.find(".caption-content p").html(e.captionDescription).show():$modallightbox.find(".caption-content p").hide(),void 0!==!e.captionTitle&&void 0!==!e.captionDescription&&$modallightbox.find(".caption-content").hide(),$modallightbox.find(".static-content .inner").html(e.content)},applyModal:function(e){if($(window).width()>768){if($("#modal_content_"+e.id).length){var t=$("#mobile_video_"+e.id).html();t=t.replace(/"/g,"&quot;"),$("#hidden_overlay_"+e.id).val(t),$("#mobile_video_"+e.id).html(""),$modallightbox.find(".video-content").html(e.content)}else{$modallightbox.find("#lightbox").html(e.content);var i=$("#lightbox > .carousel-inner");i.find(".item").removeClass("active"),i.find('.item > img[data-id="'+e.id+'"]').parent().addClass("active")}$modallightbox.fadeIn()}$modallightbox.find(".overlay-title").on("click",function(t){ModalLightbox.resetModal(e.id),t.preventDefault()}),$(".close").on("click",function(t){ModalLightbox.resetModal(e.id),t.preventDefault()}),$(document).keyup(function(t){27===t.keyCode&&this.resetModal(e.id)})},buildModalCarousel:function(){var e=$(".modal-overlay-carousel").not(".video"),t='<div class="carousel-inner">';return e.each(function(e,i){var a,n={title:$(i).attr("data-title"),captionTitle:$(i).attr("data-caption-title"),captionDescription:$(i).attr("data-caption-description"),id:$(i).attr("data-id"),content:'<img src="'+$(i).attr("data-fullsize-image")+'" alt="'+$(i).attr("data-caption-title")+'" class="img-responsive" data-id="'+$(i).attr("data-id")+'"/>'};a=0===e?'<div class="item active">':'<div class="item">',a+='<div class="overlay-title">',a+="<h4>"+n.title+"</h4>",a+="</div>",a+=n.content,a+="</div>",t+=a}),e.length>1&&(t+='</div><a class="left carousel-control modal hidden-xs" href="#lightbox" data-slide="prev"><img class="hidden-xs arrow" src="/content/images/arrow.png" alt=""><img class="hidden-xs" src="/content/images/circle.png" alt=""></a><a class="right carousel-control modal hidden-xs" href="#lightbox" data-slide="next"><img class="hidden-xs arrow" src="/content/images/arrow.png" alt=""><img class="hidden-xs" src="/content/images/circle.png" alt=""></a>'),t},buildVideoModal:function(e){var t=$("#modal_content_"+e.id).text(),i="";return i+="<div>",i+='<div class="overlay-title">',i+="<h4>"+e.title+"</h4>",i+="</div>",i+=t,i+="</div>"},enableScroll:function(){$("html, body").css("overflow","auto")},disableScroll:function(){$("hmtl, body").css("overflow","hidden")},initModal:function(e,t){t="undefined"!=typeof t?t:"static";var i={title:e.attr("data-title"),captionTitle:e.attr("data-caption-title"),captionDescription:e.attr("data-caption-description"),content:e.attr("data-fullsize-image"),type:t,id:e.attr("data-id")};$("#modal_content_"+i.id).length?i.content=ModalLightbox.buildVideoModal(i):i.content=ModalLightbox.buildModalCarousel(),"gallery"===i.type&&$modallightbox.is(":visible")&&ModalLightbox.updateModal(i),e.on("click",function(e){$(window).width()>768?(ModalLightbox.applyModal(i),e.preventDefault()):$(window).width()<768&&"undefined"==typeof i.id&&(ModalLightbox.applyModal(i),e.preventDefault()),ModalLightbox.disableScroll()}),$(e).find("img").each(function(){this.complete?$(this).addClass("loaded"):$(this).on("load",function(){$(this).addClass("loaded")})}),$(e).find("img").length||$(e).addClass("no-image")},resetModal:function(e){$modallightbox.fadeOut(400,function(){$modallightbox.find("#lightbox").html(""),$modallightbox.find(".video-content").html("");var t=$("#hidden_overlay_"+e).val();t&&(t=t.replace("&quot;",/"/g),$("#hidden_overlay_"+e).val(""),$("#mobile_video_"+e).html(t))}),$(".modal-nav").fadeOut(),ModalLightbox.enableScroll()}};$(document).ready(function(){function e(){$modallightbox=$(".full-screen-overlay-carousel"),$(".modal-overlay-carousel").each(function(){ModalLightbox.initModal($(this))}),$modallightbox.on("click",function(e){$(e.target).hasClass("full-screen-overlay-carousel")&&(ModalLightbox.resetModal(),e.preventDefault())})}e(),$(window).resize(function(){e()})}),$(document).ready(function(){$("a.right.carousel-control.reviews").on("click",function(){var e=$(".nav-dot.filled");e.removeClass("filled");var t=e.next();if(0!==t.length)t.addClass("filled");else{var i=$(".nav-dot").first();i.addClass("filled")}}),$("a.left.carousel-control.reviews").on("click",function(){var e=$(".nav-dot.filled");e.removeClass("filled");var t=e.prev();if(0!==t.length)t.addClass("filled");else{var i=$(".nav-dot").last();i.addClass("filled")}})}),function(e){var t={elem:e(".stickySubNav"),linkElements:[],posTop:void 0,height:void 0,links:void 0,stick:function(){t.elem.addClass("sticky"),e(".inner.download .form").removeClass("hide"),e(".stickySubNav ul li a:first").hasClass("active")?(e(".stickySubNav").css("height",""),e(".stickySubNav").css("height","100px")):(e(".stickySubNav").css("height",""),e(".stickySubNav").css("height","auto"))},unstick:function(){t.elem.removeClass("sticky"),t.links.removeClass("active"),e(".inner.download .form").addClass("hide"),e(".stickySubNav").css("height","auto")},activateLink:function(i){var a=i;t.links.removeClass("active"),e(a).addClass("active")},clickHandler:function(){return t.activateLink(this),e("html,body").animate({scrollTop:e(this.hash).next().offset().top-t.height},500),!1},resetHandler:function(){var i=e(window).scrollTop();t.posTop=t.elem&&t.elem.offset()?t.elem.offset().top:0,i>=t.posTop?(t.stick(),i+=t.height):i<=t.posTop&&t.unstick(),e(t.linkElements).each(function(){this.top=this.elem.offset().top,this.bottom=this.elem.offset().top+this.elem.outerHeight(),i>=this.top-t.height&&i<=this.bottom+t.height?this.link.hasClass("active")||t.activateLink(this.link):this.link.removeClass("active")})},init:function(){t.height=t.elem.children(".inner").outerHeight(),t.links=t.elem.find("ul a"),t.elem.height(t.height),e(window).on("load",t.resetHandler),e(window).scroll(t.resetHandler),t.elem.length&&t.links.each(function(){var i=e(this),a=e(this.hash).next();i.click(t.clickHandler),a.length&&t.linkElements.push({top:a.offset().top,bottom:a.offset().top+a.outerHeight(),link:i,elem:a})}),e('a[href="#top"]').click(function(){return e("html, body").animate({scrollTop:0},"slow"),!1}),e(".firstName").hide(),e(".lastName").hide(),e("#fName").bind("focus",function(){e(".firstName").show()}),e("#fName").bind("blur",function(){e(".firstName").hide()}),e("#lName").bind("focus",function(){e(".lastName").show()}),e("#lName").bind("blur",function(){e(".lastName").hide()}),e(function(){e(".callToActionStrip input").focus(function(){e(this).prev(".callToActionStrip label.name").show()}).blur(function(){e(".callToActionStrip input").each(function(){0===e.trim(e(this).val()).length?e(this).prev(".callToActionStrip label.name").hide():e(this).prev(".callToActionStrip label.name").show()})})})}};e(t.init)}(jQuery),featuresTab(),outerTabsFunction(),function(e){e().ready(function(){function t(){var t=e(".producthero--heroimage").height(),a=e(".producthero--keyfeatures").height();a-t>0&&i.parent().css("margin-bottom",a-t+"px")}var i=e(".producthero--heroimage");i[0].complete?t():i.on("load",t),t()})}(jQuery),faqFunction(),function(e){var t={el:e(".buy-now"),link:e(".buy-now-link"),submit:e(".buy-now .submit"),URL:e(".buy-now .submit").attr("href"),products:{},init:function(){t.el.length&&(t.licenses=t.el.find(".licenses"),t.options=t.el.find(".options"),t.link.click(function(e){t.open(),e.preventDefault()}),t.el.find("header .close").click(function(e){t.close(),e.preventDefault()}),e(".buy-now").click(function(i){if(e(i.target).is(".buy-now"))return t.close(),!1}),t.initType())},initType:function(){switch(t.type=t.el.find(".inner").attr("class").replace("inner ",""),t.type){case"tier":t.initTables(),t.initInputs();break;case"seat":t.skus=t.el.find('.buttons input[type="hidden"]'),t.updateSeat(t.el.find("#quantity")),t.el.find("#quantity").blur(function(){t.updateSeat(e(this))});break;case"autoseat":break;case"serv-u mftp":t.el.find(".quantity input").on("blur input",t.updateLicense);break;case"serv-u ftp":t.options.each(function(){t.initTable(e(this),"options")}),t.el.find(".licenses + .quantity input").on("blur",t.updateLicense),t.updateLicense()}},open:function(){t.el.addClass("open")},close:function(){t.el.removeClass("open")},initTables:function(){t.licenses.each(function(){t.initTable(e(this),"licenses"),t.initQuantity()}),t.options.each(function(){t.initTable(e(this),"options")})},initTable:function(i,a){var n={rows:i.find("tr"),selected:i.find("tr.selected")};n.rows.click(function(i){e(i.target).parents("tr").hasClass("selected")&&("options"!==a||e(i.target).parents(".quantity").length||e(i.target).hasClass("quantity"))||("licenses"===a&&(n.selected.removeClass("selected"),t.submit.hasClass("disabled")&&t.submit.removeClass("disabled")),n.selected=e(this),n.selected.addClass("selected"),"options"===a&&e(i.target).is("label")||n.selected.find(".select > input").trigger("click"),"options"===a&&(e(i.target).is("input")&&!e(i.target).is(":checked")&&n.selected.removeClass("selected"),t.updateLicense()))}),"options"===a&&n.rows.find(".quantity input").on("blur",function(){t.updateLicense()})},initQuantity:function(){e('input[name="quantity"]').on("blur",function(){var i=t.legalizeValue(e(this).val());e(this).val(i),t.updateLicense()})},legalizeValue:function(e){var t=Math.floor(parseInt(e,10));return t>1?t:1},initInputs:function(){t.el.find(".select > input").on("change",t.updateLicense)},updateLicense:function(){var i,a;switch(t.type){case"tier":case"seat":case"autoseat":i=e(".licenses tr.selected .select > input"),a=e(".licenses tr.selected .select .quantity input").val();break;case"serv-u ftp":case"serv-u mftp":var n=e(".licenses tr .price input"),s=e(".licenses + .quantity input");a=parseInt(e(".quantity input").val()),n.length>1?(n.each(function(){var t=parseInt(e(this).attr("data-maxunits"),10);if(s.val()<=t)return i=e(this),e(".licenses .selected").removeClass("selected"),e(this).parents("tr").addClass("selected"),!1}),void 0===i&&(i=e(".licenses tr:last-child .price input"),s.val(i.attr("data-maxunits")))):(a=parseInt(s.val()),i=e(".licenses").find(".price input"))}t.products=[{sku:i.attr("data-sku"),qty:a}],t.updateURL()},updateSeat:function(i){var a,n=i.val();t.skus.each(function(){if(n<=parseInt(e(this).attr("data-maxunits"),10))return a=e(this).attr("data-sku"),!1}),t.products=[{sku:a,qty:n}],t.updateURL()},updateURL:function(){t.options.find('input[type="checkbox"]:checked').each(function(){t.products.push({sku:e(this).parents("tr").find(".quantity input").attr("data-sku"),qty:e(this).parents("tr").find(".quantity input").val()})});for(var i="",a="",n=0;n<t.products.length;n++)n>0&&(i+=",",a+=","),i+=t.products[n].sku,a+=t.products[n].qty,"13078"===i&&(a=1);t.submit.attr("href",t.URL+"&sku="+i+"&quantity="+a)}};e(t.init)}(jQuery);var mobileResolution=767;$(window).on("resize",function(){var e=$(".upsell-product-module").find(".image-wrapper");if(e&&1===e.length)if(window.innerWidth<mobileResolution){var t=$(".upsell-product-module").find(".subhead");t&&1===t.length&&$(e).insertAfter($(t))}else{var i=$(".upsell-product-module").find(".cta");i&&1===i.length&&$(i).prepend(e)}}).resize(),function(e){function t(){var t=e("a.install-help-btn");t.on("click",function(e){e.preventDefault()}),t.css("cursor","default"),t.css("pointer-events","none"),t.css("opacity","0.5")}function i(){var t=e("a.install-help-btn");t.off("click"),t.css("cursor","pointer"),t.css("pointer-events","auto"),t.css("opacity","1")}function a(i){var a=e(i),n=a.parent().prev().prev();n.css("position","absolute").css("right","-1000px");var s=a.parent().prev();s.show(),s.val(n.text());var l=a.parent().next();l.show(),a.hide(),t()}function n(t){var a=e(t),n=a.prev().prev();if(""===n.val())return!1;var s=a.prev().prev().prev();s.css("position","static"),n.hide(),s.text(n.val());var l=a.prev().find("a");l.show(),a.hide(),i()}e("a.install-help-selections-edit").on("click",function(e){e.preventDefault(),a(e.currentTarget)}),e("a.install-help-btn-save").on("click",function(e){e.preventDefault(),n(e.currentTarget)})}(jQuery),$(".productCard").hover(function(){$(this).addClass("hoverProdCard")},function(){$(this).removeClass("hoverProdCard")}),function(e){function t(e){var t=e.style.overflow;t&&"visible"!==t||(e.style.overflow="hidden");var i=e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight;return e.style.overflow=t,i}function i(){e(".system-requirements .requirements .requirement-text").each(function(i,a){t(a)&&e(a).find("p").css("font-size","10px")})}i(),e(window).resize(function(){i()})}(jQuery),function(e){window.Project={bindEvents:function(){},loadPlugins:function(){},initCarousels:function(){e(".fdi-Carousel .item").each(function(){var t=e(this).next();t.length||(t=e(this).siblings(":first")),t.children(":first-child").clone().appendTo(e(this)),t.next().length>0?t.next().children(":first-child").clone().appendTo(e(this)):e(this).siblings(":first").children(":first-child").clone().appendTo(e(this))});var t=e('[id*="-carousel"], [id$="-carousel"]');t.find(".item").removeClass("active"),t.each(function(t,i){e(i).find(".item").first().addClass("active")}),t.carousel(),e(".carousel").carousel({interval:0})},initLightbox:function(){e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0,arrowMarkup:'<a class="%dir% carousel-control modal hidden-xs"><img class="hidden-xs arrow mfp-prevent-close" src="/content/images/arrow.png" alt=""><img class="hidden-xs mfp-prevent-close" src="/content/images/circle.png" alt=""></a>'},image:{titleSrc:function(e){return e.el.attr("data-title")}},zoom:!1,closeMarkup:'<button class="close-icon mfp-close"><div class="mfp-close">Close</div> <img class="mfp-close" src="/content/images/close_icon_new.png"></button>'}),e(".popup-video").magnificPopup({disableOn:!0,type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title hidden-xs">Some caption</div></div>',patterns:{youtube:{index:"youtube.com/",id:function(e){var t=e.match(/[\\?\\&]v=([^\\?\\&]+)/);return t&&t[1]?t[1]:null},src:"//www.youtube.com/embed/%id%?autoplay=1"}}},callbacks:{markupParse:function(e,t,i){t.title=i.el.attr("data-title")}},closeMarkup:'<button class="close-icon mfp-close"><div class="mfp-close">Close</div> <img class="mfp-close" src="/content/images/close_icon_new.png"></button>'})},init:function(){Project.bindEvents(),Project.loadPlugins(),Project.initCarousels(),Project.initLightbox();var e=document.createElement("script");e.id="iframe-demo",e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},e(function(){Project.init()})}(jQuery),function(e){e("ul.anchorList, ol.anchorList").each(function(){var t=e(this),i=t.find("li:gt(2)"),a=e(".SeeMoreText").text(),n=e(".SeeLessText").text(),s=t.hasClass("seeMore");i[s?"show":"hide"](),i.length>0&&t.append(e('<span href="" class="seeMore learn-more-link">'+(s?n:a)+"</span>").click(function(l){s=t.hasClass("expanded"),l.preventDefault(),e(this).text(s?a:n),t.toggleClass("expanded"),i.slideToggle()}))})}(jQuery),$(function(){$(".grid").masonry({itemSelector:".grid-item",columnWidth:250,isFitWidth:!0,gutter:3}),$(".grid-item.inactive").click(function(e){e.stopPropagation(),$(".grid-item").not(this).each(function(){$(this).addClass("inactive fadeOut").removeClass("flipInY")}),$(this).removeClass("inactive").addClass("active zoomIn")}),$(".close").click(function(e){e.stopPropagation(),$(".grid-item.active.zoomIn").removeClass("active zoomIn").addClass("inactive flipInY"),$(".grid-item.fadeOut").removeClass("fadeOut")})}),function(e){function t(){var t=e(".free-tool-card"),i=t.length,a="2px solid #a1a1a1";t.each(function(){e(this).css("border-bottom",a)}),i>=0&&(i%3===0&&(e(t[i-1]).css("border-bottom","none"),e(t[i-2]).css("border-bottom","none"),e(t[i-3]).css("border-bottom","none")),i%3===1&&(e(t[i-1]).css("border-bottom","none"),e(t[i-1]).css("border-right",a).css("width","382px")),i%3===2&&(e(t[i-1]).css("border-bottom","none"),e(t[i-1]).css("border-right",a).css("width","382px"),e(t[i-2]).css("border-bottom","none")))}function i(){var t=e(".free-tool-card"),i=t.length,a="2px solid #a1a1a1";t.each(function(){e(this).css("border-bottom",a)}),i>=0&&(i%2===0&&e(t[i-1]).css("border-bottom","none"),i%2===1&&(e(t[i-1]).css("border-bottom","none"),e(t[i-1]).css("border-right",a).css("width","382px")))}function a(){var t=e(".free-tool-card"),i=t.length;i>=0&&e(t[i-1]).css("border-right","none")}function n(){e(window).width()>=1200&&t(),e(window).width()<1200&&e(window).width()>=996&&i(),e(window).width()<996&&e(window).width()>768&&a()}e(window).resize(function(){n()}),n()}(jQuery);