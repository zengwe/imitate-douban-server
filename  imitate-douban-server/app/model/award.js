'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Award = app.model.define('Award', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    enName: {
      type: STRING(100),
      defaultValue: '',
    },
    area: {
      type: STRING(100),
      defaultValue: '',
    },
    icon: {
      type: STRING(100),
      comment: '官方LOGO',
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
    freezeTable: true,
    tableName: 'z_award',
    timestamps: false,
  });
  Award.associate = function() {

  };
  return Award;
};