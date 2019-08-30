import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function TransactionList(props) {
	return (
		<div>
			{props.transactionList.length > 0 ? (
				<table className='table'>
					<thead className='thead-dark'>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>ประเภท</th>
							<th scope='col'>ชื่อรายการ</th>
							<th scope='col'>จำนวนเงิน</th>
							<th scope='col'></th>
						</tr>
					</thead>
					<tbody>
						{props.transactionList.map((item, index) => (
							<tr
								key={item.id}
								className={classnames(
									item.category === 'income' ? 'table-success' : 'table-danger'
								)}
							>
								<th scope='row'>{index + 1}</th>
								<td>{item.category === 'income' ? 'รายรับ' : 'รายจ่าย'}</td>
								<td>{item.title}</td>
								<td>{item.amount}</td>
								<td className='text-center'>
									<button
										type='button'
										className='btn btn-sm btn-outline-danger'
										onClick={e => props.removeTransaction(item.id)}
									>
										x
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h1>ไม่มีข้อมูล</h1>
			)}
		</div>
	);
}

TransactionList.propTypes = {
	transactionList: PropTypes.object.isRequired,
	removeTransaction: PropTypes.func.isRequired
};

export default TransactionList;
