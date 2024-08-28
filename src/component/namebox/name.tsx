import { useState, type SetStateAction} from 'react';
import {confirmName} from './nameStore';

const Name = () => {
    const [name, setName] = useState<string>("");
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
        console.log({name});
        
    }
    const handleConfirm = () =>{
        confirmName.set(name);
        console.log('confirm name is:',confirmName.get());
        
    }
    return (
        <div className="flex items-end justify-center min-h-screen">
            <div className="flex flex-col items-center mb-8">
                <input 
                type="text" 
                value={name}
                onChange={handleNameChange}
                placeholder="โปรดใส่ชื่อของคุณ"
                className="w-half max-w-xs p-2 text-white placeholder-white bg-[#7D7D7D] border-2 border-white rounded-2xl focus:outline-none"
            />
            <div className='mt-2'>
            <button type='submit' onClick={handleConfirm} 
                className="w-32 max-w-xs p-2 text-black bg-white rounded-2xl active:bg-black active:text-white">
                ยืนยัน</button>
            </div>
            
            </div> 

        </div>
    );
}

export default Name;
