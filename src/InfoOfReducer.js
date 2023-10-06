//useReducer
import {useReducer} from "react";


const InfoOfReducer = () =>{

    const [state, dispatch] = useReducer(reducer,{
        name: 'dd',
        nickName: 'cc'
    });

    const {name, nickName} = state;
    const onChange = e => {
        console.log("ad")
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange}/>
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


function reducer (state, action) {
    return {
        ...state,//state 를 그대로 오버라이드하고, action.name 값만 변경한다.
        [action.name]: action.value
    };
}
export default InfoOfReducer