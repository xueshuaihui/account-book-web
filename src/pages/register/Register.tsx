import { Form, Input } from 'antd-mobile'
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div>
      <Form layout='horizontal'>
      <Form.Item label='手机号' name='username'>
            <Input placeholder='手机号' clearable />
          </Form.Item>
          <Form.Item
            label='短信验证码'
            extra={
              <div className={styles.extraPart}>
                <a>发送验证码</a>
              </div>
            }
          >
            <Input placeholder='请输入验证码' clearable />
          </Form.Item>
        </Form>
    </div>
  )
}
export default Register;
