import './App.css';

/* import libraries */
import {useState, useEffect} from 'react';

/* import firebase config */
import { db } from './firebase.js';

/* import components */
import Header from "./components/Header/Header";
import Stories from './components/Stories/Stories';
import FeedForm from './components/FeedForm/FeedForm';
import Feed from './components/Feed/Feed';

function App() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection('fbPosts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map((doc)=>{
        return {info:doc.data()}
      }));
    })
  },[]);

  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />
      {
        posts.map((val)=>{
            <Feed 
              name={val.name}
              hour={val.hour}
              content={val.content}
            />
        })
      }
    </div>
  );
}

export default App;
