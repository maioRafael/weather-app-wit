import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { AppBar, Box, Button, Toolbar, IconButton, Typography } from '@material-ui/core';


export const MainNavigation = () => {

    const history = useHistory();

    const appName = process.env.REACT_APP_NAME;

    function aboutHandler() {
        history.push('/about');
    }

    function homeHandler(){
        history.push('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="default" >
                <Toolbar>
                    <IconButton 
                         onClick={homeHandler} 
                         edge="start" 
                         color="primary" 
                         aria-label="menu" 
                         sx={{ mr: 2 }}>

                        <HomeIcon/>

                    </IconButton>
                    <Typography 
                         onClick={homeHandler}
                         variant="h6"
                         color="inherit" 
                         component="div" 
                         sx={{ flexGrow: 1 }}>
                        {appName}
                    </Typography>

                    <Button color="primary" onClick={aboutHandler}> 
                        About
                    </Button>
                  
                </Toolbar>
            </AppBar>
        </Box>
    );
}

