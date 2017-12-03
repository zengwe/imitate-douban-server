'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const MovieActorRelation = app.model.define('MovieActorRelation', {
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
    actorId: {
      filed: 'actor_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    roleName: {
      filed: 'role_name',
      type: STRING(100),
      defaultValue: '',
    },
    type: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    },
    createTime: {
      filed: 'create_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0
    },
    updateTime: {
      filed: 'update_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {
    tableName: 'z_movie_actor_relation',
    freezeTableName: true,
    timestamps: false,
  });
  MovieActorRelation.associate = function() {

  };
  return MovieActorRelation;
};
