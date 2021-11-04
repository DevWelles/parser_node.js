
module.exports = class WebPages {
  constructor (fileInstance) {
    this.fileInstance = fileInstance;
    this._helpviews = 0;
    this.contactviews = 0;
    this.homeviews = 0;
    this.aboutviews = 0;
    this.indexviews = 0;
    this.neubrojeniviews = 0;
    this.allViews;
  }

  get helpviews() {
    return this._helpviews
  }
  set helpviews (newviews) {
    this._helpviews = newviews
  }

  numberOfViews () {
    this.helpviews = this.fileInstance.help.length;
    this.contactviews = this.fileInstance.contact.length;
    this.homeviews = this.fileInstance.home.length;
    this.aboutviews = this.fileInstance.about.length;
    this.indexviews = this.fileInstance.index.length;
    this.neubrojeniviews = this.fileInstance.neubrojeni.length;
  }

  arrayOfViews () {
    this.allViews =
    [
      {
      "page":"help",
      "views": this.helpviews
    }, {
      "page": "contact",
      "views": this.contactviews
    }, {
      "page": "home",
      "views": this.homeviews
    }, {
      "page":"about",
      "views": this.aboutviews
    }, {
      "page": "index",
      "views": this.indexviews
    }, {
      "page": "neubrojeni",
      "views": this.neubrojeniviews
    }
    ];
  }

  sortViews () {
    this.allViews.sort((a,b) => b.views - a.views)
  }

  ispis() {
    this.allViews.forEach(object => {
      console.log(`${object.page} has ${object.views} number of visits`)
    })
  }
}