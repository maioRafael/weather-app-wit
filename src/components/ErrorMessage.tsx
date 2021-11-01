import { Alert } from "@material-ui/core";
import { ContentWrapper } from "../styles/style";

type ErrorProperties = {
    messages: String[]
}


export const ErrorMessage = ( { messages } : ErrorProperties ) => {
    return (
        <ContentWrapper>
            <Alert severity="error">
                { messages.map( (err, i) => { return <div key={ i }> { err }</div> } ) } 
            </Alert>
        </ContentWrapper>
        
    );
}