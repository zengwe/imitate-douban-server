'use strict';
module.exports = app => {
  const { INTEGER, STRING} = app.Sequelize;
  const MovieImageRelation = app.model.define('MovieImageRelation', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    movieId: {
      filed: 'movie_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    imageId: {
      filed: 'image_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
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
  }, {
    tableName: 'z_movie_image_relation',
    freezeTableName: true,
    timestamps: false,
  });
  MovieImageRelation.associate = function() {

  };
  return MovieImageRelation;
};
