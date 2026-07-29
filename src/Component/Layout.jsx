import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className='min-h-screen bg-black flex flex-col'>
            <Header />
            <main className='flex-1 max-w-6xl w-full mx-auto px-3'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;