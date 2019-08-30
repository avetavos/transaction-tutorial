import React from 'react';
import PropTypes from 'prop-types';

function TransactionForm(props) {
	return (
		<div className='mb-5'>
			<form onSubmit={e => props.onHandleSubmit(e)}>
				<div className='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='ชื่อรายการ'
						name='title'
						value={props.transaction.title}
						onChange={e => props.onHandleChange(e)}
					/>
					<input
						type='number'
						className='form-control'
						name='amount'
						value={props.transaction.amount}
						onChange={e => props.onHandleChange(e)}
					/>
					<select className='form-control' name='category' onChange={e => props.onHandleChange(e)}>
						<option value='income'>รายรับ</option>
						<option value='expenditure'>รายจ่าย</option>
					</select>
					<div className='input-group-append'>
						<button className='btn btn-success' type='submit'>
							บันทึก
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

TransactionForm.propTypes = {
	transaction: PropTypes.object.isRequired,
	onHandleChange: PropTypes.func.isRequired,
	onHandleSubmit: PropTypes.func.isRequired
};

export default TransactionForm;
