const File = require('./file');
const WebPages = require('./webPages');
const IPAdresses = require('./ipAdresses');

const myFile = new File('webserver.log');
const myWebPages = new WebPages(myFile);
const iP = new IPAdresses(myFile);

myFile.readMyFile();
myFile.turnFileIntoArray();
myFile.webPagesViews();

myWebPages.numberOfViews(); //sets number of views in propertys of myWebPages
myWebPages.arrayOfViews(); // creates array of objects  with page names and number of views
myWebPages.sortViews(); // sorts that aray of objects by number of views
myWebPages.ispis();

console.log(' ');
iP.uniqueVisits();//sets number of uniquevisits in propertyes of IP class
iP.arrayOfUniqueVisits();
iP.sortUnique();
iP.ispisUnique();
