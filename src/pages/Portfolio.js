import React from "react";
import { Container, Row, Col, Heading } from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import journalImage from '../images/journal.PNG';
import surfImage from '../images/findsurfspot.PNG';
import weatherImage from '../images/weatherdashboard.PNG';
import burgerImage from '../images/burger.PNG';
import codeImage from '../images/codequiz.PNG';
import directoryImage from '../images/directory.PNG';

function Portfolio() {
    return (
        <div>
            <Header/>
            <Container containerclass="container p-5">
                <Heading/>
                <Row>
                       <Col><Project image={journalImage} title="Gratitude Journal" deployedlink="https://safe-dawn-22162.herokuapp.com/" githublink="https://github.com/CazB67/gratitude-journal" description="A gratitude journal app where users can log gratitudes and enact acts of kindness. Featuring node js, sequelize, Bulma CSS, passport and Facebook authentication."/></Col>
                       <Col><Project image={surfImage}title="Find Surf Spot" deployedlink="https://cazb67.github.io/find-surf-spot-app/" githublink="https://github.com/CazB67/find-surf-spot-app" description="An app that uses the Willy Weather API to recommend the best surf sports in the Perth metro area. It uses Foundation CSS Framework and JQuery."/></Col> 
                       <Col><Project image={weatherImage} title="Weather Dashboard" deployedlink="https://cazb67.github.io/weather-dashboard/" githublink="https://github.com/CazB67/weather-dashboard" description ="A weather dashboard that runs in the browser and features dynamically updated HTML and uses the Open Weather API to get weather data for cities."/></Col> 
                    
                </Row>
                <Row>
                       <Col><Project image={burgerImage} title="Burger App" deployedlink="https://blooming-chamber-66556.herokuapp.com/" githublink="https://github.com/CazB67/burger" description="A burger logger app using MySQL, Node, Express, Handlebars and an ORM that follows the the MVC design pattern and CRUD routes"/></Col>
                       <Col><Project image={codeImage}title="Code Quiz" deployedlink="https://cazb67.github.io/code-quiz/" githublink="https://github.com/CazB67/code-quiz" description="A timed code quiz with multiple-choice questions using Javascript and Bootstrap, that saves scores to local storage."/></Col> 
                       <Col><Project image={directoryImage} title="Employee Directory" deployedlink="https://mighty-sierra-02848.herokuapp.com/" githublink="https://github.com/CazB67/employee-directory" description ="A react app that sorts employees according to firstname and filters employees on input"/></Col> 
                </Row>
            </Container>
            <Footer footerText = {"© 2020 Caroline Bates"}/>
        </div>
    )
}

export default Portfolio;