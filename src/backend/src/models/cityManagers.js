/* eslint-disable no-undef */
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
  findCity(item){
    return this.pool.query(`select distinct city_code from ${this.table} where city_code like '%${item}%';`)
  }
  findZipCode(item){
    return this.pool.query(`select distinct zip_code from ${this.table} where zip_code like '${item}%';`)
  }
  findDepartment(item){
    return this.pool.query(`select distinct department_name from ${this.table} where department_name like '${item}%';`)
  }
  findRegion(item){
    return this.pool.query(`select distinct region_name from ${this.table} where region_name like '${item}%';`)
  }
  findCitiesByDep(depId){
    return this.pool.query(`select city_code, zip_code from ${this.table} where department_number=? order by zip_code;`,[depId]);
  }
  findCitiesByCode(codeId){
    return this.pool.query(`select city_code, zip_code from ${this.table} where zip_code=? order by city_code;`,[codeId]);
  }
  findDatasByCity(cityName){
    return this.pool.query(`select city_code, zip_code,latitude, longitude, department_name, department_number, region_name from ${this.table} where city_code like '${cityName}%' order by city_code;`);
  }
}

module.exports = cityManagers;