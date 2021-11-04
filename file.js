const fs = require('fs');

module.exports = class File {
  constructor (textFile) {
    this._textFile = textFile
    this.data;
    this.fileArray;
    this.help = [];
    this.contact = [];
    this.home = [];
    this.about = [];
    this.index = [];
    this.neubrojeni = [];
  };

  get textFile () {
    return this._textFile
  };
  set textFile (newFile) {
    this._textFile = newFile
  };
  //moram ubacit sve potrebne getters i setters

  readMyFile () {
    try {
      this.data = fs.readFileSync(this.textFile, 'utf8')
    } catch (err) {
      console.error(err)
    }  
  };
  turnFileIntoArray () {
    this.fileArray = this.data.split("\n");
  };

  webPagesViews () {
    for (let i = 0; i < this.fileArray.length - 1; i++) {
      if (this.fileArray[i].includes("help")) {
        this.help.push(this.fileArray[i]);
      } else if (this.fileArray[i].includes("contact")) {
        this.contact.push(this.fileArray[i]);
      } else if (this.fileArray[i].includes("home")) {
        this.home.push(this.fileArray[i]);
      } else if (this.fileArray[i].includes("about")) {
        this.about.push(this.fileArray[i]);
      } else if (this.fileArray[i].includes("index")) {
        this.index.push(this.fileArray[i]);
      } else {
        this.neubrojeni.push(this.fileArray[i]);
      }
    }
  };

}