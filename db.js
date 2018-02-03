const mysql = require('mysql');

let pool = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  database: 'node',
  user: 'root',
  password: ''
});

exports.query = function (id, props) {
  let q = `SELECT
                  event as event,
                  date,
                  event_value
            FROM
                  stats
            WHERE
                  partner_id=${id}
            AND(
                    event='PAYMENT'
                  OR
                    event='REGISTRATION'
                  OR
                    event = 'LINK_VISITOR')`;
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      connection.query(
        q,
        props,
        function (err, res) {
            if (err) reject(err);
            else resolve(res);
        }
      );
      connection.release();
    });
  });
};
