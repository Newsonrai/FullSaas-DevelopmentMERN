const productModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productName: {
      type: DataTypes.STRING,
    },
    productPrice: {
      type: DataTypes.INTEGER,
    },
    productCategory: {
      type: DataTypes.STRING,
    },
  });
  return Product
};

module.exports = productModel