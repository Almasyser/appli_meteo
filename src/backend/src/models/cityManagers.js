const AbstractManager = require('./AbstractManager');
class cityManagers extends AbstractManager{
  constructor(){
    super({
      table: "cities"
    })
  }
  modify(cityId, el) {
    const keys = Object.keys(el);
    const values = Object.values(el);
    const valueQuery = keys.map((key) => `${key} = ?`).join(", ");
    return this.pool.query(
      `UPDATE ${this.table} SET ${valueQuery} WHERE idCities = ?;`,
      [...values, cityId]
    );
  }
  findAllDepartments() {
    return this.pool.query(`select distinct department_name, department_number from  ${this.table} order by department_number`);
  }
  findAllRegions() {
    return this.pool.query(`select distinct region_name from  ${this.table}`);
  }
  findCitiesByDep(depId){
    return this.pool.query(`select label, zip_code from ${this.table} where department_number=?;`,[depId]);
  }
}
module.exports = cityManagers;