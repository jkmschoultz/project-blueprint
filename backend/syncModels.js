const sequelize = require('./config/database');
const User = require('./models/User');

async function syncModels() {
  try {
    await sequelize.sync({ force: false }); // Use { force: true } to drop tables and recreate them
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    await sequelize.close(); // Close the connection when done
  }
}

syncModels();
