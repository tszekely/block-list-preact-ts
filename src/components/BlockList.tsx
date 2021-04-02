import {FunctionalComponent, h} from 'preact';
import Block from "./Block";
import {getJsonItems} from "../api";
import {useEffect, useState} from "preact/hooks";

import style from './BlockList.module.css';

const BlockList: FunctionalComponent<{ page?: number; pageSize?: number }> = ({ page = 1, pageSize = 100 }) => {
  const [jsonItems, setJsonItems] = useState([]);

  useEffect(() => {
    getJsonItems().then(setJsonItems);
  }, []);

  const displayItems = jsonItems.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className={style.blockList}>
      {displayItems.map(block => (
        <Block {...block} />
      ))}
    </section>
  );
};

export default BlockList;
