import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
// import { Provider } from 'react-redux';
import { useState } from 'react';

function App() {
  const [userData, setuserData] = useState(null);

  function parentComp(userdata) {
    setuserData(userdata);
  }
  return (
    <>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage parentCallback={parentComp} />} />
            <Route path="/profile" element={<ProfilePage userData={userData} />} />
          </Routes>
        </BrowserRouter>
      {/* </Provider> */}
      
      
    </>
  );
}

export default App;
