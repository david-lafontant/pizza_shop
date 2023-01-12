export const formatMoney = (amount) => {
  let value = amount;
  
  return (value).toLocaleString('en-US', { 
		style: 'currency', 
		currency: 'USD' 
	});
}