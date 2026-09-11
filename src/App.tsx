import { Navbar, Welcome } from '../src/components/index';
import { Dock } from './components';

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />
        </main>
    );
};

export default App;