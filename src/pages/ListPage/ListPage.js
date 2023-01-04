import React, { useState, useEffect } from "react";
import { Character } from "../../components/Character/Character";
import { useGetOompasByPageQuery } from "../../services/oompas";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../../components/Search/Search";

import "./ListPage.css";

const ListPage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetOompasByPageQuery(page);
  const [scrolledData, setScrolledData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const renderList = () => {
    if (isLoading) return <p>Loading list...</p>;
    if (error) return <p>Unable to display list.</p>;
    if (data && data.results && data.current && scrolledData.length > 0) {
      return scrolledData.map((item) => (
        <Character key={item.last_name} item={item} excerpt />
      ));
    }
  };
  useEffect(() => {
    if (data.results !== undefined) {
      let dataArray = [...scrolledData].concat(data.results);
      setScrolledData(dataArray);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue.length > 0 && data) {
      const row = scrolledData.filter((value) =>
        value.first_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setScrolledData(row);
    } else setScrolledData(data.results);
  }, [searchValue, data]);
  
  console.log(scrolledData);
  return (
    data &&
    data.results &&
    data.current &&
    data.total && (
      <section>
        <Search
          placeholder="Search"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <InfiniteScroll
          dataLength={data.results.length * data.current} //This is important field to render the next data
          next={() => setPage(page + 1)}
          hasMore={data.total >= data.current}
          loader={<h4>Loading...</h4>}
          className="list-wrapper"
          endMessage={<p style={{ textAlign: "center" }}>No more results</p>}
        >
          {renderList()}
        </InfiniteScroll>
      </section>
    )
  );
};

export default ListPage;
