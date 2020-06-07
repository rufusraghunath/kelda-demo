import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HTMLTable from './HTMLTable';
import VirtualizedTable from './VirtualizedTable';
import LazyVirtualizedTable from './LazyVirtualizedTable';
import KeldaTable from './KeldaTable';
import buildRows, { buildRow } from './buildRows';
import { Complexity } from '../ComplexitySwitch';
import './TableSwitch.css';

interface Props {
  users: User[];
  complexity: Complexity;
  selected: number | null;
  checked: number | null;
  select: (id: number) => void;
  check: (id: number) => void;
}

export default function TableSwitch({
  users,
  complexity,
  selected,
  checked,
  select,
  check,
}: Props) {
  const commonProps = {
    selected,
    checked,
    select,
    check,
  };

  return (
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
  );
}
