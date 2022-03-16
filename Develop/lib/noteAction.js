function createNewNote(title, text) {
    const note = title;
    text.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ text }, null, 2)
    );
    return note;
}
