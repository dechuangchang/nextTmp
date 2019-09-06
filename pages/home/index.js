
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link'
import {getCurrency} from '../../js/actions/common';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from 'antd'
const FormItem = Form.Item
const Option = Select.Option
const mapStateToProps = (state, ownProps) => {
  return {
    
    currencyList: state.currencyList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getCurrency},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }
    
    componentWillMount() {
     
      
    }
    componentDidMount(){
     
    }
    render() {
      let {currencyList,getCurrency} = this.props
        return  <div className='home' style={{ marginTop: 100 }}>
        {
          currencyList.map(item=><span key={item}>{item}index</span>)
        }
        <Form layout='horizontal'>
          <FormItem
            label='Input Number'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <InputNumber
              size='large'
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name='inputNumber'
            />
            <a href='#'>Link</a>
          </FormItem>
    
          <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Switch onChange={()=>{getCurrency()}} defaultChecked name='switch' />
          </FormItem>
    
          <FormItem label='Slider' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Slider defaultValue={70} />
          </FormItem>
    
          <FormItem label='Select' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
            <Select
              size='large'
              defaultValue='lucy'
              style={{ width: 192 }}
              name='select'
            >
              <Option value='jack'>jack</Option>
              <Option value='lucy'>lucy</Option>
              <Option value='disabled' disabled>
                disabled
              </Option>
              <Option value='yiminghe'>yiminghe</Option>
            </Select>
          </FormItem>
    
          <FormItem
            label='DatePicker'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <DatePicker name='startDate' />
          </FormItem>
          <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
            <Button  size='large' type='primary' htmlType='submit'>
            <Link href="/about"><a>OK</a></Link>
            </Button>
            <Button size='large' style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </div>
    }
}
export default App;
