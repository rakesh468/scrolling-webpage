import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Comment from "./components/Comment";
import "./App.css";
import Loader from "./components/Loader";
import Endmessage from "./components/Endmessage";
function App() {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(2);
  const [hasmore, sethasmore] = useState(true);
  useEffect(() => {
    const getcomments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
      );
      const data = await response.json();
      setitems(data);
    };

    getcomments();
  }, []);
  console.log(items);

  const fetchcomments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20` //using json placeholder api to render the data//
    );
    const data = await response.json();
    return data;
  };
  const fetchData = async () => {
    const commentsfromserver = await fetchcomments();
    setitems([...items, ...commentsfromserver]);
    if (commentsfromserver.length === 0 || commentsfromserver.length < 20) {
      sethasmore(false);
    }

    setpage(page + 1);
  };
  return (
    <>
      <h2 className="heading">Infinitely Scrolling Web Page</h2>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasmore}
        loader={<Loader />}
        endMessage={<Endmessage />}
      >
        <div className="container">
          <div className="row m-2">
            {items.map((item) => {
              return <Comment key={item.id} item={item} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default App;
