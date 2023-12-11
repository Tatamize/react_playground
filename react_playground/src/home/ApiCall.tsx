import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./apicall.scss";

interface CoffeeProps {
	title: string;
	description: string;
  email: string;
  ingredients: string[];
  image: string;
  id :number;
}

export const ApiCall: React.FC = () => {
  const [items, setItems] = useState<CoffeeProps[] | null>(null);
  const { id } = useParams<{id :string}>(); 

  useEffect(() => {
    console.log(id);
    const fetchItem = async () => {
      try
      {
        const res = await fetch(
          `https://api.sampleapis.com/coffee/hot/`
        );
        const itemData: CoffeeProps[] = await res.json();
        setItems(itemData)
      } catch(error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);


  return (
    <>
    <section id="api_call">
      <h2>TRIAL / call API </h2>
      <p>Let's try to call API!</p>
      <p className="additional_info">via <a href="https://sampleapis.com/api-list/coffee" rel="noreferrer" target="_blank">https://sampleapis.com/api-list/coffee</a></p>
      {
        items?.map((i) => (
        <div className="list_item" key={i.title}>
          <img src={i.image} />
          <div><h3>{i.title}</h3>
          <p>{i.description}</p></div>
          </div>
      ))        
      }
      </section>
    </>
  );


};
