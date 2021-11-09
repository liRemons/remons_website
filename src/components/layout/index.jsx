import { withRouter } from 'react-router-dom'
const publicComponent = () => {

}
function Layout(props) {
  return <>{props.children}</>
}
export default withRouter(Layout)