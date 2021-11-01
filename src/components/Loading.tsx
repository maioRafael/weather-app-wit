import { CircularProgress } from "@material-ui/core";
import { LoadingElement } from "../styles/style";

export const Loading = () => {
    return (
        <LoadingElement>
            <CircularProgress color="primary" />
            <div>Loading</div>    
        </LoadingElement>
    );
    
}