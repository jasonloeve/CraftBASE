export default class Poupon {
  constructor(el) {
    this.el = el;
    this.tvSlider = this.el.querySelector('.js-poupon-tv-slider');
    this.presentationSlider = this.el.querySelector('.js-poupon-presentation');
    this.thumbs = this.el.querySelector('.js-poupon-presentation-thumbs');

    // Create a random hash
    this.hashClass = Math.random()
      .toString(36)
      .substr(2, 5);

    this.initSliders();
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.thumbs.addEventListener('click', this.handleButtonClick.bind(this));
  }

  handleButtonClick(e) {
    e.preventDefault();
    let link = e.target.closest('.js-poupon-presentation-thumb');
    let index = link.dataset.index;

    this.setActiveThumb(index);
    this.tvSlider.slick('slickGoTo', index);
    this.presentationSlider.slick('slickGoTo', index);
  }

  setActiveThumb(index) {
    // Clear first
    Array.from(this.thumbs.children).forEach(child =>
      child.classList.remove('is-active')
    );

    this.thumbs.children[index].classList.toggle('is-active');
  }

  initSliders() {
    var self = this;
    $(
      function() {
        let pouponSyncClass = `js-poupon-${this.hashClass}`;
        this.tvSlider = $(this.tvSlider)
          .addClass(pouponSyncClass)
          .not('.slick-initialized')
          .slick({
            autoplay: true,
            arrows: false,
            autoplaySpeed: 7000,
            fade: true,
            asNavFor: `.${pouponSyncClass}`,
            cssEase: 'ease-out'
          })
          .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            self.setActiveThumb(nextSlide);
          });
        this.presentationSlider = $(this.presentationSlider)
          .addClass(pouponSyncClass)
          .not('.slick-initialized')
          .slick({
            asNavFor: `.${pouponSyncClass}`
          });
      }.bind(this)
    );
  }
}

$('.slider-for').slick({
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
