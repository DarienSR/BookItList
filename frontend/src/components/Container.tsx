import "./components.scss";
import React from 'react'

interface IRequiredContainerProps {
  child: any
}

interface IOptionalContainerProps {
  header: string
}

interface IContainerProps extends IRequiredContainerProps, IOptionalContainerProps {}

const defaultProps : IOptionalContainerProps = {
  header: ''
}

const Container = (props : IContainerProps) => {
  const { header, child } = props

  return <>
    <h3 className="container-header">{ header }</h3>
    <div className="container">
      { child }
    </div>
  </>
}

Container.defaultProps = defaultProps
export default Container