import { useSelector } from 'react-redux';

function Customer() {
  // ! Whenever the store changes the component will re-render
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;

