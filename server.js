import express from 'express';

const app = express();

// Set static folder
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.listen(3000, ()=> {
    console.log("Hello from the console !");
});

app.get("/test", (req, res) => {
    console.log("here we go!")
    const random_number = Math.floor(Math.random() * 10);
    res.send(String(random_number));
})

app.get("/home", (req, res) => {
    res.send("Home");
})

app.get("/library", (req, res) => {
    res.send("Library");
})

app.get("/playlists", (req, res) => {
    res.send("Playlists");
})

app.get("/albums", (req, res) => {
    res.send("Albums");
})

app.get("/artists", (req, res) => {
    res.send("Artists");
})

app.get("/genres", (req, res) => {
    res.send("Genres");
})