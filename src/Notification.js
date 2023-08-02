

import Toast from 'react-bootstrap/Toast';

function Notification() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
       
       
      ].map((variant, idx) => (
        <div className='fifteen'>
        <Toast style={{width:"300px",padding:"50px",backgroundColor:"pink",} }
          
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header style={{textAlign:"left"}}>
            <img
              src=""
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">INSTAGRAM</strong>
            
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a instagram message.
          </Toast.Body>
        </Toast>
        </div>
      ))}
    </>
  );
}

export default Notification;