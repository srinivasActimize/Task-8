import { DNA } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
    <DNA
visible={true}
height="200"
width="200"
ariaLabel="dna-loading"

wrapperClass="dna-wrapper"
/>
</div>
  )
}