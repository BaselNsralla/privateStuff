const fetch = require('node-fetch')
const util = require('util')
const xml2js = require('xml2js').parseString
const xmlParser = util.promisify(xml2js)
fetch('https://www.goodreads.com/author/show.xml?id=${args.id}&key=risKm8wwXsIcyEiTktvA')
.then(res => res.text())
.then(str => {
    console.log(str)    

})