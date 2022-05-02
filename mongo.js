const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://zoplos:${password}@cluster0.5u2kw.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "HTML is Easy",
//   date: new Date(),
//   important: true,
// });

// const note1 = new Note({
//   content: "Browser can execute only Javascript",
//   date: new Date(),
//   important: false,
// });

// const note2 = new Note({
//   content: "GET and POST are the most important methods of HTTP protocol",
//   date: new Date(),
//   important: true,
// });

// note1.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

// note2.save().then((result) => {
//   console.log("note saved!");
//   mongoose.connection.close();
// });

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
