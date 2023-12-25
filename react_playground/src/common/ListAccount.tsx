import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {DetailAccount} from "./DetailAccount"
import "../shared/interface/AccountProps.tsx"


export const ListAccount: React.FC = () => {
  const [items, setItems] = useState<AccountProps[] | null>(null);
  const { id } = useParams<{id :string}>(); 

  useEffect(() => {
    // console.log(id);
    const fetchItem = async () => {
      try
      {
        const res = await fetch(
          `http://127.0.0.1:3000/accounts`
        );
        const itemData: AccountProps[] = await res.json();
        setItems(itemData)
      } catch(error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);


  return (
    <>
    <section>
      <h2>LIST / Account </h2>
      <div id="list_account">
      {
        items?.map((i) => (
        <li key={i.name}>
         { i.image && <img src={i.image} /> }
          <a onClick={DetailAccount}>{i.name}</a>{" "}
          <span>{i.email}</span>
        </li>
      ))        
      }
      </div><div id="detail"></div>
      </section>
    </>
  );


};
