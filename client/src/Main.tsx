import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HTMLTable from './tables/HTMLTable';
import VirtualizedTable from './tables/VirtualizedTable';
import LazyVirtualizedTable from './tables/LazyVirtualizedTable';
import KeldaTable from './tables/KeldaTable';
import buildRows, { buildRow } from './tables/buildRows';
import FetchUsers from './FetchUsers';
import ComplexitySwitch, { Complexity } from './ComplexitySwitch';
import './Main.css';

function Main() {
  const [users, setUsers] = useState<User[]>([]);
  const [complexity, setComplexity] = useState<Complexity>('n');
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState<number | null>(null);
  const select = (id: number) => {
    id === selected ? setSelected(null) : setSelected(id);
  };
  const check = (id: number) => {
    id === checked ? setChecked(null) : setChecked(id);
  };
  const commonProps = {
    selected,
    checked,
    select,
    check,
  };

  return (
    <div className="main">
      <FetchUsers setUsers={setUsers} />
      <ComplexitySwitch complexity={complexity} setComplexity={setComplexity} />
      <h2>Users</h2>
      <div className="table-container">
        <Switch>
          <Route
            path="/html"
            render={() => (
              <HTMLTable rows={buildRows(complexity, users)} {...commonProps} />
            )}
          />
          <Route
            path="/virtualized"
            render={() => (
              <VirtualizedTable
                rows={buildRows(complexity, users)}
                {...commonProps}
              />
            )}
          />
          <Route
            path="/lazy"
            render={() => (
              <LazyVirtualizedTable
                users={users}
                buildRow={buildRow.bind(null, complexity)}
                {...commonProps}
              />
            )}
          />
          <Route
            path="/kelda"
            render={() => (
              <KeldaTable
                complexity={complexity}
                users={users}
                {...commonProps}
              />
            )}
          />
          <Route path="/">
            <Redirect to="/html" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
