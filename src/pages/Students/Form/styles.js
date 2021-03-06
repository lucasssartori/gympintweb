import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const Content = styled.div`
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    display: flex;
  }
`;

export const BtnVoltar = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 112px;
  height: 36px;
  padding: 0px 15px;
  color: #fff;
  background: #cccccc;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border: 0;
  margin-right: 15px;
`;

export const BtnSalvar = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 112px;
  height: 36px;
  padding: 0px 15px;
  color: #fff;
  background: #ee4d64;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border: 0;
`;

export const ContentForm = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 100%;
  max-width: 900px;
  padding: 20px;

  label {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444444;
  }

  form {
    input {
      width: 100%;
      margin: 15px 0px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      height: 45px;
      padding-left: 5px;
      ::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #999999;
      }
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    .myContainer {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;

      div {
        flex: 1;
      }
    }

    .myDiv {
      margin-left: 15px;
    }

    span {
      color: #f64c75;
      display: flex;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .react-datepicker-wrapper {
      display: flex;
    }

    .myDatePicker {
      width: 100%;
    }
  }
`;
