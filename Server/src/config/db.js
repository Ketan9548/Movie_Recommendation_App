import { Sequelize } from "sequelize";


const sequelize = new Sequelize('movie_recommendation', 'root', 'Mysqlkapil@321', {
    host: 'localhost',
    dialect: 'mysql'
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully..........');
    } catch (error) {
        console.error('Unable to connect to the database opps.......', error);
    }
}

export { sequelize, connectDB };