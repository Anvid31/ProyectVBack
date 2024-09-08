import cors from "cors";
import rutas from "../routes/rutas.js";

const whiteList = ["http://localhost:8000", "http://localhost:4200"];

const opcionesCors = {
    origin: (origen, callback) => {
        if (whiteList.indexOf(origen) !== -1 || !origen) {
            callback(null, true);
        } else {
            callback(new Error("Origen no permitido por CORS"));
        }
    },
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
};

const config = (app) => {
    app.use(cors(opcionesCors));

};

export { config };
