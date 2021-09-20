// React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Contexts
import { ProjectProvider } from './contexts/ProjectsContext';
import { WorkProvider } from './contexts/WorkContext';

// Custom components
import Nav from './components/Nav/Nav';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Experience from './components/Pages/Experience/Experience';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Pages/Home/Contact';

// Material UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	main: {
		width: '100vw',
		marginTop: '50px',
		[theme.breakpoints.up('sm')]: {
			marginTop: '0'
		}
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<Router>
			<ProjectProvider>
				<WorkProvider>
					<ScrollToTop />
					<Grid container>
						<Grid item xs={12} sm={3}>
							<Nav />
						</Grid>
						<Grid item xs={12} sm={9} className={classes.main}>
							<Header />
							<Switch>
								<Route path="/projects" component={Projects} />
								<Route path="/experience" component={Experience} />
								<Route path="/experience" />
								<Route path="/contact" component={Contact} />
								<Route path="/" component={Home} />
							</Switch>
						</Grid>
					</Grid>
				</WorkProvider>
			</ProjectProvider>
		</Router>
	);
}
