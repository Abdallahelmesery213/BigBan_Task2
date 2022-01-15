import React from 'react';
import "./Products.css";
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Products = ({products}) => {
    const myData1 = products.map(item => (
        <div key={item.id} className='product text-center'>
            <div className='img1'>
                <img src={item.prize_id.image} alt={item.prize_id.name} className='img-fluid' />
            </div>
            <div className='title'>
                <h5>{item.prize_id.name}</h5>
                <p className='p1'>{item.prize_id.description}</p>
            </div>
            <p className='p2'>{item.prize_id.updated_at}</p>
        </div>
    ));
    const myData2 = products.map(item => (
        <div key={item.id} className='product text-center'>
            <div className='img2'>
                <img src={item.product_id.image} alt={item.product_id.name} className='img-fluid' />
            </div>
            <div className='title'>
                <h5>{item.product_id.name}</h5>
                <p className='p1'>{item.product_id.description}</p>
            </div>
            <p className='p2'>{item.product_id.updated_at}</p>
        </div>
    ));
    const percentage = 25;
    return (
        <div className='my-products'>
            <div className=' progressBar text-center' >
                    <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                        pathColor:'rgb(122 17 162)',
                        backgroundColor:'#fff',
                    })}>
                        <span className='inside-border'>
                            <h4>382</h4>
                            <h5>SOLD</h5>
                            <h6>OUT OF </h6>
                            <h6>975</h6>
                        </span>
                    </CircularProgressbarWithChildren>;
                </div>
            <div className='row'>
                <div className='col-md-6 mb-5'>{myData1}</div>
                <div className='col-md-6'>{myData2}</div>
            </div>
        </div>
    )
}

export default Products;
