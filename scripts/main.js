"use strict";function updateModal(t){$modal.find(".overlay-title h4").html(t.title),void 0!==t.captionTitle?$modal.find(".caption-content h3").html(t.captionTitle).show():$modal.find(".caption-content h3").hide(),void 0!==t.captionDescription?$modal.find(".caption-content p").html(t.captionDescription).show():$modal.find(".caption-content p").hide(),void 0!==!t.captionTitle&&void 0!==!t.captionDescription&&$modal.find(".caption-content").hide(),$modal.find(".static-content .inner").html(t.content)}function modalClick(t){var e=galleries[0];"next"===t?(e.currentModal=findNext(e.currentModal,e.thumbs),initModal(e.currentModal.find("a"),"gallery")):"prev"===t&&(e.currentModal=findPrev(e.currentModal,e.thumbs),initModal(e.currentModal.find("a"),"gallery"))}function applyModal(t){$modal.find(".overlay-title h4").html(t.title),t.captionTitle.length?$modal.find(".caption-content h3").html(t.captionTitle):$modal.find(".caption-content h3").hide(),t.captionDescription.length?$modal.find(".caption-content p").html(t.captionDescription):$modal.find(".caption-content p").hide(),t.captionTitle.length||t.captionDescription.length||$modal.find(".caption-content").hide(),$modal.find(".static-content .inner").html(t.content),$(document).off(".navigategallery"),"gallery"===t.type&&($(".modal-nav").fadeIn(),$(".modal-nav").find(".next").click(function(t){modalClick("next"),t.preventDefault()}),$(".modal-nav").find(".prev").click(function(t){modalClick("prev"),t.preventDefault()}),$(document).on("keyup.navigategallery",{type:"modal"},function(t){keyHandler(t)})),$modal.fadeIn()}function initModal(t,e){e="undefined"!=typeof e?e:"static";var i={title:t.attr("data-title"),captionTitle:t.attr("data-caption-title"),captionDescription:t.attr("data-caption-description"),content:t.attr("data-fullsize-image"),type:e,id:t.attr("data-id")};$("#modal_content_"+i.id).length?i.content=$("#modal_content_"+i.id).text():i.content='<img src="'+i.content+'" alt="'+i.captionTitle+'"/>',"gallery"===i.type&&$modal.is(":visible")&&updateModal(i),t.on("click",function(t){applyModal(i),t.preventDefault()}),$(t).find("img").each(function(){this.complete?$(this).addClass("loaded"):$(this).on("load",function(){$(this).addClass("loaded")})}),$(t).find("img").length||$(t).addClass("no-image")}function resetModal(){$modal.fadeOut(400,function(){$modal.find(".caption-content").show().find("h3").show().siblings("p").show(),$modal.find(".static-content .inner").html("")}),$(".modal-nav").fadeOut(),$(document).off(".navigategallery"),$(document).on("keyup.navigategallery",{type:"gallery",index:0},function(t){keyHandler(t)})}var $modallightbox={},ModalLightbox={updateModal:function(t){$modallightbox.find(".overlay-title h4").html(t.title),void 0!==t.captionTitle?$modallightbox.find(".caption-content h3").html(t.captionTitle).show():$modallightbox.find(".caption-content h3").hide(),void 0!==t.captionDescription?$modallightbox.find(".caption-content p").html(t.captionDescription).show():$modallightbox.find(".caption-content p").hide(),void 0!==!t.captionTitle&&void 0!==!t.captionDescription&&$modallightbox.find(".caption-content").hide(),$modallightbox.find(".static-content .inner").html(t.content)},applyModal:function(t){$modallightbox.find("#lightbox").html(t.content),$modallightbox.fadeIn(),$modallightbox.find(".overlay-title").on("click",function(t){ModalLightbox.resetModal(),t.preventDefault()}),$(".close").on("click",function(t){ModalLightbox.resetModal(),t.preventDefault()}),$(document).keyup(function(t){27===t.keyCode&&this.resetModal()})},buildModalCarousel:function(){var t=$(".modal-overlay-carousel"),e='<div class="carousel-inner">';return t.each(function(t,i){var n,a={title:$(i).attr("data-title"),captionTitle:$(i).attr("data-caption-title"),captionDescription:$(i).attr("data-caption-description"),id:$(i).attr("data-id"),content:'<img src="'+$(i).attr("data-fullsize-image")+'" alt="'+$(i).attr("data-caption-title")+'" class="img-responsive"/>'};n=0===t?'<div class="item active">':'<div class="item">',n+='<div class="overlay-title">',n+="<h4>"+a.title+"</h4>",n+="",n+="</div>",n+=a.content,n+="</div>",e+=n}),e+='</div><a class="left carousel-control modal hidden-xs" href="#lightbox" data-slide="prev"><img class="hidden-xs arrow" src="../images/arrow.png" alt=""><img class="hidden-xs" src="../images/circle.png" alt=""></a><a class="right carousel-control modal hidden-xs" href="#lightbox" data-slide="next"><img class="hidden-xs arrow" src="../images/arrow.png" alt=""><img class="hidden-xs" src="../images/circle.png" alt=""></a>'},initModal:function(t,e){e="undefined"!=typeof e?e:"static";var i={title:t.attr("data-title"),captionTitle:t.attr("data-caption-title"),captionDescription:t.attr("data-caption-description"),content:t.attr("data-fullsize-image"),type:e,id:t.attr("data-id")};$("#modal_content_"+i.id).length?i.content=$("#modal_content_"+i.id).text():i.content=ModalLightbox.buildModalCarousel(),"gallery"===i.type&&$modallightbox.is(":visible")&&ModalLightbox.updateModal(i),t.on("click",function(t){ModalLightbox.applyModal(i),t.preventDefault()}),$(t).find("img").each(function(){this.complete?$(this).addClass("loaded"):$(this).on("load",function(){$(this).addClass("loaded")})}),$(t).find("img").length||$(t).addClass("no-image")},resetModal:function(){$modallightbox.fadeOut(400,function(){$modallightbox.find(".caption-content").show().find("h3").show().siblings("p").show(),$modallightbox.find(".static-content .inner").html("")}),$(".modal-nav").fadeOut()}};$(document).ready(function(){$modallightbox=$(".full-screen-overlay-carousel"),$(".modal-overlay-carousel").each(function(){ModalLightbox.initModal($(this))}),$modallightbox.on("click",function(t){$(t.target).hasClass("full-screen-overlay-carousel")&&(ModalLightbox.resetModal(),t.preventDefault())})});var $modal={};$(document).ready(function(){$modal=$(".full-screen-overlay"),$(".modal-overlay").each(function(){initModal($(this))}),$modal.on("click",function(t){$(t.target).hasClass("full-screen-overlay")&&(resetModal(),t.preventDefault())}),$modal.find(".overlay-title").on("click",function(t){resetModal(),t.preventDefault()}),$(document).keyup(function(t){27===t.keyCode&&resetModal()})}),$(document).ready(function(){$("a.right.carousel-control.reviews").on("click",function(){var t=$(".nav-dot.filled");t.removeClass("filled");var e=t.next();if(0!==e.length)e.addClass("filled");else{var i=$(".nav-dot").first();i.addClass("filled")}}),$("a.left.carousel-control.reviews").on("click",function(){var t=$(".nav-dot.filled");t.removeClass("filled");var e=t.prev();if(0!==e.length)e.addClass("filled");else{var i=$(".nav-dot").last();i.addClass("filled")}})}),function(t){var e={elem:t(".stickySubNav"),linkElements:[],posTop:void 0,height:void 0,links:void 0,stick:function(){e.elem.addClass("sticky"),t(".inner.download .form").removeClass("hide")},unstick:function(){e.elem.removeClass("sticky"),e.links.removeClass("active"),t(".inner.download .form").addClass("hide")},activateLink:function(i){var n=i;e.links.removeClass("active"),t(n).addClass("active")},clickHandler:function(){return e.activateLink(this),t("html,body").animate({scrollTop:t(this.hash).next().offset().top-e.height},500),!1},resetHandler:function(){var i=t(window).scrollTop();e.posTop=e.elem&&e.elem.offset()?e.elem.offset().top:0,i>=e.posTop?(e.stick(),i+=e.height):i<=e.posTop&&e.unstick(),t(e.linkElements).each(function(){this.top=this.elem.offset().top,this.bottom=this.elem.offset().top+this.elem.outerHeight(),i>=this.top-e.height&&i<=this.bottom+e.height?this.link.hasClass("active")||e.activateLink(this.link):this.link.removeClass("active")})},init:function(){e.height=e.elem.children(".inner").outerHeight(),e.links=e.elem.find("ul a"),e.elem.height(e.height),t(window).on("load",e.resetHandler),t(window).scroll(e.resetHandler),e.elem.length&&e.links.each(function(){var i=t(this),n=t(this.hash).next();i.click(e.clickHandler),n.length&&e.linkElements.push({top:n.offset().top,bottom:n.offset().top+n.outerHeight(),link:i,elem:n})}),t('a[href="#top"]').click(function(){return t("html, body").animate({scrollTop:0},"slow"),!1}),t(".firstName").hide(),t(".lastName").hide(),t("#fName").bind("focus",function(){t(".firstName").addClass("show")}),t("#fName").bind("blur",function(){t(".firstName").removeClass("show")}),t("#lName").bind("focus",function(){t(".lastName").addClass("show")}),t("#lName").bind("blur",function(){t(".lastName").removeClass("show")})}};t(e.init)}(jQuery);var hideTabs=function(t,e){$(t).hide().removeClass("active"),e&&e()},showTab=function(t){var e=t.index();hideTabs($(".tab-content .active")),$(".tab-legend .active").removeClass("active").addClass("inactive"),$(".tab-legend > li").eq(e).removeClass("inactive").addClass("active"),$(".tab-content > li").eq(e).show().addClass("active")},constructTab=function(t){var e=$(t).find(".tab-content > li");$.each(e,function(){hideTabs(this)});var i=$(".tab-legend .active").length?$(".tab-legend .active"):$(".tab-legend > li:first-child");showTab(i)},tabController=function(t){var e=$(t).find(".tab-legend li");$.each(e,function(){$(this).on("click",function(){var t=$(this);showTab(t)})})},init=function(){var t=$(".tab");$.each(t,function(){constructTab(this),tabController(this)});var e=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(e),$(".tab-legend").click(function(){e=$(".tab-legend").find("li.active").next("li").text(),$(".nextFeature a").text(e)}),$("#nextFeature").click(function(t){t.preventDefault();var e=$(".tab-legend").find("li.active");$(e).removeClass("active").next("li").addClass("active");var i=$(".tab-content").find("li.active");$(i).hide().removeClass("active").next("li").show().addClass("active");var n=$(".tab-legend").find("li.active").next("li").text();$(".nextFeature a").text(n)}),$("ul.tab-legend").each(function(){var t=$(this),e=t.find("li:gt(4)"),i=t.hasClass("seeMore");e[i?"show":"hide"](),e.length>0&&t.append($('<span href="" class="seeMore">'+(i?"See Less Features -":"See More Features +")+"</span>").click(function(n){i=t.hasClass("expanded"),n.preventDefault(),$(this).text(i?"See More Features +":"See Less Features -"),t.toggleClass("expanded"),e.slideToggle()}))})},tabModule={init:init};tabModule.init(),$(".tabAccordion .tab").find("i").addClass("fa-plus"),$(".tabAccordion .tab").click(function(){var t=!$(this).next().is(":visible");$(this).siblings(".tab.active").removeClass("active").find("i").removeClass("fa-minus").addClass("fa-plus"),$(this).toggleClass("active",t).find("i").toggleClass("fa-minus",t),$(".tabAccordion .tabPanel").slideUp(),t&&$(this).next().slideDown()}),$(".tabAccordion .tab:first-child").trigger("click"),$(".outerTabs li.tab-link").click(function(){var t=$(this).attr("data-tab");$(".outerTabs li.tab-link").removeClass("current"),$(".tabOuterContent").removeClass("current"),$(this).addClass("current"),$("#"+t).addClass("current")}),function(t){var e={el:t(".buy-now"),link:t(".buy-now-link"),submit:t(".buy-now .submit"),URL:t(".buy-now .submit").attr("href"),products:{},init:function(){e.el.length&&(e.licenses=e.el.find(".licenses"),e.options=e.el.find(".options"),e.link.click(function(t){e.open(),t.preventDefault()}),e.el.find("header .close").click(function(t){e.close(),t.preventDefault()}),t(".buy-now").click(function(i){if(t(i.target).is(".buy-now"))return e.close(),!1}),e.initType())},initType:function(){switch(e.type=e.el.find(".inner").attr("class").replace("inner ",""),e.type){case"tier":e.initTables(),e.initInputs();break;case"seat":e.skus=e.el.find('.buttons input[type="hidden"]'),e.updateSeat(e.el.find("#quantity")),e.el.find("#quantity").blur(function(){e.updateSeat(t(this))});break;case"autoseat":break;case"serv-u mftp":e.el.find(".quantity input").on("blur input",e.updateLicense);break;case"serv-u ftp":e.options.each(function(){e.initTable(t(this),"options")}),e.el.find(".licenses + .quantity input").on("blur",e.updateLicense),e.updateLicense()}},open:function(){e.el.addClass("open")},close:function(){e.el.removeClass("open")},initTables:function(){e.licenses.each(function(){e.initTable(t(this),"licenses"),e.initQuantity()}),e.options.each(function(){e.initTable(t(this),"options")})},initTable:function(i,n){var a={rows:i.find("tr"),selected:i.find("tr.selected")};a.rows.click(function(i){t(i.target).parents("tr").hasClass("selected")&&("options"!==n||t(i.target).parents(".quantity").length||t(i.target).hasClass("quantity"))||("licenses"===n&&(a.selected.removeClass("selected"),e.submit.hasClass("disabled")&&e.submit.removeClass("disabled")),a.selected=t(this),a.selected.addClass("selected"),"options"===n&&t(i.target).is("label")||a.selected.find(".select > input").trigger("click"),"options"===n&&(t(i.target).is("input")&&!t(i.target).is(":checked")&&a.selected.removeClass("selected"),e.updateLicense()))}),"options"===n&&a.rows.find(".quantity input").on("blur",function(){e.updateLicense()})},initQuantity:function(){t('input[name="quantity"]').on("blur",function(){var i=e.legalizeValue(t(this).val());t(this).val(i),e.updateLicense()})},legalizeValue:function(t){var e=Math.floor(parseInt(t,10));return e>1?e:1},initInputs:function(){e.el.find(".select > input").on("change",e.updateLicense)},updateLicense:function(){var i,n;switch(e.type){case"tier":case"seat":case"autoseat":i=t(".licenses tr.selected .select > input"),n=t(".licenses tr.selected .select .quantity input").val();break;case"serv-u ftp":case"serv-u mftp":var a=t(".licenses tr .price input"),l=t(".licenses + .quantity input");n=parseInt(t(".quantity input").val()),a.length>1?(a.each(function(){var e=parseInt(t(this).attr("data-maxunits"),10);if(l.val()<=e)return i=t(this),t(".licenses .selected").removeClass("selected"),t(this).parents("tr").addClass("selected"),!1}),void 0===i&&(i=t(".licenses tr:last-child .price input"),l.val(i.attr("data-maxunits")))):(n=parseInt(l.val()),i=t(".licenses").find(".price input"))}e.products=[{sku:i.attr("data-sku"),qty:n}],e.updateURL()},updateSeat:function(i){var n,a=i.val();e.skus.each(function(){if(a<=parseInt(t(this).attr("data-maxunits"),10))return n=t(this).attr("data-sku"),!1}),e.products=[{sku:n,qty:a}],e.updateURL()},updateURL:function(){e.options.find('input[type="checkbox"]:checked').each(function(){e.products.push({sku:t(this).parents("tr").find(".quantity input").attr("data-sku"),qty:t(this).parents("tr").find(".quantity input").val()})});for(var i="",n="",a=0;a<e.products.length;a++)a>0&&(i+=",",n+=","),i+=e.products[a].sku,n+=e.products[a].qty,"13078"===i&&(n=1);e.submit.attr("href",e.URL+"&sku="+i+"&quantity="+n)}};t(e.init)}(jQuery),function(t){window.Project={bindEvents:function(){},loadPlugins:function(){},initCarousels:function(){t(".fdi-Carousel .item").each(function(){var e=t(this).next();e.length||(e=t(this).siblings(":first")),e.children(":first-child").clone().appendTo(t(this)),e.next().length>0?e.next().children(":first-child").clone().appendTo(t(this)):t(this).siblings(":first").children(":first-child").clone().appendTo(t(this))})},init:function(){Project.bindEvents(),Project.loadPlugins(),Project.initCarousels()}},t(function(){Project.init()})}(jQuery);