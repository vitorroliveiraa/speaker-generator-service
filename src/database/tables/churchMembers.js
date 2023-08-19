const { connect } = require('../db');

const createTable = async () => {
  const client = await connect();

  const churchMembersTable = `
  CREATE TABLE IF NOT EXISTS
      church_members(
        id SERIAL PRIMARY KEY,
        name VARCHAR(300)
      )`;
  client.query(churchMembersTable)
    .then((res) => {
      console.log('SQL executed successfully!');
      // client.end();
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(0);
    });
};

createTable();
