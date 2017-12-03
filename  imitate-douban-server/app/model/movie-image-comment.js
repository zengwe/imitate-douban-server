'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const MovieImageComment = app.model.define('MovieImageComment', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: STRING(255),
      allowNull: false,
    },
    userId: {
      type: INTEGER.UNSIGNED,
      filed: 'user_id',
      allowNull: false,
    },
    status: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    descrip: {
      type: STRING(255),
      defaultValue: '',
    },
    updateUserId: {
      filed: 'update_user_id',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    createTime: {
      filed: 'create_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    updateTime: {
      type: INTEGER.UNSIGNED,
      filed: 'update_time',
      defaultValue: 0
    },
  }, {
    freezeTableName: true,
    tableName: 'z_movie_image_comment',
    timestamps: false,
  });
  MovieImageComment.associate = function() {

  };
  return MovieImageComment;
};
