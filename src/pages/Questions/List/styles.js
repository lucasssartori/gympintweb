import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 20px auto;
`;

export const Content = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ContentTable = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 700px;
  tr {
    padding: 15px 0;
  }

  th {
    strong {
      font-size: 16px;
      line-height: 19px;
      color: #444444;
    }
  }

  tr:hover {
    border-bottom: 1px solid #eeeeee;
  }

  td {
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0;
    text-align: center;
    p {
      font-size: 16px;
      line-height: 20px;
      color: #666666;
    }
  }

  tr:last-child td {
    border-bottom: 0px;
  }

  .colLeft {
    text-align: left;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  h1 {
    font-size: 24px;
    line-height: 20px;
    color: #666666;
  }
`;

export const ButtonResp = styled.button`
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #4d85ee;
  border: 0;
  background: #fff;
  padding: 0;
  margin-right: 15px;
  float: right;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  width: 450px;
  padding: 30px;
  background: #fff;
  background: #fff;
  border-radius: 4px;
  form {
    display: flex;
    flex-direction: column;
    strong {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
      margin-bottom: 5px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
      color: #666666;
      margin-bottom: 10px;
    }
    textarea {
      width: 390px;
      height: 130px;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      margin-bottom: 10px;
      padding: 5px;
      resize: none;
      ::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #999999;
      }
    }
    button {
      align-items: center;
      height: 45px;
      color: #fff;
      background: #ee4d64;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      border: 0;
      margin-bottom: 5px;
      &:hover {
        background: ${darken(0.08, '#ee4d64')};
      }
    }
    .closeModal {
      background: #999;
      &:hover {
        background: ${darken(0.08, '#999')};
      }
    }
    span {
      color: #f64c75;
      display: flex;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
`;
