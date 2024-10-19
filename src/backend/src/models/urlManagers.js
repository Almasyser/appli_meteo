/* eslint-disable no-undef */
const AbstractManager = require('./AbstractManager');
class urlManagers extends AbstractManager{
  constructor(){
    super({
      table: "urls"
    })
  }
  findUrls(){
    return this.pool.query(`select name, lexique from ${this.table}`);
  }
  findUrlById(urlId){
    return(`select name, lexique from ${this.table} where idurls=?`, [urlId]);
  }
  addUrl(el) {
    return this.pool.query(
      `INSERT INTO ${this.table} (name, lexique) values (?, ?)`,
      [el.name, el.lexique]
    );
  }
  deleteUrl(urlId) {
    return this.pool.query(`DELETE FROM ${this.table} WHERE idurls = ?`, [
      urlId]);
  }
}
module.exports = urlManagers;