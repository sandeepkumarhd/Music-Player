import axios from "axios";
import Music from "./Components/Music";

function App() {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/%22new%22',
    headers: {
      'X-RapidAPI-Key': '2bc543eb5cmshd7e0e48ef9f825dp1f1d38jsnd804f8b5b9c6',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  
  const getSongsHandler = () =>{
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }



  
  return (
    <div>
      <Music/>
    </div>
  );
}
export default App;
