import {FunctionalComponent, h} from 'preact';
import {colorHash} from "../util";

import style from './Block.module.css';

const Block: FunctionalComponent<any> = (block: any) => {
  return (
    <article className={style.block} style={{ '--color': colorHash(block.id).rgb }}>
      <header>
        {`${block.first_name} ${block.last_name}`}
      </header>
      <main>
        <address>
          <a href={`mailto:${block.email}`}>{block.email}</a><br/>

          <p>{`${block.address.street}, ${block.address.city}, ${block.address.country}`}</p>
        </address>
      </main>
    </article>
  );
};

export default Block;
