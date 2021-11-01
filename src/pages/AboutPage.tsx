import { AboutWrapper } from "../styles/style";

export const AboutPage = () => {

    console.log(1);

    return (

        <AboutWrapper>

            <h1>Weather App</h1>

            <p>Developed as requirement for the WIT Software selective process </p>

            <h2>Powered by</h2>

            <p>React Js</p>

            <p>Recharts</p>

            <p>Material UI</p>

            <p>Styled Components</p>

            <p>OpenWeatherMap</p>

            <p> Developed by <strong>Rafael Maio</strong> </p>

            <p>
                <a href="mailto:rafael.amaio@gmail.com">E-mail</a>
            </p>

            <p>
                <a href="https://www.linkedin.com/in/rafael-de-andrade-maio-2ba4b437/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            
        </AboutWrapper>
    );

}
