import * as express from "express"
import * as path from "path";

const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve("client/index.html"));
});

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
});
