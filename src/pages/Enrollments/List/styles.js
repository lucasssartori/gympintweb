import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1380px;
  margin: 20px auto;
`;

export const Content = styled.div`
  max-width: 1380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  div {
    display: flex;
  }

  button {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 142px;
    height: 36px;
    padding: 0px 15px;
    color: #fff;
    background: #ee4d64;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    border: 0;
  }
`;

export const ContentTable = styled.div`
  background: #fff;
  border-radius: 4px;
  width: auto;
  max-width: 1380px;
  padding: 25px;
  margin: 20px;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1380px;
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

  > tr:hover {
    border-bottom: 1px solid #eeeeee;
  }

  td {
    border-bottom: 1px solid #eeeeee;
    padding: 15px 0;
    p {
      font-size: 16px;
      line-height: 20px;
      color: #666666;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;

  & + div {
    border-bottom: 1px solid #eeeeee;
  }

  :last-child {
    border-bottom: 0;
  }

  strong {
    font-size: 16px;
    line-height: 19px;
    color: #444444;
  }

  span {
    flex: 1;
    border-bottom: 1px solid #eeeeee;
  }

  h1 {
    font-size: 24px;
    line-height: 20px;
    color: #666666;
  }

  .colAluno {
    text-align: left;
  }
`;



export const TdPlano = styled.div`
  width: 100px;
  text-align: center;
  margin-right: 40px;
`;

export const TdData = styled.div`
  width: 250px;
  text-align: center;
`;

export const TdAtiva = styled.div`
  width: 200px;
  text-align: center;
`;

export const ButtonEdit = styled.button`
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

export const ButtonDelete = styled.button`
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #de3b3b;
  border: 0;
  background: #fff;
  padding: 0;
  margin-right: 15px;
`;

export const Page = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  button {
    border: none;
    background: #ee4d64;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px 10px;
    color: #fff;
    box-shadow: 4px 4px 4px #888;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
      box-shadow: none;
    }

    &:active {
      box-shadow: none;
    }
  }

  span {
    font-size: 10px;
    padding: 0 10px;
    color: #666666;
  }
`;
