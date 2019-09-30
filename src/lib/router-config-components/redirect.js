import React from 'react'
import { Redirect } from 'react-router-dom'


export const redirectTo = (path) => (properties) => {
  const parameters = properties?.match?.params

  if (parameters) {
    const keys = Object.keys(parameters)
    const currentPath = keys.reduce((value, key) => value.replace(`:${key}`, parameters[key]), path)

    return <Redirect key={currentPath} to={currentPath} />
  }

  return <Redirect key={path} to={path} />
}
