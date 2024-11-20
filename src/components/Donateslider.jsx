import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import donate1 from '../assets/images/donate1.png';
import donate2 from '../assets/images/donate2.png';
import donate3 from '../assets/images/donate3.png';
import { Link } from 'react-router-dom';

const Donateslider = () => {

    const donationItems = [
        { title: 'Girl Marriage Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 10,000 to ₹ 25,000', imageUrl: donate1, link: '/MarriageDetails' },

        { title: 'Girl Born Benefit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 7,500 to ₹ 15,000', imageUrl: donate2, link: '/GirlBorn' },

        { title: 'Accidental Death Benefit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 10,000 to ₹ 25,000', imageUrl: donate3, link: '/Accidental' },

        { title: 'Accidental Death Benefit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 10,000 to ₹ 25,000', imageUrl: donate3, link: '/Accidental' },

        { title: 'Accidental Death Benefit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 10,000 to ₹ 25,000', imageUrl: donate2, link: '/GirlBorn' },

        { title: 'Accidental Death Benefit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.', support: 'Support: ₹ 10,000 to ₹ 25,000', imageUrl: donate1, link: '/Makedonation' },
    ];

    const isMobile = window.innerWidth < 768;
    const chunkSize = isMobile ? 1 : 3;
    const groupedItems = [];

    for (let i = 0; i < donationItems.length; i += chunkSize) {
        groupedItems.push(donationItems.slice(i, i + chunkSize));
    }

    return (
        <div className="container-fluid mb-5 text-center">
            <div className="d-flex justify-content-center">
                <p className="line-left">A help to those who need it</p>
            </div>
            <h4 className="fs-2 fw-bold mb-4 text-center">
                Each donation is an essential<br />
                help for everyone's life
            </h4>

            <Carousel
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                interval={null}
                controls={true}
                indicators={false}>
                {groupedItems.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className={`d-flex justify-content-center ${isMobile ? 'flex-column align-items-center' : ''}`}>
                            {group.map((item, idx) => (
                                <Card style={{ width: '20rem', margin: '10px' }} key={idx}>
                                    <Card.Img variant="top" src={item.imageUrl} alt={item.title} height={'250px'} style={{backgroundSize:"cover", objectFit:"containr"}} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text className="text-muted">{item.support}</Card.Text>
                                        <Link to={item.link}>
                                            <Button variant="success" style={{ cursor: 'pointer' }}>
                                                View Details
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Donateslider;
