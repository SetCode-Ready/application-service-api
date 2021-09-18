import { app } from "./app";

const API_PORT = 3334;

app.listen(API_PORT, () => console.log(`Server up on http://localhost:${API_PORT}!`));