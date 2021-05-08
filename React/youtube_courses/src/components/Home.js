import React from 'react';
import { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(() => {
        document.title = "Home || CoursesOnBeats";
    }, []);

    return (
        <div>
            <Jumbotron className="text-center">
                <h1>LearningPointWith Totorial</h1>
                <p>This is Developed for only learning purpose you just want Learn anything which your have.
                    there is a lots of content put on there.</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    );
};
export default Home;