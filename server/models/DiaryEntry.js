// // server/models/DiaryEntry.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Adjust the path as necessary

// // Define the DiaryEntry model
// const DiaryEntry = sequelize.define('DiaryEntry', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//     },
//     createdAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//     },
//     updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
// });

// // Export the model
// module.exports = DiaryEntry;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DiaryEntry = sequelize.define('DiaryEntry', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    entry: {  // This matches the field name we're using in the API
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
    tableName: 'DiaryEntries'  // Explicitly set the table name
});

module.exports = DiaryEntry;