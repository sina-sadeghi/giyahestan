import './app.scss';
import React from 'react';
import {ClearBrowserCacheBoundary} from "react-clear-browser-cache";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Router from '../route/Router'
import Provider from "react-redux/lib/components/Provider";
import ErrorBoundary from "../shared/errorBoundary/ErrorBoundary";
import modules from "../modules";
import Loading from "../shared/loading/Loading";
import '../assets/icons/style.css';
import './font.scss';
import '../assets/icons/fontawesome/all.min.css';
import Page404 from "../shared/page404/Page404";

function App() {

    return (
        // <Provider store={store}>
            <ErrorBoundary>
                <ClearBrowserCacheBoundary auto fallback={<Loading/>} duration={6000000}>
                    <BrowserRouter>
                        <Routes>
                            {modules.map(module => (
                                module.routeProps.map(route => (
                                    <Route path={route.path} element={<Router {...route}/>}/>
                                ))
                            ))}
                            <Route path="*" element={<Page404 to="/" />} />
                        </Routes>
                    </BrowserRouter>
                </ClearBrowserCacheBoundary>
            </ErrorBoundary>
        // </Provider>
    );
}

export default App;