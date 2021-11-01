import { Route, Switch } from 'react-router-dom';

import { Layout } from './components/layout/Layout';

import { AboutPage } from './pages/AboutPage';
import { WeatherPage } from './pages/WeatherPage';


export const App = () => {

    return (
        <Layout>
            <Switch>
                <Route path='/' exact={true}>
                    <WeatherPage />
                </Route>
                <Route path='/about' exact={true}>
                    <AboutPage />
                </Route>
            </Switch>
        </Layout>
    );

}