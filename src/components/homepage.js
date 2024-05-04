import { GoogleGenerativeAI } from "@google/generative-ai";
import React , {useState} from 'react';

const genAI = new GoogleGenerativeAI('AIzaSyCarC7H8B3StYLb3hrIVV3BpdonBKHuFjs');
const model = genAI.getGenerativeModel({ model: "gemini-pro" });




const Home = () => {
    const [search, setSearch] = useState('');
    
    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    // Generative AI Call to fetch dishes

async function aiRun() {
    const prompt = `traffic rules related to  ${search} city `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
  }
  
  
  
  const [aiResponse, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  // button event trigger to consume gemini Api
  
  const handleClick = () => {
    aiRun();
  }
  
    
    return (
        <div>
    <h1>Generative AI!</h1>
    <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

    <div style={{ display: 'flex' }}>
      <input placeholder='Search City ' onChange={(e) => handleChangeSearch(e)} />
      <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
    </div>

    {
      loading == true && search != '' ?
        <p style={{ margin: '30px 0' }}>Loading ...</p>
        :
        <div style={{ margin: '30px 0' }}>
          <p>{aiResponse}</p>
        </div>
    }
  </div>
    );
  };
  
  export default Home;
  