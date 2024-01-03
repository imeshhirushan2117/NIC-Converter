import Card from 'react-bootstrap/Card';
import MyButton from '../../component/MyButton/MyButton'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import lankaNIC from 'lanka-nic';
import dateFormat, { masks } from "dateformat";
import { capitalize } from 'lodash';

function Nic() {
    const now = new Date();
    const [nic, setnic] = useState("")
    const [bday, setbday] = useState("")
    const [gender, setgender] = useState("")

    function search() {

        console.log(nic);
        let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
        setbday(dateFormat(dateOfBirth, 'dddd, mmmm d, yyyy'))
        const capitalizedString = capitalize(gender);
        setgender(capitalizedString)

       
    }

  
    function clear() {
        setnic("")
        setbday("")
        setgender("")
    }

    return (
        <div>
            <Card className='m-auto mt-5' style={{ width: '25rem' }}>

                <Card.Body>
                    <Card.Title>Lanka Nic</Card.Title>
                    <Card.Text>
                        <Form.Control value={nic} className='mt-4' type="text" placeholder="Your Nic Number" onChange={(val) => setnic(val.target.value)} />

                        <h5 className='mt-3'>{bday}</h5>
                        <h5>{gender}</h5>
                    </Card.Text>
                    <div>
                        <MyButton name={'Search'} color={'success'} onClick={search} />
                        <MyButton name={'Clear'} color={'warning'} onClick={clear} />
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
} export default Nic