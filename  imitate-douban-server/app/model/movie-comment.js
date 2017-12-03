'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const MovieComment = app.model.define('MovieComment', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: STRING(1000),
      allowNull: false,
    },
    targetId: {
      filed: 'target_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    userId: {
      filed: 'user_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    status: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '',
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
    freezeTableName: true,
    tableName: 'z_movie_comment',
    timestamps: false,
  });
  MovieComment.associate = function() {

  };
  return MovieComment;
};
