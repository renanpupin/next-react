import type { GetServerSideProps } from 'next';

type Product = {
    id: string
}
function Product({id}: Product) {
    return <div>
        <div>
            Product {id}
        </div>
    </div>
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            id: String(+new Date())
        },
    };
};

export default Product