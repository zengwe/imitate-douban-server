'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Category = app.model.define('Category', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    type: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    indexNum: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    visible: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    createTime: {
      filed: 'create_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    updateTime: {
      filed: 'update_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {});
  Category.associate = function() {

  };
  return Category;
};
