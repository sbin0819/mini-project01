import React from 'react';
import { Form } from 'antd';
import styled from 'styled-components';

/**
 * 11월 30일
 * input 생성시 계속 사용하게 될 컴포넌트
 * <Input 
     type={type} 
     value={value} 
     watch={watch} // react-hook-form 사용
     register={regiter}  // react-hook-form 사용
     styles={styles} // 옵션
    />
 * watch, register 참고(https://react-hook-form.com/kr/api)
 */

const StyledInput = styled.input`
  width: ${props => props?.width};
  background: ${props => props?.color};
  height: 34px;
  /* border: 0; */
  padding-left: 12px;
  padding-right: 12px;
  overflow: scroll;
  :disabled {
    background: #fff;
    cursor: not-allowed;
  }
`;

const StyledDivider = styled.div`
  color: red;
  height: 18px;
`;

const Input = ({ type, value, watch, register, styles }) => {
  const handleValidate = (type, value) => {
    switch (type) {
      case 'username': {
        // watch(type, value) 를 통해서 value의 변화를 체크한다.
        const isUsername = watch(type, value).match(/^[가-힣|a-z|A-Z|0-9|$@$!%*#?&|]{2,10}$/);
        return !isUsername && <p>{type} not true</p>;
      }
      case 'email': {
        const isEmail = watch(type, value).match(/\S+@\S+\.\S+/);
        return !isEmail && <p>{type} not true</p>;
      }
      default:
        return;
    }
  };

  return (
    <Form.Item label={type}>
      <StyledInput
        type="text"
        id={type}
        name={type}
        defaultValue={value} //default
        ref={register({ required: true, maxLength: 30 })}
        {...styles}
      />
      {/* 아래 간단한 수준에서 에러를 처리하는 옵션 */}
      {/* {errors.arg && errors.arg.type === 'required' && (
                <span>This is required</span>
            )} */}
      <StyledDivider>{handleValidate(type, value)}</StyledDivider>
    </Form.Item>
  );
};

export default Input;
