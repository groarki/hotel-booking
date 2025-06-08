import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { reviews: [], users: [] });

app.get("/reviews", async (req, res) => {
  await db.read();
  res.json(db.data.reviews);
});

app.post("/signup", async (req, res) => {
  await db.read();
  db.data.users ||= [];

  const { username, password } = req.body;

  const exists = db.data.users.find((u) => u.username === username);
  if (exists)
    return res.status(400).json({ error: "Username is alresdy taken" });

  const hashed = bcrypt.hashSync(password, 10);
  db.data.users.push({ username, password: hashed });

  await db.write();
  return res.json({ username });
});

app.post("/login", async (req, res) => {
  await db.read();
  db.data.users ||= [];

  const { username, password } = req.body;
  const user = db.data.users.find((u) => u.username === username);
  if (!user) return res.status(404).json({ error: "Username not found" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(404).json({ error: "Invalid password" });

  return res.json({ username });
});

app.post("/reviews", async (req, res) => {
  const { roomNumber, email, body } = req.body;
  const newReview = {
    id: nanoid(),
    roomNumber,
    email,
    body,
  };
  await db.read();
  db.data.reviews.push(newReview);
  await db.write();
  res.json({ message: "Review added.", review: newReview });
});

app.put("/reviews/:id", async (req, res) => {
  const recencja = req.params.id;
  const { roomNumber, email, body } = req.body;

  await db.read();
  const index = db.data.reviews.findIndex((r) => r.id === recencja);

  if (index === -1) {
    return res.status(404).json({ message: "Review not found" });
  }

  db.data.reviews[index] = {
    ...db.data.reviews[index],
    roomNumber,
    email,
    body,
  };

  await db.write();
  res.json({ message: "Review updated", review: db.data.reviews[index] });
});

app.delete("/reviews/:id", async (req, res) => {
  const review = req.params.id;

  await db.read();

  const index = db.data.reviews.findIndex((r) => r.id === review);

  if (index === -1) {
    return res.status(404).json({ message: "Review not found" });
  }

  db.data.reviews.splice(index, 1);
  await db.write();
  res.json({ message: "Review deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
