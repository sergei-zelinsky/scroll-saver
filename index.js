class ScrollSaver {
  constructor(){
    this.x = null;
    this.y = null;
  }

  save = () => {
    this.x = (typeof window.pageXOffset !== 'undefined')
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    this.y = (typeof window.pageYOffset !== 'undefined')
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  };

  restore = () => {
    window.scrollTo(this.x, this.y);
  };
}

export default ScrollSaver;
