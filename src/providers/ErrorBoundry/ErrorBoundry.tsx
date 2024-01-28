import React, { Suspense, type ErrorInfo } from 'react'
import { PageError } from './PageError/PageError'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends
  React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <Suspense fallback=''><PageError/></Suspense>
    }
    return children
  }
}

export default ErrorBoundary