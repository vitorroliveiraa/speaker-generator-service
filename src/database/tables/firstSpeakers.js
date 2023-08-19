const { connect } = require('../db');

const createTable = async () => {
  const client = await connect();

  const firstSpeakersTable = `
  CREATE TABLE IF NOT EXISTS
      first_speakers(
        id SERIAL PRIMARY KEY,
        id_member VARCHAR(60),
        speech_theme VARCHAR(300)
      )`;
  client.query(firstSpeakersTable)
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
