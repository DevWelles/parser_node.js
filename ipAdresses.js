module.exports = class IPAdresses{
  constructor(file){
    this.file = file;
    this.uniqueHelpviews = 0;
    this.uniqueContactviews = 0;
    this.uniqueHomeviews = 0;
    this.uniqueAboutviews = 0;
    this.uniqueIndexviews = 0;
    this.uniqueNeubrojeniviews = 0;
    this.allUnique;
  }

  uniqueVisits () {
    this.uniqueHelpviews = this.file.help.filter((item, i, ar) => ar.indexOf(item) === i).length;
    this.uniqueContactviews = this.file.contact.filter((item, i, ar) => ar.indexOf(item) === i).length;
    this.uniqueHomeviews = this.file.home.filter((item, i, ar) => ar.indexOf(item) === i).length;
    this.uniqueAboutviews = this.file.about.filter((item, i, ar) => ar.indexOf(item) === i).length;
    this.uniqueIndexviews = this.file.index.filter((item, i, ar) => ar.indexOf(item) === i).length;
    this.uniqueNeubrojeniviews = this.file.neubrojeni.filter((item, i, ar) => ar.indexOf(item) === i).length;
  }

  arrayOfUniqueVisits () {
    this.allUnique =
    [
      {
      "page":"help",
      "views": this.uniqueHelpviews
    }, {
      "page": "contact",
      "views": this.uniqueContactviews
    }, {
      "page": "home",
      "views": this.uniqueHomeviews
    }, {
      "page":"about",
      "views": this.uniqueAboutviews
    }, {
      "page": "index",
      "views": this.uniqueIndexviews
    }, {
      "page": "neubrojeni",
      "views": this.uniqueNeubrojeniviews
    }
    ];
  }

  sortUnique () {
    this.allUnique.sort((a,b) => b.views - a.views)
  }

  ispisUnique() {
    this.allUnique.forEach(object => {
      console.log(`${object.page} has ${object.views} number of unique visits`)
    })
  }
  
}