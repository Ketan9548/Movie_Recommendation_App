import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/db.js";

const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100]
        }
    }
},
    {
        timestamps: true,
        // freezeTableName: true, //  table name to be equal to the model name
        tableName: 'Users' // explicitly set the table name to 'Users'
    }
);

User.associate = (models) => {
    User.belongsToMany(models.Movie, {
        through: models.EmailLog,
        foreignKey: 'userId',
    });
};

export default User;
