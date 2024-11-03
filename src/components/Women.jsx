import Product from './Product';
import Footer from './Footer'; 
import shose2 from '../assets/shose2.jpg'; 
import { imagesArray , imagesArray3 } from './Home';
import { imagesArray5 } from './Collections';
const Women = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-6'>
                <h2 className='uppercase title-style'>
                    womens collection
                </h2>
            </div>
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product28"
                company="Nike" 
                name="valour blue" 
                price="$72"      
                images={imagesArray} 
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product29"
                company="Nike" 
                name="racer blue" 
                price="$120"  
                images={imagesArray3}                
            />
            <Product 
                srcImg={shose2}
                id="product30"
                company="Nike" 
                name="vans" 
                price="$90" 
                images={imagesArray5}
            />     
            </div>  
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product31"
                company="Nike" 
                name="valour blue" 
                price="$72"   
                images={imagesArray} 
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product32"
                company="Nike" 
                name="racer blue" 
                price="$120"     
                images={imagesArray3} 
            />
            <Product 
                srcImg={shose2}
                id="product33"
                company="Nike" 
                name="vans" 
                price="$90" 
                images={imagesArray5} 
            />     
            </div>  
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product34"
                company="Nike" 
                name="valour blue" 
                price="$72"  
                images={imagesArray} 
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product35"
                company="Nike" 
                name="racer blue" 
                price="$120"    
                images={imagesArray3} 
            /> 
            </div>  
            <div className='mt-10'>
                <Footer />
            </div>
        </div> 
    );
};
export default Women;