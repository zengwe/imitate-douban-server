'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const MovieReviewComment = app.model.define('MovieReviewComment',{
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    targetId: {
      filed: 'targer_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    parentId: {
      filed: 'parent_id',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    comment: {
      type: STRING(255),
      allowNull: false,
    },
    status: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '0:可见,1:不可见',
    },
    userId: {
      filed: 'user_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
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
  },
  {
    freezeTableName: true,
    tableName: 'z_movie_review_comment',
    timestamps: false,
  });
  MovieReviewComment.associate = function() {

  };
  return MovieReviewComment;
};
