import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderCampsite({campsite}) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            //fill each div based on the id of that comment
                            <div key={comment.id}>
                                <p>
                                    {comment.text}<br />
                                        --{comment.author},
                                        {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return <div />;
}

function CampsiteInfo(props) {
    if (props.campsite) { //if there is a campsite, return a div with className of row
        return (
            <div className="row">
                <RenderCampsite campsite={props.campsite} />
                <RenderComments comments={props.campsite.comments} />
            </div>
        );
    }
    return <div />; //if not, then return an empty div
}

export default CampsiteInfo;