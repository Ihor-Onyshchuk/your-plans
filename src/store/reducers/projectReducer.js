const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'do my nails', content: 'blah blah blah' },
    { id: '3', title: 'go to typing club', content: 'blah blah blah' },
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
    default:
      return state;
  }
}

export default projectReducer;