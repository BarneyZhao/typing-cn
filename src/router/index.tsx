import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

interface Props {
    mainClass: string;
    header: React.ReactNode;
    footer: React.ReactNode;
}

const router: React.FC<Props> = (routeProps) => (
    <Router basename={process.env.REACT_APP_DOMAIN}>
        {routeProps.header}
        <div className={routeProps.mainClass}>
            <Suspense fallback={<div></div>}>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            path={route.path}
                            exact={route.exact && !route.children}
                            key={i}
                            render={(props) => (
                                <div>
                                    {route.component
                                        ? React.createElement(route.component, props)
                                        : ''}
                                    {route.children && route.children.length > 0 && (
                                        <Suspense fallback={<div></div>}>
                                            <Switch>
                                                {route.children.map((child, j) => (
                                                    <Route
                                                        path={props.match.url + child.path}
                                                        exact={child.exact}
                                                        key={j}
                                                        component={child.component}
                                                    />
                                                ))}
                                            </Switch>
                                        </Suspense>
                                    )}
                                </div>
                            )}
                        />
                    ))}
                </Switch>
            </Suspense>
        </div>
        {routeProps.footer}
    </Router>
);

export default router;
