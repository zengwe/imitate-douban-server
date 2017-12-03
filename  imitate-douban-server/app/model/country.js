'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Country = app.model.define('Country', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    chName: {
      filed: 'ch_name',
      type: STRING(100),
      defaultValue: '',
    },
    enName: {
      filed: 'en_name',
      type: STRING(100),
      defaultValue: '',
    },
    mainLanguage: {
      filed: 'main_language',
      defaultValue: '',
      type: STRING(100),
    },
    secondeLanguage: {
      filed: 'seconde_language',
      type: STRING(100),
      defaultValue: '',
    },
    continent: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      comment: '0未知，1亚洲，2欧洲，3非洲，4北美洲，5南美洲，6大洋州，7南极，8洲太平洋，9大西洋，10印度洋，11北冰洋',
    },
    capital: {
      type: STRING(100),
      defaultValue: '未知',
      comment: '首都',
    },
    createTime: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      filed: 'create_time',
    },
    updateTime: {
      type: INTEGER.UNSIGNED,
      defaultValue: 0,
      filed: 'update_time',
    },
  }, {
    freezeTableName: true,
    tableName: 'z_country',
    timestamps: false,
  });
  Country.associate = function() {

  };
  return Country;
};
