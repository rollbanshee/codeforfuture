import './home.css';
import Header from '../../components/header/header';
import Search from '../../components/search/search';

function Home() {
    return (
        <main>
            <Header />
            <section><Search /></section>
            <aside></aside>
        </main >
    );
}

export default Home;