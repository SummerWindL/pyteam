const port = 3002;
let is_production = process.env.NODE_ENV === 'production' ? true : false;
module.exports = {
  port: port,
  base_url: is_production ? 'https://team.yiiu.co' : `http://localhost:${port}`,
  ws_url: is_production ? 'https://team.yiiu.co' : `http://localhost:${port}`,
  ws_secure: is_production,
  admins: [ 'admin' ], // 管理员用户名
  mysql: is_production
    ? {
        host: 'localhost',
        user: 'root',
        password: '123123',
        database: 'pyteam'
      }
    : {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'pyteam'
      },
  errorCode: {
    SUCCESS: 200,
    FAILURE: 201,
    TOKEN_INVALID: 202
  },
  taskStatus: {
    WAIT: '待处理',
    PROCESSING: '进行中',
    FINISH: '已完成'
  },
  wsCode: {
    PROJECTS: 901,
    TASKS: 902,
    CREATE_PROJECT: 903,
    CREATE_TASK: 904,
    FETCH_TASKS: 905,
    FETCH_PROJECTS: 906,
    UPDATE_STATUS: 907,
    UPDATE_PROJECT: 908,
    FETCH_TASK: 909,
    TASK: 910,
    CREATE_TASK_MESSAGE: 911,
    FETCH_MY_TASKS: 912,
    MY_TASKS: 913
  }
};
