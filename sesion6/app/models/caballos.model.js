const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const caballos = sequelize.define(
    "caballos",
    {
      cbl_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cbl_nombre: {
        type: Sequelize.STRING(20),
      },
      cbl_edad: {
        type: Sequelize.INTEGER,
      },
      cbl_sexo: {
        type: Sequelize.STRING(1),
      },
      cbl_color: {
        type: Sequelize.STRING(10),
      },      
    },
    {
      freezeTableName: true,
      underscored: true,
      updatedAt: "cbl_updated",
      createdAt: "cbl_created",
    }
  );
  return caballos;
};
