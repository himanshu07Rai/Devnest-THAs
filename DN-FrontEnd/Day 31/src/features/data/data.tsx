import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axios from "axios";
import { add } from "./dataSlice";
const Data = () => {
  const [limit, setlimit] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      dispatch(add(data.data));
    };
    fetchData();
  }, [limit]);
  const data = useSelector((state: RootState) => state.data);

  return data.length === 0 ? (
    <h1>Fetching</h1>
  ) : (
    <div>
      <button
        onClick={() => {
          setlimit(limit + 3);
        }}
      >
        Fetch more
      </button>
      <section className="cards">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src={item.image} alt="" />
              </div>
              <div className="card-back">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Data;
