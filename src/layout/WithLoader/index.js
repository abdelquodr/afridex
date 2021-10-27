import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import loader from '../../assets/icons/Cube-1s-200px.svg'


const WithLoader = ({ loadableComponent, path='/' }) => {
    
    // state
    const [loading, setLoading] = useState(true)

    // effect
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [loadableComponent, path])
    
    return (
        // <>
        // { path &&
            <Route exact path={ path }>
                { 
                loading ? 
                    <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', width: '100vw', height: '100vh'}}>
                        <img style={{ margin: 'auto', textAlign: 'center'}} src={loader} alt='loader' />
                    </div> :  
                    loadableComponent 
                }
            </Route>
// }
//         </>
    )
}


export default WithLoader