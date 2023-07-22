
import Header from '../component/Header';
import Footer from '../component/Footer';

function DefaultLayout({ children }) {
    return ( 
    <div>
        <Header />
        <div className='mt-[100px]'>
            <div>{children}</div>
        </div>
        <Footer />
    </div>
     );
}

export default DefaultLayout;