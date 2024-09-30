const request = require('supertest');
const app = require('../server'); // Adjust this path to where your Express app is defined
const sequelize = require('../config/database');

// Run before all tests
beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sync database models
});

// Run after all tests
afterAll(async () => {
  await sequelize.close(); // Close database connection
});

describe('User Routes', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users/register')
      .send({
        username: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should fetch all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should fetch a user by ID', async () => {
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  it('should update a user', async () => {
    const response = await request(app)
      .put('/users/1')
      .send({ username: 'John Updated' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('username', 'John Updated');
  });

  it('should delete a user', async () => {
    const response = await request(app).delete('/users/1');
    expect(response.statusCode).toBe(204);
  });
});
