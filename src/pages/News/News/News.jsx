import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const singleNews=useLoaderData();
    console.log(singleNews);
    const {image_url,title,details,category_id}=singleNews;
    return (
 <>    
<div>
<Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
            <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
      </Card.Body>
    </Card>
</div>

<div>
  <EditorsInsights></EditorsInsights>
</div>
</>
    );
};

export default News;