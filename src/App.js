import {useState, useEffect} from "react";
import axios from "axios";
import Products from './components/Products/Products';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://wawinner.its.ae/dev/public/api/v1/front-end/campaign');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="App mt-5 container ">
      {loading && <p className="text-center">Loading....</p>}
      {!loading && (
        <Products products={data} />
      )}
    </div>
  );
}

export default App;
