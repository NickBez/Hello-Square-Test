/* HERO BUTTON HOVER */
document.querySelector('.Learn-More').addEventListener('mouseover', toggleDotOff);
document.querySelector('.Learn-More').addEventListener('mouseout', toggleDotOn);
    
/* HERO DOT HOVER */
function toggleDotOff(){
    document.querySelector('.grid-item-oval-2').style.display = 'none';
    
}

function toggleDotOn (){
    document.querySelector('.grid-item-oval-2').style.display = 'block';
}
/* CHANGE HERO IMAGE */
document.querySelector('.Learn-More').addEventListener('click', changeHeroImage);

function changeHeroImage (){
    document.querySelector('.hero-image-1').style.display = 'none';
    document.querySelector('.hero-image-2').style.display = 'block';
}
/* STORY BUTTON HOVER */
document.querySelector('.Learn-More-2').addEventListener('mouseover', toggleDotOff_copy);
document.querySelector('.Learn-More-2').addEventListener('mouseout', toggleDotOn_copy);

/* STORY DOT HOVER */
function toggleDotOff_copy (){
    document.querySelector('.grid-item-oval-2-copy').style.display = 'none';
}

function toggleDotOn_copy (){
    document.querySelector('.grid-item-oval-2-copy').style.display = 'block';
}
/* STORY EXTEND STORY */
document.querySelector('.Learn-More-2').addEventListener('click', showMoreInfo);

function showMoreInfo (){
    document.querySelector('.BG').style.height = '2526px';
    document.querySelector('.Learn-More-2').style.display = 'none';
    document.querySelector('.Oval-2-Copy').style.display = 'none';
    document.querySelector('.grid-item-Some-Call-Us').style.display = 'block';
    document.querySelector('.grid-item-Second-para').style.display = 'block';
    document.querySelector('.grid-item-Third-Para').style.display = 'block';
    document.querySelector('.grid-item-Fourth-Para').style.display = 'block';
    document.querySelector('.grid-item-Show-Less').style.display = 'block';
}
/* HIDE EXTENDED STORY */
document.querySelector('.Show-Less').addEventListener('click', hideMoreInfo);

function hideMoreInfo (){
    document.querySelector('.BG').style.height = '1885px';
    document.querySelector('.Learn-More-2').style.display = 'block';
    document.querySelector('.Oval-2-Copy').style.display = 'block';
    document.querySelector('.grid-item-Some-Call-Us').style.display = 'none';
    document.querySelector('.grid-item-Second-para').style.display = 'none';
    document.querySelector('.grid-item-Third-Para').style.display = 'none';
    document.querySelector('.grid-item-Fourth-Para').style.display = 'none';
    document.querySelector('.grid-item-Show-Less').style.display = 'none';
}
/* TOGGLE DROPDOWN */
document.querySelector('.arrow-1').addEventListener('click', toggleDropDown);


function toggleDropDown () {
    
    var e = document.getElementById('Brands-dropdown');
    
        if (e.style.display === 'block'){
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        }
    
    document.querySelector('.Mask').classList.toggle('mask-margin')
    document.querySelector('.grid-item15').classList.toggle('margin');
    document.querySelector('.grid-item16').classList.toggle('margin');
    document.querySelector('.grid-item17').classList.toggle('margin');
    document.querySelector('.arrow-1').classList.toggle('Line');
    document.querySelector('.filter-rugs-1').classList.toggle('margin');
    document.querySelector('.filter-rugs-2').classList.toggle('margin');
    document.querySelector('.filter-rugs-3').classList.toggle('margin');
    document.querySelector('.grid-item-Ndebele').classList.toggle('margin-copy');
    document.querySelector('.grid-item-Royalty').classList.toggle('margin-copy-3');
    document.querySelector('.grid-item-Makoti').classList.toggle('margin-copy-4');
    document.querySelector('.Hand-Knotted-Wool-RF').classList.toggle('margin-copy-2');
    document.querySelector('.grid-item-Voke').classList.toggle('margin-sm');
    document.querySelector('.grid-item-Woven').classList.toggle('margin-sm');
    document.querySelector('.grid-item-Ekhaya').classList.toggle('margin-sm');
    document.querySelector('.grid-item-rug-info').classList.toggle('margin-sm-copy');
    document.querySelector('.grid-item-Rectangle-17-copy-4').classList.toggle('underline-margin');
    
}
/* FILTER RUGS HOVER */
document.querySelector('.filter-rugs-3').addEventListener('mouseover', filterRugsHoverOn);

function filterRugsHoverOn() {
    document.querySelector('.Mask').style.display = 'block';
    document.querySelector('.grid-item-Rectangle-17-copy-4').style.display = 'block';
    document.querySelector('.grid-item-rug-info').style.display = 'block';
    document.querySelector('.grid-item-Voke').classList.toggle('margin-sm-hover');
    document.querySelector('.grid-item-Woven').classList.toggle('margin-sm-hover');
    document.querySelector('.grid-item-Ekhaya').classList.toggle('margin-sm-hover');
    document.querySelector('.grid-item-Ndebele').classList.toggle('margin-sm-bele');
    document.querySelector('.grid-item-Royalty').classList.toggle('margin-sm-royal');
    document.querySelector('.grid-item-Makoti').classList.toggle('margin-sm-makoti');
}
/* FILTER RUGS HOVER OFF */
document.querySelector('.Mask').addEventListener('mouseout', filterRugsHoverOff_1);

function filterRugsHoverOff_1 (){
    document.querySelector('.Mask').style.display = 'none';
    document.querySelector('.grid-item-Rectangle-17-copy-4').style.display = 'none';
    document.querySelector('.grid-item-rug-info').style.display = 'none';
}
/* FILTER RUG INFO HOVER OFF */
document.querySelector('.grid-item-rug-info').addEventListener('mouseout', filterRugsHoverOff_2);

function filterRugsHoverOff_2 (){
    document.querySelector('.Mask').style.display = 'none';
    document.querySelector('.grid-item-Rectangle-17-copy-4').style.display = 'none';
    document.querySelector('.grid-item-rug-info').style.display = 'none';
}
/* FILTER BLOGS HOVER ON */
document.querySelector('.blog-3').addEventListener('mouseover', filterBlogsHoverOn);

function filterBlogsHoverOn (){
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.grid-item-blog-button').style.display = 'block';
    document.querySelector('.grid-item-Rectangle-17-copy-3').style.display = 'block';
}
/* FILTER BLOGS HOVER OFF */
document.querySelector('.overlay').addEventListener('mouseout', filterBlogsHoverOff);

function filterBlogsHoverOff (){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.grid-item-blog-button').style.display = 'none';
    document.querySelector('.grid-item-Rectangle-17-copy-3').style.display = 'none';
}
/* SHOW EMAIL LABEL ON HOVER */
document.getElementById('email-textbox').addEventListener('mouseover', showLabel);

function showLabel () {
    var label, placeHolder;
    
    label = document.querySelector('.grid-item-email');
    placeHolder = document.getElementById('email-textbox');
    
    label.style.display = 'block';
    placeHolder.removeAttribute('placeholder');
}

/*MOBILE NAVIGATION HAMBURGER MENU */
    
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);  
    });

