import ReactDOM from 'react-dom'

import Navbar from './components/navbar';
import Corpo from './components/corpo';
import FundoMobile from './components/fundo-mobile';

function App() {
    return (
        <>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </>
    )
}

const root = document.querySelector('.root');

ReactDOM.render(App(), root)