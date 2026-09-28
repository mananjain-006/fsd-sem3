import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "requests.json");


app.use(express.json());
app.use(express.static("public"));

// Read requests from JSON file
function readRequests() {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Write requests to JSON file
function writeRequests(requests) {
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));
}

// GET /api/requests
app.get("/api/requests", (req, res) => {
    const requests = readRequests();
    res.json(requests);
});

// GET /api/requests/:id
app.get("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const request = requests.find(r => r.id === parseInt(req.params.id));

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

// POST /api/requests
app.post("/api/requests", (req, res) => {
    const requests = readRequests();

    const { studentName, email, category, description, priority } = req.body;

    if (!studentName || !email || !category || !description || !priority) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = {
        id: requests.length > 0 ? requests[requests.length - 1].id + 1 : 1,
        studentName,
        email,
        category,
        description,
        priority
    };

    requests.push(newRequest);
    writeRequests(requests);

    res.status(201).json(newRequest);
});

// PUT /api/requests/:id
app.put("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const id = parseInt(req.params.id);
    const index = requests.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    const { studentName, email, category, description, priority } = req.body;

    requests[index] = {
        id,
        studentName,
        email,
        category,
        description,
        priority
    };

    writeRequests(requests);
    res.json(requests[index]);
});

// DELETE /api/requests/:id
app.delete("/api/requests/:id", (req, res) => {
    const requests = readRequests();
    const id = parseInt(req.params.id);
    const index = requests.findIndex(r => r.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    const deletedRequest = requests.splice(index, 1);

    writeRequests(requests);

    res.json({
        message: "Request deleted successfully",
        request: deletedRequest[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});