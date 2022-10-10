
function getEditorConfig() {
  return {
    namespace: 'DoctorEditor',
    onError(err: Error) {
      throw err
    },
    nodes: [],
  }
}

export default getEditorConfig