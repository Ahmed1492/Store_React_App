import './Card.scss';

export const Card = ({ data }) => {
    return (
        <div className='cards mt-4'>
            <div className="singleCard">
                <div className="image">
                    <img className='img1' src={data.images[0]} alt="" />

                    {data.images[1] &&
                        <img className='img2' src={data.images[1]} alt="" />

                    }
                </div>
                <div className="description mt-3">
                    <h4>{data.en_name}</h4>
                    <div className='d-flex justify-content-around'>
                        <del>${data.price}</del>
                        <span>${data.price_after_discount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
