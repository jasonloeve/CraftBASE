export default class Masonry {
  constructor(el) {
    this.el = el;
    this.initMasonry();
    this.options = {
      itemSelector: '.masonry-item',
      percentPosition: true,
      columnWidth: '.masonry-sizer'
    };
  }

  initMasonry() {
    this.masonry = new Masonry(this.el, this.options);
  }
}
