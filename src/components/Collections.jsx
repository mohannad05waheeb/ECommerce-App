import Product from './Product';
import shose from '../assets/shose.png'; 
import shose2 from '../assets/shose2.jpg'; 
import shose3 from '../assets/shose3.jpg'; 
import Footer from './Footer';
import { imagesArray , imagesArray2 , imagesArray3 } from './Home'; 
export const imagesArray4 = [
    shose , shose , shose , shose     
];
export const imagesArray5 = [
    shose2 , shose2 , shose2 , shose2    
];
export const imagesArray6 = [
    shose3 , shose3 , shose3 , shose3    
];
const Collections = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-6'>
                <h2 className='uppercase title-style title'>explore our products</h2>
            </div>
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product4"
                company="Nike" 
                name="valour blue" 
                price="$72"     
                images={imagesArray}     
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product5"
                company="Adidas" 
                name="jordan mars" 
                price="$100" 
                discount="$120" 
                images={imagesArray2}
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product6"
                company="Nike" 
                name="racer blue" 
                price="$120" 
                images={imagesArray3}
            />     
            </div>   
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={shose}
                id="product7"
                company="Nike" 
                name="cosmic unity" 
                price="$72"  
                images={imagesArray4}            
            />
            <Product 
                srcImg={shose2}
                id="product8"
                company="Nike" 
                name="vans" 
                price="$90"       
                images={imagesArray5}     
            />
            <Product 
                srcImg={shose3}
                id="product9"
                company="Nike" 
                name="racer blue" 
                price="$30"   
                images={imagesArray6}        
            />     
            </div>   
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product10"
                company="Nike" 
                name="valour blue" 
                price="$72"  
                images={imagesArray}        
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product11"
                company="Adidas" 
                name="jordan mars" 
                price="$100" 
                discount="$20" 
                images={imagesArray2}
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product12"
                company="Nike" 
                name="racer blue" 
                price="$120" 
                images={imagesArray3}
            />     
            </div> 
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={shose}
                id="product13"
                company="Nike" 
                name="cosmic unity" 
                price="$90"
                discount="$130"  
                images={imagesArray4}        
            />
            <Product 
                srcImg={shose2}
                id="product14"
                company="Nike" 
                name="vans" 
                price="$90"  
                images={imagesArray5}         
            />
            <Product 
                srcImg={shose3}
                id="product15"
                company="Nike" 
                name="racer blue" 
                price="$30" 
                images={imagesArray6}
            />     
            </div>  
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product16"
                company="Nike" 
                name="valour blue" 
                price="$72"    
                images={imagesArray}      
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product17"
                company="Adidas" 
                name="jordan mars" 
                price="$100" 
                discount="$120" 
                images={imagesArray2}
            />
            <Product 
                srcImg={"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"}
                id="product18"
                company="Nike" 
                name="racer blue" 
                price="$120" 
                images={imagesArray3}
            />     
            </div>  
            <div className='products-container p-4 mx-auto'>
            <Product 
                srcImg={shose}
                id="product19"
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
export default Collections;