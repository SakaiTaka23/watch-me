import { Dispatch, Reducer, createContext, useReducer, useContext } from 'react';

type PeriodContextState = {
  period: PeriodState;
  dispatch: Dispatch<PeriodAction>;
};

type PeriodState = { year: number; month: number };

type PeriodAction =
  | { type: 'next_month' }
  | { type: 'pre_month' }
  | { type: 'change'; month: number }
  | { type: 'today' };

const initialPeriod: PeriodState = { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

const reducer: Reducer<PeriodState, PeriodAction> = (state: PeriodState, action: PeriodAction) => {
  switch (action.type) {
    case 'next_month':
      const next = state.month + 1;
      if (next != 13) {
        state.month = next;
      } else {
        state.month = 1;
        const next = state.year + 1;
        if (next != 2026) {
          state.year = next;
        }
      }
      return { ...state };
    case 'pre_month':
      const pre = state.month - 1;
      if (pre != 0) {
        state.month = pre;
      } else {
        state.month = 12;
        const pre = state.year - 1;
        if (pre != 2020) {
          state.year = pre;
        }
      }
      return { ...state };
    case 'change':
      return { ...state, month: action.month };
    case 'today':
      return { ...initialPeriod };
  }
};

const PeriodContext = createContext({} as PeriodContextState);

const PeriodProvider = ({ children }) => {
  const [period, dispatch] = useReducer(reducer, initialPeriod);

  return <PeriodContext.Provider value={{ period, dispatch }}>{children}</PeriodContext.Provider>;
};

const usePeriod = () => useContext(PeriodContext);

export { PeriodProvider, usePeriod };
