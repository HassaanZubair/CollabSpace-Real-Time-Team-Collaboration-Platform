const request = require('supertest');
const app = require('../src/app'); 
const sequelize = require('../src/config/db'); 

// beforeAll(async () => {
//   await sequelize.sync(); // wait for database to be ready
// });

afterAll(async () => {
  await new Promise(resolve => setTimeout(resolve, 500)); // wait 0.5s
  await sequelize.close();
});

describe('User API', () => {
  it('should return 200 ok with users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });
});
