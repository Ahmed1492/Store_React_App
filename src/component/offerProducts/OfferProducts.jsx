import { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import './OfferProducts.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const OfferProducts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://react-ecommerce.activegroup-eg.com/api/home').then((res) => setData(res.data.data.offers));
        };
        fetch();
    }, []);
    return (
        <div className="offerSection py-4 ">
            <h1 className='text-center'>Offers</h1>
            <div className='offerProducts d-flex  justify-content-between  flex-wrap flex-row  p-4'>
                {data.map((item) =>
                    <Link to={`/product/${item.item_id}`} key={item.item_id}>
                        <Card data={item} />
                    </Link>
                )
                }
            </div>
        </div>
    );
};
