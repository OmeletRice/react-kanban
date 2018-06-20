import React from 'react'
import { Switch, Route } from 'react-router'
import { HashRouter as Router } from 'react-router-dom'

function recursiveRouterConfigV4(config = []) {
  const routeMap = []
  config.forEach((item) => {
    const route = {
      path: item.path,
      exact: item.exact,
      layout: item.layout,
      component: item.component,
    }
    if (Array.isArray(item.children)) {
      route.childRoutes = recursiveRouterConfigV4(item.children)
    }
    routeMap.push(route)
  })
  return routeMap
}

function renderRouterConfigV4(container, router, contextPath) {
  const routeChildren = []
  const renderRoute = (routeContainer, routeItem, routeContextPath) => {
    let routePath
    if (!routeItem.path) {
      // eslint-disable-next-line
      console.error('route must has `path`')
    } else if (routeItem.path === '/' || routeItem.path === '*') {
      routePath = routeItem.path
    } else {
      routePath = `/${routeContextPath}/${routeItem.path}`.replace(/\/+/g, '/')
    }

    let exact = routeItem.exact !== undefined ? routeItem.exact : true

    if (routeItem.layout && routeItem.component) {
      routeChildren.push(
        <Route
          key={routePath}
          exact={exact}
          path={routePath}
          render={(props) => {
            return React.createElement(
              routeItem.layout,
              props,
              React.createElement(routeItem.component, props)
            )
          }}
        />
      )
    } else if (routeContainer && routeItem.component) {
      routeChildren.push(
        <Route
          key={routePath}
          exact={exact}
          path={routePath}
          render={(props) => {
            return React.createElement(
              routeContainer,
              props,
              React.createElement(routeItem.component, props)
            )
          }}
        />
      )
    } else {
      routeChildren.push(
        <Route
          key={routePath}
          exact={exact}
          path={routePath}
          component={routeItem.component}
        />
      )
    }

    if (Array.isArray(routeItem.childRoutes)) {
      routeItem.childRoutes.forEach((r) => {
        renderRoute(routeItem.component, r, routePath)
      })
    }
  }

  router.forEach((r) => {
    renderRoute(container, r, contextPath)
  })

  return <Switch>{routeChildren}</Switch>
}

function formateRouter (routerConfig) {
  return renderRouterConfigV4(null, recursiveRouterConfigV4(routerConfig), '/')
}

const RootRouter = (routerConfig) => {
  return (
    <Router>{ formateRouter(routerConfig) }</Router>
  )
}

const ChildRouter = (routerConfig) => {
  return (
    formateRouter(routerConfig)
  )
}

export { RootRouter, ChildRouter }
