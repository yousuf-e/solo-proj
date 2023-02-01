const { Pool } = require('pg');

const PG_URI = 'postgres://ofmcywdl:ZACmgqpWCiQw2tqfChRTBlbvHHFyPT0-@baasu.db.elephantsql.com/ofmcywdl';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {  // are params and callback needed?
    console.log(`executed ${text} query`);
    return pool.query(text, params, callback);
  }
}
