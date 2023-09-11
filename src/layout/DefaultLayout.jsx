
import Footer from '../component/Footer';
import Header from '../component/Header/Header';

function DefaultLayout({ children }) {
    return (
        <div className='bg-[#F8F9FB]'>
            <Header />
            <div className='mt-[100px]'>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;