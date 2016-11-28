"use strict";function featuresTab(){var e=function(e,t){$(e).hide().removeClass("active"),t&&t()},t=function(t){var i=t.index();e($(".tab-content .active")),$(".tab-legend .active").removeClass("active").addClass("inactive"),$(".tab-legend > li").eq(i).removeClass("inactive").addClass("active"),$(".tab-content > li").eq(i).show().addClass("active")},i=function(i){var a=$(i).find(".tab-content > li");$.each(a,function(){e(this)});var n=$(".tab-legend .active").length?$(".tab-legend .active"):$(".tab-legend > li:first-child");t(n)},a=function(e){var i=$(e).find(".tab-legend li");$.each(i,function(){$(this).on("click",function(){var e=$(this);t(e),$(".tab-legend li").last().hasClass("active")?$(".nextFeature").hide():$(".nextFeature").show()})})},n=function(){var e=$(".tab");$.each(e,function(){i(this),a(this)});var t=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(t),$(".tab-legend").click(function(){t=$(".tab-legend").find("li.active").next("li").text(),$(".nextFeature a").text(t)}),$("#nextFeature").click(function(e){e.preventDefault();var t=$(".tab-legend").find("li.active");$(t).removeClass("active current").next("li").addClass("active");var i=$(".tab-content").find("li.active");$(i).hide().removeClass("active").next("li").show().addClass("active");var a=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(a)}),$("ul.tab-legend.features").each(function(){var e=$(this),t=e.find("li:gt(4)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),t.length>0&&e.append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),e.toggleClass("expanded"),t.slideToggle()}))})},s={init:n};s.init(),$(".tabAccordion .tab").find("i").addClass("fa-plus"),$(".tabAccordion .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordion .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(".tabAccordion .tab:first-child").trigger("click")}function outerTabsFunction(){jQuery("ul.tabs").each(function(){var e,t,i=jQuery(this).find("a");e=jQuery(i.filter('[href="'+location.hash+'"]')[0]||i[0]),e.parent().addClass("active"),t=$(e[0].hash),i.not(e).each(function(){jQuery(this.hash).hide()}),jQuery(this).on("click","a",function(i){e.parent().removeClass("active"),t.hide(),e=jQuery(this),t=jQuery(this.hash),e.parent().addClass("active"),t.show(),i.preventDefault()})}),$(".tabAccordionBundle").each(function(){var e=$(this),t=e.find("a.tab:gt(2)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),t.length>0&&e.append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),e.toggleClass("expanded"),t.slideToggle()}))});var e=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active").next("li").text();$(".nextFeatureBundle a").text(e),$(".tab-legend-bundle").click(function(){e=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active").next("li").text(),$(".nextFeatureBundle a").text(e)}),$("#nextFeatureBundle").click(function(e){e.preventDefault();var t=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active");$(t).removeClass("active current").next("li").addClass("active");var i=$(".contentBundleWrap:visible .tab-content-bundle").find("li.active");$(i).hide().removeClass("active").next("li").show().addClass("active");var a=$(".contentBundleWrap:visible .tab-legend-bundle").find("li.active").next("li").text();$(".nextFeatureBundle a").text(a)}),$(".tabAccordionBundle .tab").find("i").addClass("fa-plus"),$(".tabAccordionBundle .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordionBundle .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(".tabAccordionBundle .tab:first-child").trigger("click")}function faqFunction(){var e=function(e,t){$(e).hide().removeClass("active"),t&&t()},t=function(t){var i=t.index();e($(".tab-content-faq .active")),$(".tab-legend-faq .active").removeClass("active").addClass("inactive"),$(".tab-legend-faq > li").eq(i).removeClass("inactive").addClass("active"),$(".tab-content-faq > li").eq(i).show().addClass("active")},i=function(i){var a=$(i).find(".tab-content-faq > li");$.each(a,function(){e(this)});var n=$(".tab-legend-faq .active").length?$(".tab-legend-faq .active"):$(".tab-legend-faq > li:first-child");t(n)},a=function(e){var i=$(e).find(".tab-legend-faq li");$.each(i,function(){$(this).on("click",function(){var e=$(this);t(e)})})},n=function(){var e=$(".tab");$.each(e,function(){i(this),a(this)});var t=$(".tab-legend-faq").find("li.active").next("li").text();$(".nextFAQ a").text(t),$(".tab-legend-faq").click(function(){t=$(".tab-legend-faq").find("li.active").next("li").text(),$(".nextFAQ a").text(t)}),$("#nextFeatureFaq").click(function(e){e.preventDefault();var t=$(".tab-legend-faq").find("li.active");$(t).removeClass("active current").next("li").addClass("active");var i=$(".tab-content-faq").find("li.active");$(i).hide().removeClass("active").next("li").show().addClass("active");var a=$(".tab-legend-faq").find("li.active").next("li").text();$(".nextFAQ a").text(a)}),$("ul.tab-legend-faq").each(function(){var e=$(this),t=e.find("li:gt(3)"),i=e.hasClass("seeMore");t[i?"show":"hide"](),$(".faqSection .seeLess").hide(),t.length>0&&(e.find($(".seeMore").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tab-legend-faq").hasClass("expanded")?($(".faqSection .seeMore").hide(),$(".faqSection .seeLess").show()):($(".faqSection .seeMore").show(),$(".faqSection .seeLess").hide())})),e.find($(".seeLess").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".faqSection").hasClass("expanded")?($(".faqSection .seeMore").hide(),$(".faqSection .seeLess").show()):($(".faqSection .seeMore").show(),$(".faqSection .seeLess").hide())})))}),$(".tabAccordion-faq").each(function(){var e=$(this),t=e.find("a.tab:gt(2)"),i=e.hasClass("mSeeMore");t[i?"show":"hide"](),$(".mSeeLess").hide(),t.length>0&&(e.find($(".mSeeMore").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tabAccordion-faq").hasClass("expanded")?($(".mSeeMore").hide(),$(".mSeeLess").show()):($(".mSeeMore").show(),$(".mSeeLess").hide())})),e.find($(".mSeeLess").click(function(a){i=e.hasClass("expanded"),a.preventDefault(),e.toggleClass("expanded"),t.slideToggle(),$(".tabAccordion-faq").hasClass("expanded")?($(".mSeeMore").hide(),$(".mSeeLess").show()):($(".mSeeMore").show(),$(".mSeeLess").hide())})))})},s={init:n};s.init(),$(".tabAccordion-faq .tab").find("i").addClass("fa-plus"),$(".tabAccordion-faq .tab").click(function(){var e=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",e).find("i").toggleClass("fa-minus",e),$(".tabAccordion-faq .tabPanel").slideUp(),e&&$(this).next().slideDown()}),$(".tabAccordion-faq .tab:first-child").trigger("click")}function regForm(){$("#registrationForm").validate({rules:{firstName:{required:!0},lastName:{required:!0},company:{required:!0},email:{required:!0,email:!0},phone:{required:!1}},messages:{firstName:{required:"First Name is required."},lastName:{required:"Last Name is required."},company:{required:"Company name is required."},email:{required:"Email Address is required."},phone:{}}})}var $modallightbox={},ModalLightbox={updateModal:function(e){$modallightbox.find(".overlay-title h4").html(e.title),void 0!==e.captionTitle?$modallightbox.find(".caption-content h3").html(e.captionTitle).show():$modallightbox.find(".caption-content h3").hide(),void 0!==e.captionDescription?$modallightbox.find(".caption-content p").html(e.captionDescription).show():$modallightbox.find(".caption-content p").hide(),void 0!==!e.captionTitle&&void 0!==!e.captionDescription&&$modallightbox.find(".caption-content").hide(),$modallightbox.find(".static-content .inner").html(e.content)},applyModal:function(e){$("#modal_content_"+e.id).length?$modallightbox.find(".video-content").html(e.content):$modallightbox.find("#lightbox").html(e.content),$modallightbox.fadeIn(),$modallightbox.find(".overlay-title").on("click",function(e){ModalLightbox.resetModal(),e.preventDefault()}),$(".close").on("click",function(e){ModalLightbox.resetModal(),e.preventDefault()}),$(document).keyup(function(e){27===e.keyCode&&this.resetModal()})},buildModalCarousel:function(){var e=$(".modal-overlay-carousel").not(".video"),t='<div class="carousel-inner">';return e.each(function(e,i){var a,n={title:$(i).attr("data-title"),captionTitle:$(i).attr("data-caption-title"),captionDescription:$(i).attr("data-caption-description"),id:$(i).attr("data-id"),content:'<img src="'+$(i).attr("data-fullsize-image")+'" alt="'+$(i).attr("data-caption-title")+'" class="img-responsive"/>'};a=0===e?'<div class="item active">':'<div class="item">',a+='<div class="overlay-title">',a+="<h4>"+n.title+"</h4>",a+="</div>",a+=n.content,a+="</div>",t+=a}),e.length>1&&(t+='</div><a class="left carousel-control modal hidden-xs" href="#lightbox" data-slide="prev"><img class="hidden-xs arrow" src="/content/images/arrow.png" alt=""><img class="hidden-xs" src="/content/images/circle.png" alt=""></a><a class="right carousel-control modal hidden-xs" href="#lightbox" data-slide="next"><img class="hidden-xs arrow" src="/content/images/arrow.png" alt=""><img class="hidden-xs" src="/content/images/circle.png" alt=""></a>'),t},buildVideoModal:function(e){var t=$("#modal_content_"+e.id).text(),i="";return i+="<div>",i+='<div class="overlay-title">',i+="<h4>"+e.title+"</h4>",i+="</div>",i+=t,i+="</div>"},enableScroll:function(){$("html, body").css("overflow","auto")},disableScroll:function(){$("hmtl, body").css("overflow","hidden")},initModal:function(e,t){t="undefined"!=typeof t?t:"static";var i={title:e.attr("data-title"),captionTitle:e.attr("data-caption-title"),captionDescription:e.attr("data-caption-description"),content:e.attr("data-fullsize-image"),type:t,id:e.attr("data-id")};$("#modal_content_"+i.id).length?i.content=ModalLightbox.buildVideoModal(i):i.content=ModalLightbox.buildModalCarousel(),"gallery"===i.type&&$modallightbox.is(":visible")&&ModalLightbox.updateModal(i),e.on("click",function(e){$(window).width()>768?(ModalLightbox.applyModal(i),e.preventDefault()):$(window).width()<768&&"undefined"==typeof i.id&&(ModalLightbox.applyModal(i),e.preventDefault()),ModalLightbox.disableScroll()}),$(e).find("img").each(function(){this.complete?$(this).addClass("loaded"):$(this).on("load",function(){$(this).addClass("loaded")})}),$(e).find("img").length||$(e).addClass("no-image")},resetModal:function(){$modallightbox.fadeOut(400,function(){$modallightbox.find("#lightbox").html(""),$modallightbox.find(".video-content").html("")}),$(".modal-nav").fadeOut(),ModalLightbox.enableScroll()}};$(document).ready(function(){$modallightbox=$(".full-screen-overlay-carousel"),$(".modal-overlay-carousel").each(function(){ModalLightbox.initModal($(this))}),$modallightbox.on("click",function(e){$(e.target).hasClass("full-screen-overlay-carousel")&&(ModalLightbox.resetModal(),e.preventDefault())})}),$(document).ready(function(){$("a.right.carousel-control.reviews").on("click",function(){var e=$(".nav-dot.filled");e.removeClass("filled");var t=e.next();if(0!==t.length)t.addClass("filled");else{var i=$(".nav-dot").first();i.addClass("filled")}}),$("a.left.carousel-control.reviews").on("click",function(){var e=$(".nav-dot.filled");e.removeClass("filled");var t=e.prev();if(0!==t.length)t.addClass("filled");else{var i=$(".nav-dot").last();i.addClass("filled")}})}),function(e){var t={elem:e(".stickySubNav"),linkElements:[],posTop:void 0,height:void 0,links:void 0,stick:function(){t.elem.addClass("sticky"),e(".inner.download .form").removeClass("hide"),e(".stickySubNav").css("height","120px")},unstick:function(){t.elem.removeClass("sticky"),t.links.removeClass("active"),e(".inner.download .form").addClass("hide"),e(".stickySubNav").css("height","auto")},activateLink:function(i){var a=i;t.links.removeClass("active"),e(a).addClass("active")},clickHandler:function(){return t.activateLink(this),e("html,body").animate({scrollTop:e(this.hash).next().offset().top-t.height},500),!1},resetHandler:function(){var i=e(window).scrollTop();t.posTop=t.elem&&t.elem.offset()?t.elem.offset().top:0,i>=t.posTop?(t.stick(),i+=t.height):i<=t.posTop&&t.unstick(),e(t.linkElements).each(function(){this.top=this.elem.offset().top,this.bottom=this.elem.offset().top+this.elem.outerHeight(),i>=this.top-t.height&&i<=this.bottom+t.height?this.link.hasClass("active")||t.activateLink(this.link):this.link.removeClass("active")})},init:function(){t.height=t.elem.children(".inner").outerHeight(),t.links=t.elem.find("ul a"),t.elem.height(t.height),e(window).on("load",t.resetHandler),e(window).scroll(t.resetHandler),t.elem.length&&t.links.each(function(){var i=e(this),a=e(this.hash).next();i.click(t.clickHandler),a.length&&t.linkElements.push({top:a.offset().top,bottom:a.offset().top+a.outerHeight(),link:i,elem:a})}),e('a[href="#top"]').click(function(){return e("html, body").animate({scrollTop:0},"slow"),!1}),e(".firstName").hide(),e(".lastName").hide(),e("#fName").bind("focus",function(){e(".firstName").show()}),e("#fName").bind("blur",function(){e(".firstName").hide()}),e("#lName").bind("focus",function(){e(".lastName").show()}),e("#lName").bind("blur",function(){e(".lastName").hide()})}};e(t.init)}(jQuery),featuresTab(),outerTabsFunction(),faqFunction(),function(e){var t={el:e(".buy-now"),link:e(".buy-now-link"),submit:e(".buy-now .submit"),URL:e(".buy-now .submit").attr("href"),products:{},init:function(){t.el.length&&(t.licenses=t.el.find(".licenses"),t.options=t.el.find(".options"),t.link.click(function(e){t.open(),e.preventDefault()}),t.el.find("header .close").click(function(e){t.close(),e.preventDefault()}),e(".buy-now").click(function(i){if(e(i.target).is(".buy-now"))return t.close(),!1}),t.initType())},initType:function(){switch(t.type=t.el.find(".inner").attr("class").replace("inner ",""),t.type){case"tier":t.initTables(),t.initInputs();break;case"seat":t.skus=t.el.find('.buttons input[type="hidden"]'),t.updateSeat(t.el.find("#quantity")),t.el.find("#quantity").blur(function(){t.updateSeat(e(this))});break;case"autoseat":break;case"serv-u mftp":t.el.find(".quantity input").on("blur input",t.updateLicense);break;case"serv-u ftp":t.options.each(function(){t.initTable(e(this),"options")}),t.el.find(".licenses + .quantity input").on("blur",t.updateLicense),t.updateLicense()}},open:function(){t.el.addClass("open")},close:function(){t.el.removeClass("open")},initTables:function(){t.licenses.each(function(){t.initTable(e(this),"licenses"),t.initQuantity()}),t.options.each(function(){t.initTable(e(this),"options")})},initTable:function(i,a){var n={rows:i.find("tr"),selected:i.find("tr.selected")};n.rows.click(function(i){e(i.target).parents("tr").hasClass("selected")&&("options"!==a||e(i.target).parents(".quantity").length||e(i.target).hasClass("quantity"))||("licenses"===a&&(n.selected.removeClass("selected"),t.submit.hasClass("disabled")&&t.submit.removeClass("disabled")),n.selected=e(this),n.selected.addClass("selected"),"options"===a&&e(i.target).is("label")||n.selected.find(".select > input").trigger("click"),"options"===a&&(e(i.target).is("input")&&!e(i.target).is(":checked")&&n.selected.removeClass("selected"),t.updateLicense()))}),"options"===a&&n.rows.find(".quantity input").on("blur",function(){t.updateLicense()})},initQuantity:function(){e('input[name="quantity"]').on("blur",function(){var i=t.legalizeValue(e(this).val());e(this).val(i),t.updateLicense()})},legalizeValue:function(e){var t=Math.floor(parseInt(e,10));return t>1?t:1},initInputs:function(){t.el.find(".select > input").on("change",t.updateLicense)},updateLicense:function(){var i,a;switch(t.type){case"tier":case"seat":case"autoseat":i=e(".licenses tr.selected .select > input"),a=e(".licenses tr.selected .select .quantity input").val();break;case"serv-u ftp":case"serv-u mftp":var n=e(".licenses tr .price input"),s=e(".licenses + .quantity input");a=parseInt(e(".quantity input").val()),n.length>1?(n.each(function(){var t=parseInt(e(this).attr("data-maxunits"),10);if(s.val()<=t)return i=e(this),e(".licenses .selected").removeClass("selected"),e(this).parents("tr").addClass("selected"),!1}),void 0===i&&(i=e(".licenses tr:last-child .price input"),s.val(i.attr("data-maxunits")))):(a=parseInt(s.val()),i=e(".licenses").find(".price input"))}t.products=[{sku:i.attr("data-sku"),qty:a}],t.updateURL()},updateSeat:function(i){var a,n=i.val();t.skus.each(function(){if(n<=parseInt(e(this).attr("data-maxunits"),10))return a=e(this).attr("data-sku"),!1}),t.products=[{sku:a,qty:n}],t.updateURL()},updateURL:function(){t.options.find('input[type="checkbox"]:checked').each(function(){t.products.push({sku:e(this).parents("tr").find(".quantity input").attr("data-sku"),qty:e(this).parents("tr").find(".quantity input").val()})});for(var i="",a="",n=0;n<t.products.length;n++)n>0&&(i+=",",a+=","),i+=t.products[n].sku,a+=t.products[n].qty,"13078"===i&&(a=1);t.submit.attr("href",t.URL+"&sku="+i+"&quantity="+a)}};e(t.init)}(jQuery);var mobileResolution=767;$(window).on("resize",function(){var e=$(".upsell-product-module").find(".image-wrapper");if(e&&1===e.length)if(window.innerWidth<mobileResolution){var t=$(".upsell-product-module").find(".subhead");t&&1===t.length&&$(e).insertAfter($(t))}else{var i=$(".upsell-product-module").find(".cta");i&&1===i.length&&$(i).prepend(e)}}).resize(),regForm(),function(e){e("a.install-help-selections-edit").on("click",function(t){t.preventDefault();var i=e(t.currentTarget),a=i.parent().prev().find("label");a.css("position","absolute").css("right","-1000px");var n=i.parent().prev().find('input[type="text"]');n.show(),n.val(a.text());var s=i.parent().next();s.show(),i.hide();var l=e("a.install-help-btn");l.on("click",function(e){e.preventDefault()}),l.css("cursor","default"),l.css("pointer-events","none"),l.css("opacity","0.5")}),e("a.install-help-btn-save").on("click",function(t){t.preventDefault();var i=e(t.currentTarget),a=i.prev().prev().find("label");a.css("position","static");var n=i.prev().prev().find('input[type="text"]');n.hide(),a.text(n.val());var s=i.prev().find("a");s.show(),i.hide();var l=e("a.install-help-btn");l.off("click"),l.css("cursor","pointer"),l.css("pointer-events","auto"),l.css("opacity","1")})}(jQuery),$(".productCard").hover(function(){$(".productCard").addClass("hoverProdCard")},function(){$(".productCard").removeClass("hoverProdCard")}),function(e){window.Project={bindEvents:function(){},loadPlugins:function(){},initCarousels:function(){e(".fdi-Carousel .item").each(function(){var t=e(this).next();t.length||(t=e(this).siblings(":first")),t.children(":first-child").clone().appendTo(e(this)),t.next().length>0?t.next().children(":first-child").clone().appendTo(e(this)):e(this).siblings(":first").children(":first-child").clone().appendTo(e(this))});var t=e('[id*="-carousel"], [id$="-carousel"]');t.find(".item").removeClass("active"),t.each(function(t,i){e(i).find(".item").first().addClass("active")}),t.carousel(),e(".carousel").carousel({interval:0})},init:function(){Project.bindEvents(),Project.loadPlugins(),Project.initCarousels();var e=document.createElement("script");e.id="iframe-demo",e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},e(function(){Project.init()})}(jQuery);