import React from 'react'
import {NavBar, InputItem,TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'
import {connect} from 'react-redux'
import {update }  from '../../redux/user.redux.js'
import {Redirect} from 'react-router-dom'

@connect(
  state=>state.user,
  {update}
)
class GeniusInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      desc:''
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(key,value) {
    this.setState({
      [key]:value
    })
  }
  render(){
    const path = this.props.location.pathname
    const redirectTo = this.props.redirectTo
    return (
      <div>
        {/* 跳转链接与当前链接不一致再进行跳转 */}
        {redirectTo&&path!==redirectTo ? <Redirect to={this.props.redirectTo}/>: null}
        <NavBar mode="dark">genius完善信息页</NavBar>
        <AvatarSelector  
          selectAvatar={(imgname)=>{
            this.setState({
              avatar:imgname
            })
          }} 
        ></AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title',v)}>
          应聘职位
        </InputItem>
        <TextareaItem 
          onChange={(v)=>this.onChange('desc',v)}
          rows={3}
          autoHeight
          title='个人简介'
        >
        </TextareaItem>
        <Button 
          onClick={()=>{
            this.props.update(this.state)
          }}
          type='primary'>保存</Button>
      </div>
    )
  }
}

export default GeniusInfo