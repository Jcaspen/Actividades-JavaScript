//-----------Apartado 1
// $.fn.masinfo = function () {
//     this.each(function () {
//         let padre=$(this).parent();
//         $(padre).append(`<img src="photos/${padre.attr('data-loc')}.jpg"></img><figcaption>Weather: ${padre.attr('data-temp')}</figcaption>`)
//     });
// };
//------------Apartado 3
$.fn.masinfo = function () {
    this.each(function () {
        let padre=$(this).parent();
        $(padre).append(`<img src="photos/${padre.attr('data-loc')}.jpg"></img>`);
    });
};
