const path = require('path');
const fs = require('fs');

function createNote(body, notes){
notes.push(body);
fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify({
    notes:notes
},null,2));
return body 
}

module.exports = {
    createNote
}