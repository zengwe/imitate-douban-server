'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const ActorRelation = app.model.define('ActorRelation', {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      filed: 'role_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    otherRoleId: {
      filed: 'other_role_id',
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    relationship: {
      type: INTEGER.UNSIGNED,
      allowNull: false,
      comment: '关系0好友1情侣2夫妻3父子4母子5',
    },
    descrip: {
      type: STRING(100),
      defaultValue: '',
      comment: '关系描述',
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
    tableName: 'z_actor_relation',
    timestamps: false,
  });
  ActorRelation.associate = function() {

  };
  return ActorRelation;
};
