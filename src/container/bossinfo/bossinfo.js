import React from 'react'
import {NavBar, InputItem,TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector.js'
class BossInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      company:'',
      money:'',
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
    return (
      <div>
        <NavBar mode="dark">BOSS完善信息页</NavBar>
        <AvatarSelector  
          selectAvatar={(imgname)=>{
            this.setState({
              avatar:imgname
            })
          }} 
        ></AvatarSelector>
        <InputItem onChange={(v)=>this.onChange('title',v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={(v)=>this.onChange('company',v)}>
          公司名称
        </InputItem>
        <InputItem onChange={(v)=>this.onChange('money',v)}>
          职位薪资
        </InputItem>
        <TextareaItem 
          onChange={(v)=>this.onChange('desc',v)}
          rows={3}
          autoHeight
          title='职位要求'
        >
        </TextareaItem>
        <Button type='primary'>保存</Button>
      </div>
    )
  }
}

export default BossInfo