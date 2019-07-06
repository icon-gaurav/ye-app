import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
    return <Typography component="div">{ props.children }</Typography>;
}

function LinkTab(props) {
    return (
        <Tab
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [value1,setValue1] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChange1(event, newValue) {
        setValue1(newValue);
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={handleChange}
                    centered
                >
                    <LinkTab label="Tasks" href="/drafts" />
                    <LinkTab label="Recruit" href="/trash" />
                </Tabs>
            </Paper>
            {value === 0 && <TabContainer>Tasks</TabContainer>}
            {value === 1 && (
                <TabContainer>
                    <Paper className={classes.root}>
                        <Tabs
                            value={value1}
                            textColor="primary"
                            indicatorColor="primary"
                            onChange={handleChange1}
                            centered
                        >
                            <LinkTab label="NEW(0)" href="#" />
                            <LinkTab label="WAITLISTED(0)" href="#" />
                            <LinkTab label="SELECTED(0)" href="#" />
                            <LinkTab label="COMPLETED(0)" href="#" />
                            <LinkTab label="REJECTED(0)" href="#" />

                        </Tabs>
                    </Paper>
                    {value1 === 0 && <TabContainer>New</TabContainer>}
                    {value1 === 1 && <TabContainer>Waitlisted</TabContainer>}
                    {value1 === 2 && <TabContainer>Selected</TabContainer>}
                    {value1 === 3 && <TabContainer>Completed</TabContainer>}
                    {value1 === 4 && <TabContainer>Rejected</TabContainer>}
                </TabContainer>
            )}
        </div>
    );
}

export default NavTabs;