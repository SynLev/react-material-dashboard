import { combineReducers } from 'redux';
import { currentBlock } from './currentBlock';
import { ethBalance } from './ethBalance';
import { transactionCount } from './transactionCount';
import { pastBalances } from './pastBalances';
import { pastTransactionCount } from './pastTransactionCount';

export default combineReducers({
  currentBlock,
  ethBalance,
  transactionCount,
  pastBalances,
  pastTransactionCount
});
