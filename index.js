const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const config = require("./config");
const tweetsRouter = require("./routes/tweetsRouter");
const { logErrors, wrapErrors, errorHandler } = require('./utils/midlewares/errorMidlewares');
const notFound = require('./utils/midlewares/notFoundMidleware');

const app = express();
const PORT = config.port;

// global middlewares
app.use(cors({ origin: config.dev ? "*" : config.corsOrigin }));
app.use(helmet());
app.use(express.json());
//app.use("/tweets", tweetsRouter);
tweetsRouter(app);

//Catch 404 
app.use(notFound);

// Error midlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(PORT, () => 
    console.log(`Server running at http://localhost:${PORT}`)
);