import { useState, useEffect } from "react";
import axios from 'axios';
import "./coordonnees.css";
import { PropTypes } from 'prop-types';
function Coordonnees (props){
  // eslint-disable-next-line react/prop-types
  const { setCityDatas, setSearchModal } = props;
// implementer la sortie de la modal: (on submit?)
  const [searchName, setSearchName]=useState("");
  const [searchDep, setSearchDep]=useState("");
  const [searchCP, setSearchCP] = useState("");
  const [cityCoord, setCityCoord] = useState();
// completer les fetch: recherche par region departement city ou zip_code
// factoriser au maximum
  const getCoordonnees = async () =>{
    try {
        const response = await axios.get(`http://localhost:5050/cities`);
        setCityCoord(response.data); // supprimer la redondance
        setCityDatas(cityCoord);

    } catch (error) {
        console.error(error);
    }
}
// executer seulement si cityDatas not undefined
useEffect(() =>{
    getCoordonnees();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);


// 
  const handleSearchName = (e) =>{
    setSearchName(e.target.value);
  }
  const handleSearchDep = (e)=>{
    setSearchDep(e.target.value);
  }
  const handleSearchCP = (e) =>{
    setSearchCP(e.target.value);
  }
  // finaliser le form de recherche. stocker dans cityDatas. Verifier le format et exploiter les coordonnées dans home
  return(
    <>
      
      <div className="searchBar">
        <input type="text" name="searchbar" id="searchName" placeholder="Ville" onChange={handleSearchName}/>
        <input type="text" name="searchbar" id="searchDep" placeholder="Departement" onChange={handleSearchDep}/>
        <input type="text" name="searchbar" id="searchCP" placeholder="Code postal" onChange={handleSearchCP}/>
        <p className="label">latitude</p>
        <p className="label">longitude</p>
      </div>
        <div className="search-results">
        {cityCoord && cityCoord
            .filter((el) => !searchName || (el.city_code && el.city_code.toLowerCase().includes(searchName.toLowerCase())))
            .filter((el) => !searchDep || (el.department_name && el.department_name.toLowerCase().includes(searchDep.toLowerCase())))
            .filter((el) => !searchCP || (el.department_number && el.department_number.toString().includes(searchCP.toString())))
            .map((el) =>{
            return(
                <div key={el.insee_code} className="search-result">
                    <div>{el.city_code}</div>
                    <div>{el.department_name}</div>
                    <div>{el.department_number}</div>
                    <div>{parseFloat(el.latitude,10).toFixed(2)}</div>
                    <div>{parseFloat(el.longitude,10).toFixed(2)}</div>

                </div>
            )
        })}
      </div>
            <button type="button" onClick={()=>setSearchModal(false)}>Valider</button>
    </>
    )
}
Coordonnees.propType = {
  setCityDatas: PropTypes.any
  
}
export default Coordonnees;
// ajouter button handleExit. Valider le choix. valider cityDatas (format, datas).retour vers home.