"use client"
import { useRouter } from 'next/router';

const UserPage = ({params}:{
    params: {slug: string}
}) => {

    return (
        <div>
            <h1>User Page for {params.slug}</h1>
        </div>
    );
};

export default UserPage;