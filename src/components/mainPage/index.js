import React, { useState } from "react";
import { data } from "../../data/data";
import { Header } from "../Header";
import { Items } from "../Items";
import { Cards } from "../ItemsCords";

const initialData = data.map((el) => ({
  ...el,
  itemTags: [el.role, el.level, ...(el.languages || []), ...(el.tools || [])],
}));


function MainPage() {
  const [items, setItems] = useState(initialData);
  const [filteredTags, setFiteredTags] = useState([]);
  const [search, setSearch] = useState([]);

  function handleFilters(tag) {
    setFiteredTags((prev) => [...prev, tag]);
    setItems(
      (prev) => prev.filter((el) => el.itemTags.find((el) => el === tag)),
      setSearch(items)
    );
    console.log(filteredTags);
  }

  function clearAll() {
    setItems(initialData);
    setFiteredTags([]);
  }

  function clearFilter(tag) {
    setItems(items.filter((el) => el.itemTags.filter(() => tag !== tag)));
    setFiteredTags(filteredTags.filter((el) => el !== tag));
    setItems(search);
    if (filteredTags.indexOf(tag) === 0) {
      setItems(initialData);
    }
  }

  return (
    <div className="App">
      <Header />

      {filteredTags.length > 0 ? (
        <Items
          filteredTags={filteredTags}
          clearAll={clearAll}
          clearFilter={clearFilter}
        />
      ) : (
        <></>
      )}

      <div className="container">
        {items.map((el) => {
          return (
            <Cards
              key={el.id}
              logo={el.logo}
              company={el.company}
              position={el.position}
              postedAt={el.postedAt}
              contract={el.contract}
              location={el.location}
              isFeatured={el.featured}
              isNew={el.new}
              handleFilters={handleFilters}
              itemTags={el.itemTags}
            />
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
