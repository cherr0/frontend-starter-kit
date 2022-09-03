import { Route, Routes } from 'react-router-dom';

import { Detail, History, Home, Purchase } from './views';
import Header from './views/layouts/HeaderLayout';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/history" element={<History />} />
                <Route path="/purchase" element={<Purchase />} />
            </Routes>
        </div>
    );
}

export default App;
