import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (!props.notification) {
    return null
  }else{

  
  return (
    <div style={style}>
      {props.notification}
    </div>
  )}
  }
const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const Notification2 = connect(mapStateToProps)(Notification)
export default Notification2