import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.js";
import slideRoutes from "./routes/slide.js";
import campusRoutes from "./routes/campus.js";
import programRoutes from "./routes/program.js";
import teamRoutes from "./routes/team.js";
import newsRoutes from "./routes/news.js";
import schoolRoutes from "./routes/school.js";
import usersRoutes from "./routes/users.js";
import eventsRoutes from "./routes/events.js";
import publicationRoutes from "./routes/publication.js";
import lecturerRoutes from "./routes/lecturer.js";
import departmentRoutes from "./routes/department.js";
import jobsRoutes from "./routes/jobs.js";
import newRoutes from "./routes/new.js";
import eventRoutes from "./routes/event.js";

dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Health Check
app.get("/", (req, res) => {
  res.send("The Bugema University API is running fine.");
});

app.use("/auth", authRoutes);
app.use("/slide", slideRoutes);
app.use("/campus", campusRoutes);
app.use("/program", programRoutes);
app.use("/team", teamRoutes);
app.use("/news", newsRoutes);
app.use("/school", schoolRoutes);
app.use("/users", usersRoutes);
app.use("/events", eventsRoutes);
app.use("/publication", publicationRoutes);
app.use("/lecturer", lecturerRoutes);
app.use("/department", departmentRoutes);
app.use("/jobs", jobsRoutes);
app.use("/new", newRoutes);
app.use("/event", eventRoutes);

const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
