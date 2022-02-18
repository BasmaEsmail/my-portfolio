$(window).scroll(function(){
    if($(window).scrollTop()>=50){
        $('.navbar').css('background','white')
        $('.nav-link').css('color','#4b475c')
        $('.navbar').css('box-shadow','2px 2px 5px grey')

    }
    else 
    {
        $('.navbar').css('background','transparent');
        $('.nav-link').css('color','#B4ACD7');
        $('.navbar').css('box-shadow','none')
    }
   
})
// $('.image1').hover(function(){
// $('h6').html("HTML5, CSS, Bootstrap and jQuery")
// },{})