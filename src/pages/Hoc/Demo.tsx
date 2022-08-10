/*
 * @Author: Adolf Jiang jiangjianhao@beyondsoft.com
 * @Date: 2022-06-14 19:26:22
 * @Description: 
 */
import withHeader from "./HOC";
import React from 'react'

@withHeader
export default class Demo extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }
    render() {
        return (
            <div>
                我是一个普通组件
            </div>
        );
    }
}
