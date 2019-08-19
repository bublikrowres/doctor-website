function picDisplay(elem) {

    let mod = document.querySelector('#galery1');
    mod.setAttribute('src', elem.src);
    let descripLocation = document.querySelector('#galeryItemDescription');
    descripLocation.innerHTML = elem.title;
    let titleLocation = document.querySelector('#galeryItemTitle');
    titleLocation.innerHTML = elem.alt;


}

function change() {
    var el = document.querySelector('#inputGroupSelect').value;
    var where = document.querySelector('#gogoLink').href = '#' + el;
}

function modalImgDisplay(elem) {
    var img = document.querySelector('#modalImgDisplayLocation');
    img.src = elem.src;

    $('.modalGallery').modal('show');


}

function closeWindow() {
    $('.modalGallery').modal('hide');
}


//old modal







// function navbarLight() {
//     $('#mainNabvar').removeClass('navbar-dark');
//     $('#mainNabvar').addClass('bg-transparent');
//     $('#mainNabvar').addClass('navbar-light');
// }

// function navbarDark() {
//     console.log('navbarDark function here')
//     let x = document.querySelector('#mainNabvar');
//     x.classList.remove('bg-transparent');
//     x.classList.add('bg-dark');
//     x.classList.add('navbar-dark');

//     // $('#mainNabvar').removeClass('bg-transparent');
//     // $('#mainNabvar').addClass('bg-dark');
//     // $('#mainNabvar').addClass('navbar-dark');
// }

// module.exports = navbarDark, navbarLight;

// $(window).ready(function() {
//     $('#mainHeader').show();
//     $('#langingPageStories').show();
//     $('#contactPage').hide();
//     $('#aboutMeSection').hide();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').hide();
//     $('#caseStudy1').hide();

// });

// $('#DrLupuPaul').click(function() {
//     $('#mainHeader').show();
//     $('#langingPageStories').show();
//     $('#aboutMeSection').hide();
//     $('#caseStudy1').hide();
//     $('#contactPage').hide();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').hide();
//     navbarLight()


// });

// $('#aboutMe').click(function() {
//     $('#mainHeader').hide();
//     $('#langingPageStories').hide();
//     $('#aboutMeSection').show();
//     $('#caseStudy1').hide();
//     $('#contactPage').hide();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').hide();

//     navbarDark()

// });

// $('#case1').click(function() {
//     $('#mainHeader').hide();
//     $('#langingPageStories').hide();
//     $('#aboutMeSection').hide();
//     $('#caseStudy1').show();
//     $('#contactPage').hide();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').hide();
//     navbarDark()
// });

// $('#contact').click(function() {
//     $('#mainHeader').hide();
//     $('#langingPageStories').hide();
//     $('#aboutMeSection').hide();
//     $('#caseStudy1').hide();
//     $('#contactPage').show();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').hide();
//     navbarDark()
// });

// $('#partners').click(function() {
//     $('#mainHeader').hide();
//     $('#langingPageStories').hide();
//     $('#aboutMeSection').hide();
//     $('#caseStudy1').hide();
//     $('#contactPage').hide();
//     $('#collaboratorsLinks').show();
//     $('#endodonticsArticles').hide();
//     navbarDark()
// });

// $('#endodont').click(function() {
//     $('#mainHeader').hide();
//     $('#langingPageStories').hide();
//     $('#aboutMeSection').hide();
//     $('#caseStudy1').hide();
//     $('#contactPage').hide();
//     $('#collaboratorsLinks').hide();
//     $('#endodonticsArticles').show();
//     navbarDark()
// });






// $('#partnerDisplay1').mouseover(function() {
//     $('#hoverPartner1').css("display", "flex");
//     $(this).css('padding', '10px');
//     $('#partnerDisplay1').css("opacity", "0.5");
//     $('#partnersAbout1').show();
// });

// $('#hoverPartner1').mouseleave(function() {
//     $(this).css("display", "none");
//     $('#partnerDisplay1').css("padding", "0");
//     $('#partnerDisplay1').css("opacity", "1");
//     $('#partnersAbout1').hide();
//     $('#partnersAbout2').hide();
//     $('#partnersAbout3').hide();
//     $('#partnersAbout4').hide();
// });

// $('#partnerDisplay2').mouseover(function() {
//     $('#hoverPartner2').css("display", "flex");
//     $('#hoverPartner2').css("color", "white");
//     $(this).css('padding', '10px');
//     $('#partnerDisplay2').css("opacity", "0.3");
//     $('#partnersAbout2').show();
// });

// $('#hoverPartner2').mouseleave(function() {
//     $(this).css("display", "none");
//     $('#partnerDisplay2').css("padding", "0");
//     $('#partnerDisplay2').css("opacity", "1");
//     $('#partnersAbout2').hide();
// });
// $('#partnerDisplay3').mouseover(function() {
//     $('#hoverPartner3').css("display", "flex");
//     $(this).css('padding', '10px');
//     $('#partnerDisplay3').css("opacity", "0.5");
//     $('#partnersAbout3').show();
// });

// $('#hoverPartner3').mouseleave(function() {
//     $(this).css("display", "none");
//     $('#partnerDisplay3').css("padding", "0");
//     $('#partnerDisplay3').css("opacity", "1");
//     $('#partnersAbout3').hide();
// });
// $('#partnerDisplay4').mouseover(function() {
//     $('#hoverPartner4').css("display", "flex");
//     $(this).css('padding', '10px');
//     $('#partnerDisplay4').css("opacity", "0.5");
//     $('#partnersAbout4').show();
// });

// $('#hoverPartner4').mouseleave(function() {
//     $(this).css("display", "none");
//     $('#partnerDisplay4').css("padding", "0");
//     $('#partnerDisplay4').css("opacity", "1");
//     $('#partnersAbout4').hide();
// });