'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const MovieReview = app.model.define('MovieReview', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    targetId: {
      filed: 'target_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    brief: {
      type: STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    content: {
      type: TEXT,
      allowNull: false,
    },
    helpful: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    unhelpful: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    spoiler: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '0:没有剧透，1:剧透',
    },
    userId: {
      filed: 'user_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    status: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '0:可见的,1: 不可见',
    },
    createTime: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      filed: 'create_time',
    },
    updateTime: {
      filed: 'update_time',
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    tableName: 'z_movie_review',
    timestamps: false,
  });
  MovieReview.associate = function() {

  };
  return MovieReview;
};
