'use strict';
module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Actor = app.model.define('Actor', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    header: {
      type: STRING(100),
      defaultValue: '',
    },
    otherName: {
      filed: 'other_name',
      type: STRING(100),
      defaultValue: '',
    },
    nickName: {
      filed: 'nick_name',
      type: STRING(100),
      defaultValue: '',
    },
    profession: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    brief: {
      type: TEXT,
    },
    family: {
      type: TEXT,
    },
    gender: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    birthdata: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
    },
  }, {});
  Actor.associate = function() {

  };
};
