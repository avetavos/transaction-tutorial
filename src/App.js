import React, { Fragment, useState } from 'react';
import uuid from 'uuid';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
	const [transactionList, setTransactionList] = useState([]);
	const [transaction, setTransaction] = useState({
		id: uuid.v4(),
		category: 'income',
		amount: 0,
		title: ''
	});
	const onHandleChange = e => {
		setTransaction({ ...transaction, [e.target.name]: e.target.value });
	};
	const onHandleSubmit = async e => {
		e.preventDefault();
		if (transaction.amount <= 0 || transaction.title.length <= 0) {
			return false;
		}
		await setTransactionList([...transactionList, transaction]);
		setTransaction({
			...transaction,
			id: uuid.v4(),
			amount: 0,
			title: ''
		});
	};
	const removeTransaction = id => {
		setTransactionList(transactionList.filter(item => item.id !== id));
	};
	return (
		<Fragment>
			<Header></Header>
			<div className='container py-5'>
				<TransactionForm
					onHandleChange={onHandleChange}
					onHandleSubmit={onHandleSubmit}
					transaction={transaction}
				></TransactionForm>
				<TransactionList
					transactionList={transactionList}
					removeTransaction={removeTransaction}
				></TransactionList>
			</div>
		</Fragment>
	);
}

export default App;
