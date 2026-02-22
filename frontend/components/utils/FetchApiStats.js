import axios from "axios";
function FetchApiStats( url, updateStatsArray ){
  const fetchData = async () => {
    if (!url) return;
     try {
      const res = await axios.get(url);
      await updateStatsArray(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finaly stats");
    }
  };
  fetchData();
}
export default FetchApiStats;