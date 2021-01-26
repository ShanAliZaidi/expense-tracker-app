import Balance from './componenets/Balance';
import Header from './componenets/header';
import History from './componenets/History';
import Transaction from './componenets/Transaction';
import GlobalProvider from './context/GlobalState';

import './App.css';




function App() {
  return (
    
    <GlobalProvider>
      <div className="container">
        <Header/>
        <Balance/>
        <History/>
        <Transaction/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
