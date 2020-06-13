import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

class Dashboard extends PureComponent {
  render() {
    const { projects } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ project }) => {
  return {
    projects: project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
