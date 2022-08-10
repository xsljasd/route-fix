import React from "react"

export default function withHeader(WrappedComponent: JSX.IntrinsicAttributes) {
    return class HOC extends React.Component {
        render() {
            return <div>
                <div className="demo-header">
                    我是标题
                </div>
                <WrappedComponent {...this.props} />
            </div>
        }
    }
}


// const EnhanceDemo = withHeader(Demo);
// export default EnhanceDemo;