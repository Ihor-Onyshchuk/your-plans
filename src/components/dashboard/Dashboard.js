import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { firestoreConnect } from 'react-redux-firebase';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends PureComponent {
	render() {
		const { projects, auth, notifications } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />;

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications notifications={notifications} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
		notifications: state.firestore.ordered.notifications
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'projects',
			orderBy: ['createdAt', 'desc']
		},
		{
			limit: 3,
			orderBy: ['time', 'desc'],
			collection: 'notifications',
		}
	])
)(Dashboard);