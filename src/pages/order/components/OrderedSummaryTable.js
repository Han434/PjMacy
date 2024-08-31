import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useOrder } from '../../../features';

const OrderedSummaryTable = () => {
  const { products , payments } = useOrder();

  const [summary, setSummary] = useState({
    totalQuantity: 0,
    totalAmount: 0,
    totalPayment: 0,
    receivableAmount: 0,
    paymentStatus: 'Unpaid',
  });

  useEffect(() => {
    const calculateSummary = () => {
      const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
      const totalAmount = products.reduce((acc, product) => acc + product.quantity * product.price, 0);
      const totalPayment = payments.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
      let receivableAmount = totalAmount - totalPayment;
      let paymentStatus = 'Unpaid';

      if (receivableAmount === 0) {
        paymentStatus = 'Paid';
      } else if (receivableAmount < 0) {
        paymentStatus = 'Overpaid';
      } else if (receivableAmount > 0) {
        paymentStatus = 'Partial Paid';
      }

      setSummary({
        totalQuantity,
        totalAmount,
        totalPayment,
        receivableAmount: Math.abs(receivableAmount),
        paymentStatus,
      });
    };
    calculateSummary();
  }, [products, payments]);

  return (
    <TableContainer>
      <Table sx={{ minWidth: "100%", backgroundColor: 'white'}} size="small">
        <TableBody>
          <TableRow>
            <TableCell>Total Quantity</TableCell>
            <TableCell align="center">{summary.totalQuantity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Amount</TableCell>
            <TableCell align="center">{summary.totalAmount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Payment</TableCell>
            <TableCell align="center">{summary.totalPayment}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Receivable Amount</TableCell>
            <TableCell align="center">{summary.receivableAmount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Payment Status</TableCell>
            <TableCell align="center">{summary.paymentStatus}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderedSummaryTable;