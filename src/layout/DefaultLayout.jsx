
import { useEffect } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header/Header';
import { toTopPage } from '../hooks/scrollTop';

function DefaultLayout({ children }) {
    useEffect(() => {
        toTopPage(0)
    })
    return (
        <div className='bg-[#F8F9FB] overflow-hidden'>
            <Header />
            <div className='mt-[100px]'>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;