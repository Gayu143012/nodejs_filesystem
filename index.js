const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const FOLDER_PATH = path.join(__dirname, "files");

// Ensure the folder exists
if (!fs.existsSync(FOLDER_PATH)) {
  fs.mkdirSync(FOLDER_PATH);
}

// Middleware to parse JSON
app.use(express.json());

// Endpoint to create a text file with the current timestamp
app.post("/create-file", (req, res) => {
  const now = new Date();
  const timestamp = now.toISOString();
  const fileName = `${timestamp.replace(/:/g, "-")}.txt`; // Replace ":" to make it a valid filename
  const filePath = path.join(FOLDER_PATH, fileName);

  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return res.status(500).send({ error: "Failed to create file." });
    }

    res.send({ message: "File created successfully.", fileName });
  });
});

// Endpoint to retrieve all text files in the folder
app.get("/list-files", (req, res) => {
  fs.readdir(FOLDER_PATH, (err, files) => {
    if (err) {
      console.error("Error reading files:", err);
      return res.status(500).send({ error: "Failed to retrieve files." });
    }

    // Filter only .txt files
    const textFiles = files.filter((file) => file.endsWith(".txt"));
    res.send({ files: textFiles });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
