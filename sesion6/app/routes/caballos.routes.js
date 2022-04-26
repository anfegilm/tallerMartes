module.exports = (app) => {
  const caballos = require("../controllers/caballos.controller");
  const router = require("express").Router();
  router.get("/consultar", caballos.findAll);
  router.post("/create", caballos.create);
  app.use("/api/caballos", router);
};
