//useState,useEffect 예제
import {useState, useEffect} from "react";

const Info = () =>{

    const [name, setName] = useState('');
    const [nickName, setNickname] = useState('');

    // useEffect(()=>{
    //     console.log("렌더링이 완료되었습니다.");
    //     console.log({name, nickName});
    // }, []);//두번째 파라미터를 빈 배열로 넣어주면 처음 랜더링 시에만 실행

    // useEffect(()=>{
    //     console.log("렌더링이 완료되었습니다.1");
    //     console.log({name, nickName});
    // }, [name]);//특정 값이 변경될때 실행하고싶으면 해당 변수를 넘겨줌

    useEffect(()=>{
        console.log("렌더링이 완료되었습니다.1");
        console.log({name, nickName});
    return ()=>{//함수를 return 하면 언마운트 되기 직전이나, 업데이트 되기 직전에 수행
        console.log("cleanup");
        console.log({name});
    }},[name]);//특정 값이 변경될때 실행하고싶으면 해당 변수를 넘겨줌




    const onChangeName = e =>{
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickName} onChange={onChangeNickName}/>
            </div>

            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>별명 : </b>{nickName}
                </div>
            </div>

        </div>
    );
}

export default Info