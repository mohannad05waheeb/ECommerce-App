import map from '../assets/map.png';
import location from '../assets/location.svg';
import envelope from '../assets/envelope.svg';
import Footer from '../components/Footer';
const Contact = () => {
    return (       
        <div>
            <section className='contact flex justify-center items-center'>
                <div className='bg-white flex p-10 gap-8 contact-content'>
                    <div>
                        <div className='flex gap-2'>
                            <img src={location} alt="Location" className='w-5' />
                            <p className='opacity-70'>Egypt Kafr El-shaikh, Baltim</p>
                        </div>
                        <div className='flex gap-2 mt-6'>
                            <img src={envelope} alt="Envelope" className='w-5' />
                            <p className='opacity-70'>mohannadwaheeb05@gmail.com</p>
                        </div>
                        <div>
                            <img src={map} alt="Map" className='w-96 mt-10' loading='lazy' />
                        </div>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <input type="text" placeholder='Name' className='contact-button' />
                        <br />
                        <input type="email" placeholder='Email' className='contact-button' />
                        <br />
                        <input type="text" placeholder='Message' className='contact-button h-20' />
                        <br />
                        <button className='submit bg-orange-500 text-white rounded-lg w-[400px] h-14 font-bold mt-6'>SUBMIT</button>
                    </form>                        
                </div>
            </section>
            <Footer />
        </div>               
    );
};  
export default Contact;  