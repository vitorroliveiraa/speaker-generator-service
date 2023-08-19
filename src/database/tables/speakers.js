const { connect } = require('../db');

const createTable = async () => {
  const client = await connect();

  const speakersTable = `
  CREATE TABLE IF NOT EXISTS
      speakers(
        id SERIAL PRIMARY KEY,
        id_first_speaker UUID DEFAULT uuid_generate_v4(),
        date_first_speech DATE,
        id_second_speaker UUID DEFAULT uuid_generate_v4(),
        date_second_speech DATE,
        id_third_speaker UUID DEFAULT uuid_generate_v4(),
        date_third_speech DATE
      )`;
  client.query(speakersTable)
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
