/* eslint-disable no-undef */
const AbstractManager = require('./AbstractManager');
class urlManagers extends AbstractManager{
  constructor(){
    super({
      table: "urls"
    })
  }
  findUrls(){
    return this.pool.query(`select id, idurls, name from ${this.table}`);
  }
  findUrlById(urlId){
    return this.pool.query(`select id, idurls, name  from ${this.table} where id = ?`, [urlId]);
  }
  addUrl(el) {
    console.log("############ ",el);
    return this.pool.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [el]
    );
  }
  deleteUrl(urlId) {
    return this.pool.query(
      `DELETE FROM ${this.table} WHERE id = ?`, [urlId]);
  }
}
module.exports = urlManagers;