import {FunctionalComponent, h} from 'preact';
import BlockList from "./BlockList";

import style from './App.module.css';
import {useCallback, useState} from "preact/hooks";

const urlParams = new URLSearchParams(window.location.search);
const urlPageSize = parseInt(urlParams.get("pageSize") || '');

const App: FunctionalComponent = () => {
  let initialPageSize = isNaN(urlPageSize) ? 10 : urlPageSize;

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const onPrevPage = useCallback(() => setPage(page => page - 1), [setPage]);
  const onNextPage = useCallback(() => setPage(page => page + 1), [setPage]);
  const handlePageSizeChange = useCallback((e: any) => setPageSize(e.target?.value), [setPageSize]);

  return (
    <main className={style.app}>
      <header>
        <h1>Blocks</h1>

        <label className={style.items}>
          <span>Items: </span>
          <input type="number" value={pageSize} onKeyUp={handlePageSizeChange}/>
        </label>
      </header>

      <BlockList page={page} pageSize={pageSize}/>

      <footer>
        <div class="paging">
          <button onClick={onPrevPage} disabled={page < 2}>
            Prev
          </button>

          <button className={style.pageCurrent}>
            Page {page}
          </button>

          <button onClick={onNextPage}>
            Next
          </button>
        </div>
      </footer>
    </main>
  );
};

export default App;
