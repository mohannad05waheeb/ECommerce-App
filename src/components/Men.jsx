import Product from './Product'; 
import shose from '../assets/shose.png'; 
import shose3 from '../assets/shose3.jpg'; 
import Footer from './Footer'; 
import { imagesArray2 } from './Home';
import { imagesArray4 , imagesArray6} from './Collections'
const Men = () => {
    return (    
        <div>
            <div className="flex justify-center items-center mt-6">
                <h2 className="uppercase title-style ">
                    mens collection
                </h2>
            </div>
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product20"
                company="Adidas" 
                name="jordan mars" 
                price="$100"
                discount="$120"  
                images={imagesArray2}        
            />
            <Product 
                srcImg={shose}
                id="product21"
                company="Nike" 
                name="cosmic unity" 
                price="$72"   
                images={imagesArray4}        
            />
            <Product 
                srcImg={shose3}
                id="product22"
                company="Adidas" 
                name="nike" 
                price="$30" 
                images={imagesArray6}
            />     
            </div>   
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product23"
                company="Nike" 
                name="jordan mars" 
                price="$100"
                discount="$120"
                images={imagesArray2}        
            />
            <Product 
                srcImg={shose}
                id="product24"
                company="Nike" 
                name="cosmic unity" 
                price="$90"
                discount="$130"   
                images={imagesArray4}      
            />
            <Product 
                srcImg={shose3}
                id="product25"
                company="Adidas" 
                name="nike" 
                price="$30" 
                images={imagesArray6}      
            />     
            </div>  
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product26"
                company="Nike" 
                name="jordan mars" 
                price="$100"
                discount="$120"    
                images={imagesArray2}        
            />
            <Product 
                srcImg={shose}
                id="product27"
                company="Nike" 
                name="cosmic unity" 
                price="$90"
                discount="$130"    
                images={imagesArray4}        
            /> 
            </div>   
            <div className='mt-10'>
                <Footer />
            </div>
        </div>   
    );
};
export default Men;