import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/db.js";


const Email = sequelize.define('EmailLog', {
    sentAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},
    {
        timestamps: true,
        // freezeTableName: true, //  table name to be equal to the model name
        tableName: 'EmailLogs' // explicitly set the table name to 'EmailLogs'
    }
);

export default Email;