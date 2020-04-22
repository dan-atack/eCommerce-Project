import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import NoResults from '../NoResults';
import ItemCard from '../../components/ItemCard';

const ItemDisplay = () => {
  const COLORS = useSelector((state) => state.designSetting);
  const ITEMS_PER_PAGE = 12;
  let displayItems = useSelector((state) => state.filters.displayItems);

  const [pages, setPages] = useState([[]]);
  const [currentPage, setCurrentPage] = useState(0);
  // To set the pages everytime displayItems changes. This makes this component re-usable
  useEffect(() => {
    if (displayItems.length > 0) {
      let pagesProxy = [];
      // take the array and split it into pages
      displayItems.forEach((item, id) => {
        const pageId = Math.floor(id / ITEMS_PER_PAGE);
        let total = [...pagesProxy];
        if (total.length > pageId) {
          total[pageId].push(item);
        } else {
          let newPage = [];
          newPage.push(item);
          total.push(newPage);
        }
        pagesProxy = total;
      });
      setPages(pagesProxy);
    }
    setCurrentPage(0);
  }, [displayItems]);

  return (
    <>
      {displayItems.length > 0 ? (
        <>
          <InfoBox>
            <div style={{ color: COLORS.header, marginLeft: '5px' }}>
              Displaying items {currentPage * ITEMS_PER_PAGE + 1} to{' '}
              {Math.min(
                currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
                displayItems.length
              )}{' '}
              of {displayItems.length}
            </div>
            <PageSelectBox>
              <PageChange
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                COLORS={COLORS}
              >
                &#8656; Previous page
              </PageChange>
              <PageChange
                onClick={() => {
                  if (currentPage < pages.length - 1) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                COLORS={COLORS}
              >
                Next Page &#8658;
              </PageChange>
            </PageSelectBox>
          </InfoBox>
          <Wrapper>
            {pages[currentPage].map((item) => {
              return <ItemCard key={item._id} product={item} />;
            })}
          </Wrapper>
          <PageSelectBox style={{ justifyContent: 'space-between' }}>
            <PageChange
              onClick={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              COLORS={COLORS}
            >
              &#8656; Previous page
            </PageChange>
            <PageChange
              onClick={() => {
                if (currentPage < pages.length - 1) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              COLORS={COLORS}
            >
              Next Page &#8658;
            </PageChange>
          </PageSelectBox>
        </>
      ) : (
        <NoResults />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PageSelectBox = styled.div`
  display: flex;
  font-size: 0.7rem;
`;
const PageChange = styled.div`
  color: ${(props) => props.COLORS.header};
  padding: 4px 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 9999px;
  transition: 250ms;
  &:hover {
    background: whitesmoke;
  }
`;

export default ItemDisplay;
