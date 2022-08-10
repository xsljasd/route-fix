import React from "react";

var myStyle = { color: 'red' }

class Name extends React.Component<{ name: string }> {
    render() {
        return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
    }
}
class Url extends React.Component<{ url: string }> {
    render() {
        return <h1>网站地址：{this.props.url}</h1>;
    }
}
class Nickname extends React.Component<{ nickname: string }> {
    render() {
        return <h1>网站地址：{this.props.nickname}</h1>;
    }
}

function Hello(props: { name: any; url: any; nickname: any; }) {
    return (
        <div>
            <Name name={props.name} />
            <Url url={props.url} />
            <Nickname nickname={props.nickname} />
        </div>
    );
}

export default Hello;