'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Movie = app.model.define('Movie', {
    id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    originName: {
      filed: 'origin_name',
      type: STRING(100),
      defaultValue: '',
    },
    poster: {
      type: STRING(100),
      defaultValue: '',
    },
    fromWhere: {
      type: INTEGER.UNSIGNED,
      filed: 'from_where',
    },
    brief: {
      type: STRING(255),
    },
    filmLength: {
      type: INTEGER.UNSIGNED,
      filed: 'film_lengtn',
    },
    fileLength2: {
      type: INTEGER.UNSIGNED,
      filed: 'film_length2',
    },
    language: {
      type: STRING(255),
    },
    prevue: {
      type: STRING(255),
      defaultValue: '',
    },
    publishTime: {
      filed: 'publish_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    publishCountry: {
      filed: 'publish_country',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    createdTime: {
      filed: 'created_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      allowNull: false,
    },
    updatedTime: {
      filed: 'update_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    tableName: 'z_movie',
    timestamps: false,
  });
  Movie.associate = function() {
  };
  return Movie;
};
