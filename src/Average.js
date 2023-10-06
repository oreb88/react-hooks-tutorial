//useMemo, useCallback, useRef 예제
import {useMemo, useState, useCallback, useRef} from "react";

const getAverage = (numbers) => {

    console.log("평균값 내는중");

    if(numbers.length === 0){
        return 0;
    }
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputRef = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    },[]);//컴포넌트가 처음 랜더링 될때만 함수생성

    const onInsert = useCallback(e => {

        const nextList = list.concat(parseInt(number));

        setList(nextList);
        setNumber('');

        inputRef.current.focus();

    },[list,number]); //list 나 number 가 변경 됐을때만 함수생성

    const avg = useMemo(() => getAverage(list),[list]);//list 의 내용이 바뀔때만 사용

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputRef}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );

}

export default Average;