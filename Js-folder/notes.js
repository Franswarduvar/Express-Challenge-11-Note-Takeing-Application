const path = require('path');
const fs = require('fs');

function createNote(body, notes){
notes.push(body);
fs.writeFileSync(path.join(__dirname, '../db/db.json'),JSON.stringify({
    notes:notes
},null,2));
return body 
}

function deleteNote (notes, id){
    let destructionID = parseInt(id);
    notes.splice(destructionID,1);
    for (let i = destructionID; i < notes.length; i++) {
        notes[i].id = i.toString();
    }
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notes
        }, null, 2)
    )
}

module.exports = {
    createNote,
    deleteNote
}