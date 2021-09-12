import { makeStyles } from "@material-ui/core/styles";
import { educationItems } from "../../../../data/education";
import EducationItem from "./EducationItem";

const useStyles = makeStyles((theme) => ({
    root: {},
}));

export default function Education() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {educationItems.map((item, index) => {
                return <EducationItem key={index} {...item} />;
            })}
        </div>
    );
}
