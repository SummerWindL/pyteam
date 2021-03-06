const { Sequelize, sequelize } = require('./db');

const user_model = require('./user_model');
const department_model = require('./department_model');

const project_model = sequelize.define(
  'project_model',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: '项目名'
    },
    intro: {
      type: Sequelize.STRING,
      allowNull: true,
      comment: '项目介绍'
    },
    taskCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '当前项目的任务数'
    }
  },
  {
    tableName: 'project',
    timestamps: true // 不默认增加 createdAt 字段
  }
);

// project_model.addHook('beforeCreate', (obj, options) => {
//   obj.createdAt = Date.now();
// });

// project_model.addHook('beforeUpdate', (obj, options) => {
//   obj.updatedAt = Date.now();
// });

project_model.belongsTo(user_model, { foreignKey: 'creator', as: 'creatorUser' });
project_model.belongsTo(department_model, { foreignKey: 'departmentId', as: 'department' });

module.exports = project_model;
