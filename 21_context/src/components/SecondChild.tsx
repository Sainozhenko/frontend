import React,{useContext} from 'react';
import { UserContext } from './Utils';

const SecondChild = () => {
const users = useContext(UserContext);
console.log(users);

return (
<></>
)
}

export default SecondChild;