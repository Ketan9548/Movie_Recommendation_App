import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/db.js";


const movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tmdbId: {
        type: DataTypes.INTEGER,
        unique: true
    },
    genres: {
        type: DataTypes.JSON,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
    }
},
    {
        timestamps: true,
        // freezeTableName: true, //  table name to be equal to the model name
        tableName: 'Movies'
    }
);

movie.associate = (models) => {
    movie.belongsToMany(models.User, {
        through: models.EmailLog,
        foreignKey: 'movieId',
    });
};

export default movie;
