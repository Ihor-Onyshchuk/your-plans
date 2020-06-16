export const createProject = project => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userCredentials = getState().firebase;
  const profile = userCredentials.profile;
  const authorId = userCredentials.auth.uid;


  firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT', project })
  }).catch((err) => {
    dispatch({ type: 'CREATE_PROJECT_ERROR', err })
  });
};