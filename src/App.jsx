import { publicRoutes } from "./routes"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { } from "react"
import DefaultLayout from "./layout/DefaultLayout"
import { Fragment } from 'react';




function App() {
  return (
    <div>
      <div>
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
              )
            })}
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
