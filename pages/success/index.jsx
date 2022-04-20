import Button from '../../components/ui/Button';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div>
      <h1>Success!</h1>
      <p>thank you for your puchase</p>
      <Link href={`/`}>Continue shopping</Link>
    </div>
  );
};

export default SuccessPage;
