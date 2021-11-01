import { MainNavigation } from './MainNavigation';

type Properties = {

    children: JSX.Element

}

export const Layout = ( props: Properties ) => {

    return (

        <div>

            <MainNavigation />

            <main>

                {props.children}

            </main>

        </div>
        
    );

}