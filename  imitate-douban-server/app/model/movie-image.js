'use strict';
module.exports = app => {
  const { INTEGER,STRING } = app.Sequelize;
  const MovieImage = app.model.define('MovieImage', {
    id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    path: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    descrip: {
      type: STRING(255),
      defaultValue: '',
    },
    status: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    },
    createTime: {
      filed: 'create_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    updateTime: {
      filed: 'update_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    },
  }, {
    tableName: 'z_movie_image',
    freezeTableName: true,
    timestamps: false,
  });
}