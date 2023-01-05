import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
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
    const _data = scrolledData.length > 0 ? scrolledData : data.results;
    return _data.map((item) => (
      <Character key={item.last_name} item={item} excerpt />
    ));
  };

  function Loading() {
    return <h2>Loading...</h2>;
  }

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      let dataArray = [...scrolledData].concat(data.results);
      setScrolledData(dataArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useLayoutEffect(() => {
    if (searchValue.length > 0 && scrolledData.length > 0) {
      const row = scrolledData.filter(
        (value) =>
          value.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          value.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
          value.profession.toLowerCase().includes(searchValue.toLowerCase())
      );
      setScrolledData(row);
    }
    if (searchValue.length === 0 && scrolledData.length > 0)
      setScrolledData(data.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <section>
      <Search
        placeholder="Search"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <h2 style={{ textAlign: "center" }}>Find Your Oompa Loompa</h2>
      <p style={{ textAlign: "center" }}>There are more than 100K</p>
      <Suspense fallback={<Loading />}>
        {data && data.results && data.results !== undefined && (
          <InfiniteScroll
            dataLength={data.results.length * data.current}
            next={() => setPage(page + 1)}
            hasMore={data.total >= data.current}
            loader={<p>Loading...</p>}
            className="list-wrapper"
            endMessage={<p>No more results</p>}
          >
            {renderList()}
          </InfiniteScroll>
        )}
      </Suspense>
    </section>
  );
};

export default ListPage;
