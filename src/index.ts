import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (request: Request, response: Response) {
  response.status(200).json("pong");
});

app.listen(4600, function () {
  console.log("Example app listening on port 4600!");
});
