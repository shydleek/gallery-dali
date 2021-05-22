$(function(){
    $('.header__btn').on('click', function(){
        $('.header__list').toggleClass('header__list--active');
    });
    $('.header__burger').on('click', function(){
        $('.header__list').toggleClass('header__list--active');
    });
    $('.header__btn').on('click', function(){
        $('.header__btn').css('display','none');
        $('.header__burger').css('display','block');
    });
    $('.header__burger').on('click', function(){
        $('.header__burger').css('display','none');
        $('.header__btn').css('display','block');
    });
});