module.exports = (sequelize, Sequelize) => {
  const EventRecord = sequelize.define("eventRecord", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    eventType: {
      type: Sequelize.STRING,
    },
    eventTime: {
      type: Sequelize.DATE,
    },
  });

  return EventRecord;
};
