import { Switch, Route, useHistory } from 'react-router-dom'
import { option } from './options'
import Layout from '@components/layout'
const isPublicComOption = option.filter(item => !item.meta.isPublicCom);
const PublicComOption = option.filter(item => item.meta.isPublicCom);
const initRoute = (data, history) =>
  data.map(item =>
    <Route
      path={item.path}
      exact={item.path === '/'}
      key={item.path + 'route'}
      render={() => <item.component {...item} history={history}></item.component>}
    ></Route>
  )

export default function RouterEl() {
  const history = useHistory();
  const { location: { pathname } } = history
  return (
    <Switch>
      {initRoute(PublicComOption, history)}
      <Layout>
        {initRoute(isPublicComOption, history)}
      </Layout>
    </Switch>
  )
}