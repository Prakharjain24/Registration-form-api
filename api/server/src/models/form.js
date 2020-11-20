
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Form;
};