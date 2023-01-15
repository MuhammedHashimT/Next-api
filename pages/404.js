import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    },[])
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <p>...oops </p>
            <h3>cant find this page</h3>
            back to <Link href="/">Home</Link>
        </div>

     );
}
 
export default NotFound;