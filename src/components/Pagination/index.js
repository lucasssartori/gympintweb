import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import { Page } from './styles';

export default function Pagination({ page, setPage, list }) {
  function handleBackPage() {
    setPage(page - 1);
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  return (
    <Page>
      <button
        type="button"
        onClick={() => handleBackPage()}
        disabled={page < 2}
      >
        <AiFillCaretLeft />
      </button>
      <span>{page}</span>
      <button
        type="button"
        onClick={() => handleNextPage()}
        disabled={list < 10}
      >
        <AiFillCaretRight />
      </button>
    </Page>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  list: PropTypes.number.isRequired,
};

Pagination.defaultProps = {};
