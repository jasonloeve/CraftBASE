export default class Slick {
  constructor(el) {
    this.el = el;
    this.initSlider();
    this.options = {
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'ease-out'
    };
  }

  initSlider() {
    $(
      function() {
        $(this.el)
          .not('.slick-initialized')
          .slick(this.options);
      }.bind(this)
    );
  }
}
