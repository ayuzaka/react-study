import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../data';
import { usePrompt } from '../hooks/useRouter';

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId!, 10));

  usePrompt('Are you leave??', invoice?.number === 1997)

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice?.amount}</h2>
      <p>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice?.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
